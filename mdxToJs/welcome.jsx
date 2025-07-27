/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
export const matter = {
  "title": "welcome",
  "date": "2025-07-27"
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    del: "del",
    h1: "h1",
    h2: "h2",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    sup: "sup",
    table: "table",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return <><_components.h1>{"Welcome to DevLog"}</_components.h1>{"\n"}<_components.h1>{"GFM"}</_components.h1>{"\n"}<_components.h2>{"Autolink literals"}</_components.h2>{"\n"}<_components.p><_components.a href="http://www.example.com">{"www.example.com"}</_components.a>{", "}<_components.a href="https://example.com">{"https://example.com"}</_components.a>{", and "}<_components.a href="mailto:contact@example.com">{"contact@example.com"}</_components.a>{"."}</_components.p>{"\n"}<_components.h2>{"Footnote"}</_components.h2>{"\n"}<_components.p>{"A note"}<_components.sup><_components.a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref aria-describedby="footnote-label">{"1"}</_components.a></_components.sup></_components.p>{"\n"}<_components.h2>{"Strikethrough"}</_components.h2>{"\n"}<_components.p><_components.del>{"one"}</_components.del>{" or "}<_components.del>{"two"}</_components.del>{" tildes."}</_components.p>{"\n"}<_components.h2>{"Table"}</_components.h2>{"\n"}<_components.table><_components.thead><_components.tr><_components.th>{"a"}</_components.th><_components.th style={{
    textAlign: "left"
  }}>{"b"}</_components.th><_components.th style={{
    textAlign: "right"
  }}>{"c"}</_components.th><_components.th style={{
    textAlign: "center"
  }}>{"d"}</_components.th></_components.tr></_components.thead></_components.table>{"\n"}<_components.h2>{"Tasklist"}</_components.h2>{"\n"}<_components.ul className="contains-task-list">{"\n"}<_components.li className="task-list-item"><_components.input type="checkbox" disabled />{" "}{"to do"}</_components.li>{"\n"}<_components.li className="task-list-item"><_components.input type="checkbox" checked disabled />{" "}{"done"}</_components.li>{"\n"}</_components.ul>{"\n"}<_components.ol>{"\n"}<_components.li>{"First ordered list item"}</_components.li>{"\n"}<_components.li>{"Another item\r\n⋅⋅⋅⋅* Unordered sub-list."}</_components.li>{"\n"}<_components.li>{"Actual numbers don't matter, just that it's a number\r\n⋅⋅⋅⋅1. Ordered sub-list"}</_components.li>{"\n"}<_components.li>{"And another item."}</_components.li>{"\n"}</_components.ol>{"\n"}<_components.p>{"⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown)."}</_components.p>{"\n"}<_components.p>{"⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅\r\n⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅\r\n⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)"}</_components.p>{"\n"}<_components.ul>{"\n"}<_components.li>{"Unordered list can use asterisks"}</_components.li>{"\n"}</_components.ul>{"\n"}<_components.ul>{"\n"}<_components.li>{"Or minuses"}</_components.li>{"\n"}</_components.ul>{"\n"}<_components.ul>{"\n"}<_components.li>{"Or pluses"}</_components.li>{"\n"}</_components.ul>{"\n"}<_components.pre><_components.code className="language-javascript">{"\r\n"}<_components.span className="pl-en">{"console"}</_components.span>{"."}<_components.span className="pl-c1">{"log"}</_components.span>{"("}<_components.span className="pl-s"><_components.span className="pl-pds">{"\""}</_components.span>{"hell"}<_components.span className="pl-pds">{"\""}</_components.span></_components.span>{")\r\n"}<_components.span className="pl-k">{"function"}</_components.span>{" "}<_components.span className="pl-en">{"hello"}</_components.span>{" (){\r\n\t"}<_components.span className="pl-k">{"const"}</_components.span>{" "}<_components.span className="pl-c1">{"name"}</_components.span>{" "}<_components.span className="pl-k">{"="}</_components.span>{" "}<_components.span className="pl-s"><_components.span className="pl-pds">{"\""}</_components.span>{"kim"}<_components.span className="pl-pds">{"\""}</_components.span></_components.span>{"\r\n}\r\n\r\n"}<_components.span className="pl-k">{"const"}</_components.span>{" "}<_components.span className="pl-c1">{"obj"}</_components.span>{" "}<_components.span className="pl-k">{"="}</_components.span>{" {\r\n\tname"}<_components.span className="pl-k">{":"}</_components.span>{" "}<_components.span className="pl-s"><_components.span className="pl-pds">{"\""}</_components.span>{"kim"}<_components.span className="pl-pds">{"\""}</_components.span></_components.span>{",\r\n\tage"}<_components.span className="pl-k">{":"}</_components.span>{" "}<_components.span className="pl-c1">{"12"}</_components.span>{",\r\n}\n"}</_components.code></_components.pre>{"\n"}<_components.section data-footnotes className="footnotes"><_components.h2 className="sr-only" id="footnote-label">{"Footnotes"}</_components.h2>{"\n"}<_components.ol>{"\n"}<_components.li id="user-content-fn-1">{"\n"}<_components.p>{"Big note. "}<_components.a href="#user-content-fnref-1" data-footnote-backref="" aria-label="Back to reference 1" className="data-footnote-backref">{"↩"}</_components.a></_components.p>{"\n"}</_components.li>{"\n"}</_components.ol>{"\n"}</_components.section></>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
