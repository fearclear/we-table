interface BaseAttrs {
  class?: string
  style?: string
}

interface BdoAttrs extends BaseAttrs {
  dir: string
}

interface ColAttrs extends BaseAttrs {
  span?: number
  width?: string | number
}

interface ImgAttrs extends BaseAttrs {
  alt?: string
  src: string
  height?: string | number
  width?: string | number
}

interface OlAttrs extends BaseAttrs {
  start?: number
  type?: string
}

interface TableAttrs extends BaseAttrs {
  width?: string | number
}

interface TableItemAttrs extends BaseAttrs {
  colspan?: number
  height?: string | number
  rowspan?: number
  width?: string | number
}

/** rich-text允许的字段 */
export interface WeTableTagNameMap {
  'a': BaseAttrs
  'abbr': BaseAttrs
  'address': BaseAttrs
  'article': BaseAttrs
  'aside': BaseAttrs
  'b': BaseAttrs
  'bdi': BaseAttrs
  'bdo': BdoAttrs
  'big': BaseAttrs
  'blockquote': BaseAttrs
  'br': BaseAttrs
  'caption': BaseAttrs
  'center': BaseAttrs
  'cite': BaseAttrs
  'code': BaseAttrs
  'col': ColAttrs
  'colgroup': ColAttrs
  'dd': BaseAttrs
  'del': BaseAttrs
  'div': BaseAttrs
  'dl': BaseAttrs
  'dt': BaseAttrs
  'em': BaseAttrs
  'fieldset': BaseAttrs
  'font': BaseAttrs
  'footer': BaseAttrs
  'h1': BaseAttrs
  'h2': BaseAttrs
  'h3': BaseAttrs
  'h4': BaseAttrs
  'h5': BaseAttrs
  'h6': BaseAttrs
  'header': BaseAttrs
  'hr': BaseAttrs
  'i': BaseAttrs
  'img': ImgAttrs
  'ins': BaseAttrs
  'label': BaseAttrs
  'legend': BaseAttrs
  'li': BaseAttrs
  'mark': BaseAttrs
  'nav': BaseAttrs
  'ol': OlAttrs
  'p': BaseAttrs
  'pre': BaseAttrs
  'q': BaseAttrs
  'rt': BaseAttrs
  'ruby': BaseAttrs
  's': BaseAttrs
  'section': BaseAttrs
  'small': BaseAttrs
  'span': BaseAttrs
  'strong': BaseAttrs
  'sub': BaseAttrs
  'sup': BaseAttrs
  'table': TableAttrs
  'tbody': BaseAttrs
  'td': TableItemAttrs
  'tfoot': BaseAttrs
  'th': TableItemAttrs
  'thead': BaseAttrs
  'tr': TableItemAttrs
  'tt': BaseAttrs
  'u': BaseAttrs
  'ul': BaseAttrs
}

/** rich-text生成的组件 */
export interface WeTableProps<K extends keyof WeTableTagNameMap> {
  name: K
  attrs?: WeTableTagNameMap[K]
  children?: WeTableProps<keyof WeTableTagNameMap>[] | WeTableTextProps[]
}

/** rich-text字符串类型 */
export interface WeTableTextProps {
  type: 'text'
  text: string
}

/** 接受的columns */
export interface ColumnProps {
  /** 对齐方式 */
  align?: 'left' | 'right' | 'center'
  /** 超出字符省略 */
  ellipsis?: boolean
  /** 类名 */
  className?: string
  /** colSpan */
  colSpan?: number
  /** rowSpan */
  rowSpan?: number
  /** 关键字，必填 */
  dataIndex: string | string[]
  /** 标题 */
  title: string
  /** 宽度 */
  width: string | number
  /** 固定头 */
  fixed?: boolean | 'left' | 'right'
  /** 渲染方式 */
  render?: (
    record: any,
    index: number,
    text: WeTableTextProps
  ) => WeTableProps<keyof WeTableTagNameMap>
}

/** scroll属性 */
export interface ScrollProps {
  x: string | number | true | 'max-content'
  y: number
}

/** we-table属性 */
export interface TableProps {
  /** 表格元素的table-layout属性，设为fixed表示内容不会影响列的布局 */
  tableLayout?: 'auto' | 'fixed';
  /** 是否展示外边框和列边框 */
  bordered?: boolean
  /** 表格列的配置描述 */
  columns: ColumnProps[]
  /** 数据数组 */
  dataSource: any[]
  /** 表格尾部 */
  footer?: (currentPageData: any[]) => WeTableProps<keyof WeTableTagNameMap>
  /** 页面是否加载中 */
  loading?: boolean
  /** 表格行类名 */
  rowClassName?: (record: any, index: number) => string
  /** 表格key取值 */
  rowKey: string | ((record: any) => string)
  /** 表格是否可以滚动 */
  scroll?: ScrollProps
  /** 是否显示表头 */
  showHeader?: boolean
  /** 表格大小 */
  size?: 'default' | 'middle' | 'small'
  /** 表格标题 */
  title?: (currentPageData: any[]) => WeTableProps<keyof WeTableTagNameMap>
}
