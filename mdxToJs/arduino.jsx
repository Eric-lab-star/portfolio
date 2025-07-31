/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
export const matter = undefined;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return <_components.p>{"아두이노는 프로그래밍과 하드웨어를 공부하고 싶은 사람이 입문하기 좋은 환경을 제공해준다."}</_components.p>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
