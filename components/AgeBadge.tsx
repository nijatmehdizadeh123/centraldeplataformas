import Image from 'next/image';

interface AgeBadgeProps {
  size?: number;
  className?: string;
}

export default function AgeBadge({ size = 40, className = '' }: AgeBadgeProps) {
  return (
    <Image
      src="/ptreg/18plus.png"
      alt="18+"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
