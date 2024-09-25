const title = `Writing — Callum Flack Design & Development`;
const description = "An archive of projects, writing and ideas.";
export const runtime = "experimental-edge";
export const generateMetadata = () => {
  return {
    title,
    description,
    twitter: {
      title,
      description,
    },
  };
};

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
