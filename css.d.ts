declare module "*.css" {
  const content: string;
  const sheet: CSSStyleSheet;
  export { content, sheet };
  export default sheet;
}