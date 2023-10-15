import Image from "next/image";
import { FC } from "react";

interface Props {
  url: string;
  widthMeasure?: string;
  altText: string;
  optimized?: boolean;
  aspectRatioMeasure?: string;
}

export const Img: FC<Props> = ({
  url,
  altText,
  widthMeasure = "100%",
  aspectRatioMeasure = "auto",
  optimized = true,
}) => {
  return (
    <Image
      className="fadeIn"
      src={url}
      alt={altText}
      height={200}
      width={200}
      priority
      style={{
        width: widthMeasure,
        aspectRatio: aspectRatioMeasure,
        objectFit: "cover",
      }}
      unoptimized={!optimized}
    />
  );
};
