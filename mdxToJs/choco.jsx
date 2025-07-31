/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
export const matter = undefined;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return <_components.p>{"choco is sweet food, however it is bad for your health"}</_components.p>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
