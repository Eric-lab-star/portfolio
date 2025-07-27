/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
export const matter = {
  "title": "welcome",
  "date": "2025-07-27"
};
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    ...props.components
  };
  return <><_components.h1>{"Welcome to DevLog"}</_components.h1>{"\n"}<_components.h2>{"Welcome to DevLog"}</_components.h2>{"\n"}<_components.h2>{"Welcome to DevLog"}</_components.h2>{"\n"}<_components.h2>{"Welcome to DevLog"}</_components.h2>{"\n"}<_components.h2>{"Welcome to DevLog"}</_components.h2>{"\n"}<_components.h2>{"Welcome to DevLog"}</_components.h2>{"\n"}<_components.h2>{"Welcome to DevLog"}</_components.h2>{"\n"}<_components.ol>{"\n"}<_components.li>{"test"}</_components.li>{"\n"}</_components.ol></>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
