/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
export const matter = {
  "title": "ready"
};
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return <><_components.h1>{"I am ready"}</_components.h1>{"\n"}<_components.p>{"R u ready?"}</_components.p></>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
