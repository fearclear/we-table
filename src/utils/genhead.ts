import WeTable, {WeTableProps, WeTableTagNameMap} from './weTable'

function _genThead(columns, options?) {
  let theadStyle = ''
  if (options && options.scroll && options.scroll.y) {
    theadStyle = 'position: sticky; top: 0;'
  }
  const tr = WeTable.createElement('tr', null, [])
  const thead = WeTable.createElement('thead', {class: 'wetable-head'}, [tr])
  columns.forEach((item, index) => {
    let thClass = 'wetable-row-cell'
    let thStyle = 'background: #fff;'
    if (item.fixed && item.fixed === 'left') {
      thClass = 'wetable-cell wetable-cell-fix-left wetable-cell-fix-left-last'
      thStyle = 'position: sticky; left: 0px;'
    }
    if (theadStyle) {
      if (index === 0) {
        thStyle += theadStyle + 'z-index: 4;'
      } else {
        thStyle += theadStyle + 'z-index: 3;;'
      }
    }
    const text = WeTable.createText(item.title)
    const th = WeTable.createElement('th', {class: thClass, style: thStyle}, [text]);
    (tr.children as WeTableProps<keyof WeTableTagNameMap>[]).push(th)
  })
  return thead
}
