/* Decorative background: sunset glow, trees, substation, transmission towers and wires.
   Everything is computed once at module load, so this stays a plain server component. */

type Tip = [number, number];

const r = (v: number) => Math.round(v * 10) / 10;

function tower(cx: number, by: number, H: number, W: number) {
  const top = by - H;
  const hw = (y: number) => 2 + (W - 2) * ((y - top) / H);
  const ys = [0, 0.1, 0.22, 0.36, 0.54, 0.74, 1].map((f) => top + H * f);

  let d = `M${r(cx - hw(top))} ${top}L${r(cx - hw(by))} ${by}M${r(cx + hw(top))} ${top}L${r(cx + hw(by))} ${by}`;
  ys.forEach((y, i) => {
    d += `M${r(cx - hw(y))} ${r(y)}H${r(cx + hw(y))}`;
    const y2 = ys[i + 1];
    if (y2 !== undefined) {
      d += `M${r(cx - hw(y))} ${r(y)}L${r(cx + hw(y2))} ${r(y2)}M${r(cx + hw(y))} ${r(y)}L${r(cx - hw(y2))} ${r(y2)}`;
    }
  });

  const tips: Tip[] = [];
  for (const [f, k] of [[0.12, 0.85], [0.26, 1.2], [0.42, 1.2]] as const) {
    const y = top + H * f;
    const l = W * k;
    const drop = H * 0.05;
    d += `M${r(cx - l)} ${r(y)}H${r(cx + l)}M${r(cx - l)} ${r(y)}V${r(y + drop)}M${r(cx + l)} ${r(y)}V${r(y + drop)}`;
    d += `M${cx} ${r(y - H * 0.035)}L${r(cx - l)} ${r(y)}M${cx} ${r(y - H * 0.035)}L${r(cx + l)} ${r(y)}`;
    tips.push([r(cx - l), r(y + drop)], [r(cx + l), r(y + drop)]);
  }
  return { d, tips };
}

function gantry(x: number, by: number, h: number, w: number) {
  return (
    `M${x} ${by}V${by - h}M${x + w} ${by}V${by - h}M${x - 4} ${by - h}H${x + w + 4}` +
    `M${x} ${r(by - h * 0.6)}H${x + w}M${x + w / 2} ${by - h}V${by - h - 9}M${x + 4} ${r(by - h * 0.35)}V${by}`
  );
}

function makeTrees() {
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const out: { cx: number; cy: number; rx: number; ry: number }[] = [];
  for (let x = 0; x < 1600; x += 14 + rnd() * 16) {
    const big = x < 120;
    const rad = big ? 26 + rnd() * 22 : 9 + rnd() * 10;
    out.push({
      cx: Math.round(x),
      cy: Math.round(676 - (big ? rad * 0.9 : rad * 0.35)),
      rx: Math.round(rad * 1.1),
      ry: Math.round(rad),
    });
  }
  return out;
}

const NEAR = tower(170, 690, 290, 44);
const FAR = tower(468, 676, 150, 19);
const STATION =
  [545, 595, 650, 705, 760].map((x, i) => gantry(x, 676, 46 + (i % 2) * 12, 30)).join('') + 'M520 676H800';
const WIRES = NEAR.tips
  .map(([x, y], i) =>
    i % 2 === 0
      ? `M0 ${y - 70 + i * 6}Q${x / 2} ${y + 8} ${x} ${y}`
      : `M${x} ${y}Q${x + 230} ${y + 70 + i * 4} ${440 + i * 4} ${560 + i * 6}`,
  )
  .join('');
const TREES = makeTrees();

export function Scene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-0 z-0 aspect-[1600/760] w-[900px] lg:w-full"
    >
      <svg viewBox="0 0 1600 760" preserveAspectRatio="xMinYMax meet" className="block h-full w-full">
        <defs>
          <radialGradient id="cl-sun" cx="760" cy="660" r="360" gradientUnits="userSpaceOnUse">
            <stop offset="0" style={{ stopColor: 'var(--glow-2)' }} stopOpacity="0.95" />
            <stop offset="0.3" style={{ stopColor: 'var(--glow)' }} stopOpacity="0.55" />
            <stop offset="1" style={{ stopColor: 'var(--glow)' }} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cl-grass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: 'var(--grass-a)' }} />
            <stop offset="1" style={{ stopColor: 'var(--grass-b)' }} />
          </linearGradient>
        </defs>

        <circle cx="760" cy="660" r="360" fill="url(#cl-sun)" />

        <g style={{ fill: 'var(--tree)' }}>
          {TREES.map((t, i) => (
            <ellipse key={i} cx={t.cx} cy={t.cy} rx={t.rx} ry={t.ry} />
          ))}
        </g>

        <path d={STATION} fill="none" strokeWidth="1.4" strokeLinecap="round" style={{ stroke: 'var(--station)' }} />

        <path
          d="M0 678C300 664 700 674 1100 668S1500 672 1600 666V760H0Z"
          fill="url(#cl-grass)"
        />

        <path d={WIRES} fill="none" strokeWidth="1" opacity="0.55" style={{ stroke: 'var(--tower)' }} />
        <path d={FAR.d} fill="none" strokeWidth="1.2" strokeLinecap="round" style={{ stroke: 'var(--tower-far)' }} />
        <path
          d={NEAR.d}
          fill="none"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ stroke: 'var(--tower)' }}
        />
      </svg>
    </div>
  );
}

/** Blue wave with a gold edge along the bottom of the page. */
export function FooterWave() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1600 130"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 block h-[clamp(70px,9vw,130px)] w-full"
    >
      <path d="M0 62C420 108 980 32 1600 14V130H0Z" style={{ fill: 'var(--gold)' }} />
      <path d="M0 72C420 118 980 42 1600 30V130H0Z" style={{ fill: 'var(--wave)' }} />
    </svg>
  );
}
