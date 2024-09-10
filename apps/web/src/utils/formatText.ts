import typographicBase from "typographic-base";

export function formatText(input?: string | React.ReactNode) {
  if (!input) {
    return;
  }

  if (typeof input !== "string") {
    return input;
  }

  // looking for the last word in a line that is not preceded by a '<' character and replacing the space before it with a non-breaking space. This ensures that the last word in a line does not get broken across two lines.
  return typographicBase(input, { locale: "en-us" }).replace(
    /\s([^\s<]+)\s*$/g,
    "\u00A0$1",
  );
}
