/** @format */

export function createVNode(type: any, props?: any, children?: any) {
  const vnode = {
    type,
    props,
    children,
    el: null,
  };
  return vnode;
}
