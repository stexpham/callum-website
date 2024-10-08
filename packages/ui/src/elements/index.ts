/* 
  Elements are the building blocks of UI.

  Rule of least permission! 
  1. Only export what is needed for the apps/web directory
  2. Do not export if it's only used within this directory 
 */

export { TitleHeader } from "./title-header";
export { OutsetRule } from "./outset-rule";
export { LinkWithArrow } from "./link-variants";
export { Spinner } from "./spinner";
export { Prose, proseVariants, type ProseProps } from "./prose";
