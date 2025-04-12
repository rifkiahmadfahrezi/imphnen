import Image, { ImageProps } from "next/image";

interface LogoProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height' | 'priority'> {
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  alt?: string;
  src?: string;
}

export const Logo = ({
  className,
  priority = true,
  width = 100,
  height = 75,
  alt = "",
  src = "/imphnen.png",
  ...props
}: LogoProps) => (
  <Image
    className={className}
    src={src}
    alt={alt}
    width={width}
    height={height}
    priority={priority}
    {...props}
  />
);
