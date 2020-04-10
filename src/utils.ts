class Props {
  public name;

  public attrs;

  public children;

  constructor(name, attrs?, children?) {
    this.name = name
    this.attrs = attrs
    this.children = children || []
  }
}

// 生成表头
function _genThead(columns, options?) {
  let theadStyle = ''
  if (options && options.scroll && options.scroll.y) {
    theadStyle = 'position: sticky; top: 0;'
  }
  const thead = new Props('thead', {class: 'wetable-head'}, [new Props('tr')])
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
    const th = new Props('th', {class: thClass, style: thStyle}, [{type: 'text', text: item.title}])
    thead.children[0].children.push(th)
  })
  return thead
}

// 格式
function _genCol(columns) {
  const colGroup = new Props('colgroup')
  columns.forEach(item => {
    let colStyle = ''
    if (item.width) {
      colStyle = /^\d+$/.test(item.width) ? `width: ${item.width}px; min-width: ${item.width}px` : `width: ${item.width}; min-width: ${item.width}`
    }
    const col = new Props('col', {style: colStyle})
    colGroup.children.push(col)
  })
  return colGroup
}

// 内容
function _genTbody(colmuns, dataSource) {
  const tbody = new Props('tbody', {class: 'wetable-tbody', style: 'text-align: center'})
  for (let i = -1; i < dataSource.length; i++) {
    if (i < 0) {
      const tr = new Props('tr', {class: 'wetable-row'})
      colmuns.forEach(() => {
        const tdClass = 'wetable-measure-row'
        const tdStyle = 'padding: 0px; border: 0px; height: 0px;'
        const td = new Props('td', {class: tdClass, style: tdStyle}, [{type: 'text', text: ''}])
        tr.children.push(td)
      })
      tbody.children.push(tr)
      continue
    }
    const data = dataSource[i]
    const tr = new Props('tr', {class: 'wetable-row'})
    colmuns.forEach(col => {
      let tdClass = 'wetable-cell'
      let tdStyle = ''
      if (col.fixed && col.fixed === 'left') {
        tdClass = 'wetable-cell wetable-cell-fix-left wetable-cell-fix-left-last'
        tdStyle = 'position: sticky; left: 0px;'
      }
      const td = new Props('td', {class: tdClass, style: tdStyle}, [{type: 'text', text: data[col.dataIndex]}])
      tr.children.push(td)
    })
    tbody.children.push(tr)
  }
  return tbody
}


// 固定头列
function genFixedHead() {
  // const colgroup = _genCol(columns)
  // const thead = _genThead(columns)
  const fixedTHead = new Props('div', {class: 'wetable-header', style: 'overflow: hidden'}, [])
  return fixedTHead
}

// 固定头列
function genFixedBody(columns, dataSource, options) {
  const height = /^\d+$/.test(options.scroll.y) ? `${options.scroll.y}px` : options.scroll.y
  const width = /^\d+$/.test(options.scroll.x) ? `${options.scroll.x}px` : options.scroll.x
  const colgroup = _genCol(columns)
  const thead = _genThead(columns, options)
  const tbody = _genTbody(columns, dataSource)
  const table = new Props('table', {style: `width: ${width};min-width: 100%;table-layout: fixed;`}, [colgroup, thead, tbody])
  const fixedTBody = new Props('div', {class: 'wetable-body', style: `overflow: scroll;max-height: ${height};position: relative;`}, [table])
  return fixedTBody
}

// 普通表格
function genData(columns, dataSource) {
  const table = new Props('table', {class: 'wetable-fixed'})
  const thead = _genThead(columns)
  const colgroup = _genCol(columns)
  const tbody = _genTbody(columns, dataSource)
  table.children = [colgroup, thead, tbody]
  return table
}


// ---------- 导出table组件树 -----------------------
export default function genTable(options) {
  const {columns, dataSource, scroll} = options || {}
  let antTableClass = 'wetable'
  if (scroll && (scroll.x || scroll.y)) {
    antTableClass = 'wetable wetable-fixed-header wetable-fixed-column'
  }
  let antTableContainer = new Props('div')
  if (scroll.y) {
    const fixedTHead = genFixedHead()
    const fixedTBody = genFixedBody(columns, dataSource, options)
    antTableContainer = new Props('div', {class: 'wetable-containter'}, [fixedTHead, fixedTBody])
  } else {
    const table = genData(columns, dataSource)
    const antTableContent = new Props('div', {class: 'wetable-content'}, [table])
    antTableContainer = new Props('div', {class: 'wetable-container'}, [antTableContent])
  }
  const antTable = new Props('div', {class: antTableClass}, [antTableContainer])
  const antSpinContainer = new Props('div', {class: 'ant-spin-container'}, [antTable])
  const antSpinNestedLoading = new Props('div', {class: 'ant-spin-nested-loading'}, [antSpinContainer])
  const antTableWrapper = new Props('div', {class: 'wetable-wrapper'}, [antSpinNestedLoading])
  return antTableWrapper
}
