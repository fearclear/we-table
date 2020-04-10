interface BaseAttrs {
  class?: string;
  style?: string;
}

interface BdoAttrs extends BaseAttrs {
  dir: string;
}

interface ColAttrs extends BaseAttrs {
  span?: number;
  width?: string | number;
}

interface ImgAttrs extends BaseAttrs {
  alt?: string;
  src: string;
  height?: string | number;
  width?: string | number;
}

interface OlAttrs extends BaseAttrs {
  start?: number;
  type?: string;
}

interface TableAttrs extends BaseAttrs {
  width?: string | number;
}

interface TableItemAttrs extends BaseAttrs {
  colspan?: number;
  height?: string | number;
  rowspan?: number;
  width?: string | number;
}


export interface WeTableTagNameMap {
  'a': BaseAttrs;
  'abbr': BaseAttrs;
  'address': BaseAttrs;
  'article': BaseAttrs;
  'aside': BaseAttrs;
  'b': BaseAttrs;
  'bdi': BaseAttrs;
  'bdo': BdoAttrs;
  'big': BaseAttrs;
  'blockquote': BaseAttrs;
  'br': BaseAttrs;
  'caption': BaseAttrs;
  'center': BaseAttrs;
  'cite': BaseAttrs;
  'code': BaseAttrs;
  'col': ColAttrs;
  'colgroup': ColAttrs;
  'dd': BaseAttrs;
  'del': BaseAttrs;
  'div': BaseAttrs;
  'dl': BaseAttrs;
  'dt': BaseAttrs;
  'em': BaseAttrs;
  'fieldset': BaseAttrs;
  'font': BaseAttrs;
  'footer': BaseAttrs;
  'h1': BaseAttrs;
  'h2': BaseAttrs;
  'h3': BaseAttrs;
  'h4': BaseAttrs;
  'h5': BaseAttrs;
  'h6': BaseAttrs;
  'header': BaseAttrs;
  'hr': BaseAttrs;
  'i': BaseAttrs;
  'img': ImgAttrs;
  'ins': BaseAttrs;
  'label': BaseAttrs;
  'legend': BaseAttrs;
  'li': BaseAttrs;
  'mark': BaseAttrs;
  'nav': BaseAttrs;
  'ol': OlAttrs;
  'p': BaseAttrs;
  'pre': BaseAttrs;
  'q': BaseAttrs;
  'rt': BaseAttrs;
  'ruby': BaseAttrs;
  's': BaseAttrs;
  'section': BaseAttrs;
  'small': BaseAttrs;
  'span': BaseAttrs;
  'strong': BaseAttrs;
  'sub': BaseAttrs;
  'sup': BaseAttrs;
  'table': TableAttrs;
  'tbody': BaseAttrs;
  'td': TableItemAttrs;
  'tfoot': BaseAttrs;
  'th': TableItemAttrs;
  'thead': BaseAttrs;
  'tr': TableItemAttrs;
  'tt': BaseAttrs;
  'u': BaseAttrs;
  'ul': BaseAttrs;
}

export interface WeTableProps<K extends keyof WeTableTagNameMap> {
  name: K;
  attrs?: WeTableTagNameMap[K];
  children?: WeTableProps<keyof WeTableTagNameMap>[] | WeTableTextProps[];
}

export interface WeTableTextProps {
  type: 'text';
  text: string;
}
