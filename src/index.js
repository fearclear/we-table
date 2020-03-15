// @ts-ignore
Component({
  properties: {
    prop: {
      type: String,
      value: 'index.properties'
    },
  },
  data: {
    flag: false,
  },
  lifetimes: {
    attached() {
      console.log('attched') // eslint-disable-line
    }
  }
})
