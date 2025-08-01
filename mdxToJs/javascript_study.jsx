/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
export const matter = {
  "title": "javascript",
  "tag": "js",
  "date": "2025-07-29",
  "img": "/js_symbol.svg"
};
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return <><_components.h1>{"Learning can be fun"}</_components.h1>{"\n"}<_components.p>{"develop something and show"}</_components.p></>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
