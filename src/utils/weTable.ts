import {WeTableTagNameMap, WeTableProps, WeTableTextProps} from './weTable.d'

export {WeTableTagNameMap, WeTableProps, WeTableTextProps}

export default class WeTable {
  static createElement<K extends keyof WeTableTagNameMap>(
    name: K,
    attrs?: WeTableTagNameMap[K],
    children?: WeTableProps<keyof WeTableTagNameMap>[] | WeTableTextProps[]
  ): WeTableProps<keyof WeTableTagNameMap> {
    const tableProp: WeTableProps<keyof WeTableTagNameMap> = {
      name,
      attrs,
      children
    }
    // 删除不存在的属性
    for (const i in tableProp) {
      if (!tableProp[i]) {
        delete tableProp[i]
      }
    }
    return tableProp
  }

  static createText(text: string): WeTableTextProps {
    return {
      type: 'text',
      text
    }
  }
}
