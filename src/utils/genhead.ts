import {
  WeTableProps, WeTableTagNameMap, ColumnProps, TableProps
} from './weTable.d'

import WeTable from './weTable'

export default function genThead(columns: ColumnProps[], options?: TableProps): WeTableProps {
  const trClass = 'tr'
  let theadClass = 'thead'

  columns.forEach((col: ColumnProps) => {
    const thClass = 'th'
  })
}
