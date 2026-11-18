// 

export function Scene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -right-20 top-10 h-[520px] w-[620px] rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute -bottom-36 -left-32 h-[360px] w-[70%] rounded-full bg-white/40 blur-3xl" />

      <svg
        viewBox="0 0 1600 220"
        preserveAspectRatio="none"
        className="absolute bottom-20 left-0 h-40 w-full opacity-40"
      >
        <path
          d="M0 150C340 40 540 220 860 95S1320 22 1600 90"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M0 184C340 74 540 254 860 129s460-73 740-5"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export function HomeIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`relative ${className}`}>
      <svg
        viewBox="0 0 460 470"
        className="h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient
            id="consent-screen"
            x1="120"
            y1="100"
            x2="370"
            y2="310"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e8f4ff" />
            <stop offset="1" stopColor="#b6d9fb" />
          </linearGradient>

          <linearGradient
            id="consent-laptop"
            x1="180"
            y1="285"
            x2="300"
            y2="330"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#0b3473" />
          </linearGradient>

          <linearGradient
            id="consent-shield"
            x1="361"
            y1="224"
            x2="419"
            y2="328"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#0754bf" />
          </linearGradient>

          {/* New blue background gradient */}
          <linearGradient
            id="consent-bg-wave"
            x1="30"
            y1="100"
            x2="430"
            y2="350"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffffff" />
            <stop offset="0.5" stopColor="#dbeafe" />
            <stop offset="1" stopColor="#93c5fd" />
          </linearGradient>

          <filter
            id="consent-shadow"
            x="20"
            y="350"
            width="420"
            height="120"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        {/* Blue curved background behind laptop */}
        <g>
          <path
            d="
              M0 300
              C65 225 110 260 165 225
              C230 180 285 145 345 170
              C390 185 420 145 460 120
              L460 420
              C350 390 270 430 180 390
              C100 355 50 380 0 350 Z
            "
            fill="url(#consent-bg-wave)"
            opacity="0.65"
          />

          <path
            d="
              M0 340
              C75 290 135 310 205 260
              C275 210 340 220 460 170
            "
            fill="none"
            stroke="#93c5fd"
            strokeWidth="3"
            opacity="0.45"
          />

          <path
            d="
              M0 365
              C100 320 160 345 240 295
              C320 250 390 265 460 220
            "
            fill="none"
            stroke="#bfdbfe"
            strokeWidth="12"
            opacity="0.45"
          />

          <circle
            cx="200"
            cy="265"
            r="135"
            fill="#60a5fa"
            opacity="0.09"
          />
        </g>

        {/* Laptop shadow */}
        <ellipse
          cx="299"
          cy="430"
          rx="190"
          ry="18"
          fill="#397fca"
          fillOpacity=".16"
          filter="url(#consent-shadow)"
        />

        {/* Electricity towers */}
        <g
          stroke="#3b72b5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity=".48"
          strokeWidth="2"
        >
          <g transform="translate(0 70)">
            <path d="m57 195 42-125 42 125M62 164h64M70 139h48M78 114h32M86 89h16M65 154l58-33m-52 58 45-52m-49 9 44 31M67 180l47-45" />
            <path d="m97 70-12-13m16 13 12-13M83 56h30M92 48h12" />
          </g>

          <g transform="translate(-124 0)">
            <path d="m397 201 25-75 25 75m-43-24h36m-31-19h26m-21-19h16" />
          </g>
        </g>

        {/* Laptop */}
        <g transform="translate(60 120)">
          <rect
            x="88"
            y="118"
            width="294"
            height="190"
            rx="17"
            fill="#0c3375"
            fillOpacity=".14"
          />

          <rect
            x="82"
            y="108"
            width="274"
            height="190"
            rx="15"
            fill="#123d81"
          />

          <rect
            x="92"
            y="118"
            width="254"
            height="168"
            rx="10"
            fill="url(#consent-screen)"
          />

          <path
            d="M20 303c0-6 5-11 11-11h345c6 0 11 5 11 11l-26 13H48l-28-13Z"
            fill="url(#consent-laptop)"
          />

          <path
            d="M185 293h74l-7 10h-60l-7-10Z"
            fill="#dbeafe"
            fillOpacity=".85"
          />
        </g>

        {/* Consent document */}
        <g transform="translate(45 128) rotate(-1 222 532)">
          <rect
            x="185"
            y="72"
            width="130"
            height="209"
            rx="5"
            fill="#fff"
          />

          <path
            d="M197 85h106v48H197z"
            fill="#f3f8ff"
          />

          <path
            d="M250 93 237 98v9c0 11 6 18 13 21 7-3 13-10 13-21v-9l-13-5Z"
            fill="#16a34a"
          />

          <path
            d="m244 106 4 4 8-9"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <text
            x="250"
            y="145"
            fill="#102a55"
            fontFamily="Arial, sans-serif"
            fontSize="16"
            fontWeight="700"
            textAnchor="middle"
          >
            Consent
          </text>

          {[0, 1, 2, 3].map((row) => (
            <g key={row} transform={`translate(0 ${row * 27})`}>
              <rect
                x="200"
                y="157"
                width="15"
                height="15"
                rx="3"
                fill="#16a34a"
              />

              <path
                d="m204 164 3 3 5-7"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M224 160h67M224 168h55"
                stroke="#94a3b8"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </g>
          ))}
        </g>

        {/* Security shield */}
        <g transform="translate(-115 90) scale(1.28 1.1)">
          <path
            d="M368 227 408 241v31c0 31-20 50-40 59-20-9-40-28-40-59v-31l40-14Z"
            fill="#084a9b"
            fillOpacity=".2"
          />

          <path
            d="M367 218 409 233v32c0 31-21 51-42 61-21-10-42-30-42-61v-32l42-15Z"
            fill="url(#consent-shield)"
            stroke="#fff"
            strokeWidth="5"
          />

          <path
            d="M359 256v-7a8 8 0 0 1 16 0v7"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <rect
            x="355"
            y="260"
            width="24"
            height="20"
            rx="4"
            fill="#fff"
          />

          <circle cx="368" cy="265" r="2" fill="#0b4ca0" />

          <path
            d="M368 266v4"
            stroke="#0b4ca0"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Plant */}
        <g transform="translate(52 98)">
          <path
            d="M48 292c-4-22 0-41 10-53m0 53c0-24 7-42 20-54m-20 54c-5-15-13-25-24-30"
            stroke="#367b2a"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M58 254c-19-2-26-12-25-25 16-1 27 7 25 25Zm2 9c18-4 26-14 25-29-15 2-27 12-25 29Zm-4 11c-16-3-24-12-24-25 15 1 25 10 24 25Z"
            fill="#69b846"
          />

          <path
            d="M41 292h34l-4 22H46l-5-22Z"
            fill="#f5a623"
          />

          <path
            d="M43 292h30l-2 7H45l-2-7Z"
            fill="#ffd166"
          />
        </g>
      </svg>
    </div>
  );
}

