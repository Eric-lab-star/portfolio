/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
export const matter = {
  "title": "rust",
  "date": "2025-07-29",
  "img": "/rust_svg.svg"
};
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    p: "p",
    ...props.components
  };
  return <><_components.h3>{"2025-07-29"}</_components.h3>{"\n"}<_components.p>{"I should solve more leetcode problems to level up my rust skills. But I want to\r\nstart bevy project at the same time"}</_components.p></>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
