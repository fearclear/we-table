import { TagName, ANode } from './weTable.d'
function createElement(name: TagName, attrs?: object, children?: object[]): ANode {
  const option = {
    name,
    attrs,
    children: children || []
  }
  return option
}

