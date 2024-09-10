import {
  EyeOpenIcon,
  InfoCircledIcon,
  QuoteIcon,
  StackIcon,
} from "@radix-ui/react-icons";
import { cx } from "~/cva.config";

export const categoryIconStyle = {
  base: "h-[1.2em] w-[1.2em]",
  adjust: "transform translate-y-[-0.1em]",
};

export const PostCategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "projects":
      return (
        <EyeOpenIcon
          className={cx(categoryIconStyle.base, categoryIconStyle.adjust)}
        />
      );
    case "writing":
      return (
        <QuoteIcon
          className={cx(categoryIconStyle.base, categoryIconStyle.adjust)}
        />
      );
    case "library":
      return (
        <StackIcon
          className={cx(categoryIconStyle.base, categoryIconStyle.adjust)}
        />
      );
    case "about":
      return (
        <InfoCircledIcon
          className={cx(categoryIconStyle.base, categoryIconStyle.adjust)}
        />
      );
    default:
      return null;
  }
};