type Benefit = {
  icon: "people" | "eye" | "hand";
  title: string;
  description: string;
};

function BenefitIcon({ name }: { name: Benefit["icon"] }) {
  if (name === "people") {
    return (
      <>
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M3 20v-1a6 6 0 0 1 12 0v1Zm13-5a5 5 0 0 1 5 5h-4" />
      </>
    );
  }

  if (name === "eye") {
    return (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </>
    );
  }

  return (
    <>
      <path d="M7 12V6a2 2 0 0 1 4 0v5-7a2 2 0 0 1 4 0v7-5a2 2 0 0 1 4 0v8c0 4-2 7-6 7h-1c-2 0-3-1-4-2l-4-4a2 2 0 0 1 3-3l3 2" />
      <path d="m10 11 2 2" />
    </>
  );
}

/** Blue wave with a gold edge and the three benefit highlights. */
export function FooterWave({
  benefits,
}: {
  benefits: Benefit[];
}) {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 130"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 block h-[clamp(150px,15vw,205px)] w-full"
      >
        <path
          d="M0 12C350 62 870 42 1600 36V130H0Z"
          style={{ fill: "var(--gold)" }}
        />

        <path
          d="M0 42C360 91 920 70 1600 62V130H0Z"
          style={{ fill: "var(--wave)" }}
        />
      </svg>

      <div
        id="help"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex h-[clamp(110px,11vw,150px)] items-end pb-5 text-white sm:pb-8"
      >
        <div className="mx-auto grid w-full max-w-[1490px] grid-cols-3 px-3 sm:px-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex min-w-0 items-center justify-center gap-2 px-1 sm:gap-4 sm:px-4 ${
                index > 0 ? "border-l border-white/60" : ""
              }`}
            >
              <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-white text-blue-800 sm:h-12 sm:w-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                >
                  <BenefitIcon name={benefit.icon} />
                </svg>
              </span>

              <span className="min-w-0">
                <span className="block truncate text-[10px] font-extrabold leading-tight sm:text-base">
                  {benefit.title}
                </span>

                <span className="mt-1 hidden text-xs leading-snug text-blue-50 sm:block">
                  {benefit.description}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
