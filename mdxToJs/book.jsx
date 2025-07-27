/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
export const matter = undefined;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return <><_components.h1>{"my book is here"}</_components.h1>{"\n"}<_components.p>{"list of books I read in this year"}</_components.p></>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
