/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
export const matter = {
  "title": "welcome",
  "date": "2025-07-27"
};
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return <><_components.ol>{"\n"}<_components.li>{"First item"}{"\n"}<_components.ol>{"\n"}<_components.li>{"Indented item"}</_components.li>{"\n"}<_components.li>{"Indented item"}</_components.li>{"\n"}</_components.ol>{"\n"}</_components.li>{"\n"}<_components.li>{"Second item"}{"\n"}<_components.ol>{"\n"}<_components.li>{"hello"}</_components.li>{"\n"}<_components.li>{"wolrd"}</_components.li>{"\n"}</_components.ol>{"\n"}</_components.li>{"\n"}<_components.li>{"Third item"}{"\n"}<_components.ol>{"\n"}<_components.li>{"Indented item"}</_components.li>{"\n"}<_components.li>{"Indented item"}</_components.li>{"\n"}</_components.ol>{"\n"}</_components.li>{"\n"}<_components.li>{"Fourth item"}{"\n"}<_components.ol>{"\n"}<_components.li>{"indedted"}</_components.li>{"\n"}</_components.ol>{"\n"}</_components.li>{"\n"}</_components.ol>{"\n"}<_components.ul>{"\n"}<_components.li>{"apple"}{"\n"}<_components.ul>{"\n"}<_components.li>{"banana"}{"\n"}<_components.ul>{"\n"}<_components.li>{"grape"}</_components.li>{"\n"}</_components.ul>{"\n"}</_components.li>{"\n"}</_components.ul>{"\n"}</_components.li>{"\n"}<_components.li>{"lemon"}</_components.li>{"\n"}</_components.ul>{"\n"}<_components.blockquote>{"\n"}<_components.p>{"hello world\r\nhi new world"}</_components.p>{"\n"}</_components.blockquote>{"\n"}<_components.p><_components.img src="/sabrina_carpenter.jpg" alt="The San Juan Mountains are beautiful!" title="San Juan Mountains" /></_components.p></>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
