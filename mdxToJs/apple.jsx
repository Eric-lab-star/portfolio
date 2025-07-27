/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
export const matter = undefined;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    ...props.components
  };
  return <_components.h1>{"apple"}</_components.h1>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
