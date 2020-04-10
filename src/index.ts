import genTable from './utils'

Component({
  properties: {
    scroll: {
      type: Object,
      value: {
        x: undefined,
        y: undefined
      }
    },
    dataSource: {
      type: Array,
      value: [],
      observer() {
        this.genTable()
      }
    },
    columns: {
      type: Array,
      value: [],
      observer() {
        this.genTable()
      }
    }
  },
  data: {
    flag: false,
    nodes: []
  },
  lifetimes: {
    attached() {

    }
  },
  methods: {
    genTable() {
      const options = {
        scroll: this.properties.scroll,
        columns: this.properties.columns,
        dataSource: this.properties.dataSource
      }
      const table = genTable(options)
      this.setData({
        nodes: [table]
      })
    }
  }
})
