Page({
  data: {
    scroll: {
      x: 1500,
      y: 300
    }
  },
  onLoad() {
    const columns = [
      {
        title: 'Full Name',
        dataIndex: 'name',
        fixed: 'left',
        width: 100,
        key: 'name'
      },
      {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        width: 150
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        width: 150
      },
      {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        width: 150
      },
      {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        width: 150
      },
      {
        title: 'Column 7',
        dataIndex: 'address',
        key: '7',
        width: 150
      },
      {title: 'Column 8', dataIndex: 'address', key: '8'},
      {
        title: 'Action',
        key: 'operation',
        width: 100
      }
    ]

    const data = []
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: '32',
        address: `London Park no. ${i}`
      })
    }
    this.setData({
      dataSource: data,
      columns
    })
  }
})
