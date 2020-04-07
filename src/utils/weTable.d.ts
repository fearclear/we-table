export type TagName = 'a' | 'abbr' | 'address' | 'article' | 'aside' | 'b' | 'bdi' | 'bdo' | 'big' | 'blockquote' | 'br' | 'caption' | 'center' | 'cite' | 'code' | 'col' | 'colgroup' | 'dd' | 'del' | 'div' | 'dl' | 'dt' | 'em'
interface BaseAttrs {
  class?: string;
  style?: string;
}
interface BaseNode {
  attrs?: BaseAttrs
}
export interface ANode extends BaseNode {
  name: TagName;
}

interface BdoNode {
  name: 'bdo',
  attrs?: BaseAttrs | {
    dir?: string
  }
}

interface WeTableSpanNode {
  
}

interface WeTableNode {
  createElement(name: TagName): WeTableNode;
  createElement(name: 'span'): WeTableSpanNode;
}