/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
export const matter = undefined;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return <><_components.p>{"color of lemon is lemon. It is sour and sweet.\r\nIt is one of fruits that is used widly as ingredients"}</_components.p>{"\n"}<_components.p>{"lemon is lemon"}</_components.p></>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
