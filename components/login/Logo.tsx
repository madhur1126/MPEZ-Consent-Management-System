import Image from 'next/image';

/** Swap these for your organisation's real name and logo. */
export const BRAND = {
  name: 'MP East Zone',
} as const;

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/mpez-logo.png"
      alt={`${BRAND.name} logo`}
      width={768}
      height={768}
      className={className}
      priority
    />
  );
}
