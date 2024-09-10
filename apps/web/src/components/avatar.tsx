import NextImage from "next/image";

export const Avatar = () => (
  <NextImage
    alt="Callum Flack"
    className="rounded-full object-cover"
    height={92}
    priority
    src="/images/callum-flack.jpg"
    width={92}
  />
);
