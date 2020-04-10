# @fearcleari/wetable

## 说明

- 用于小程序table展示

## 用法

1. 安装软件包

    ``` code
    npm i @fearcleari/wetable
    ```

2. 引用we-table

    ``` json
    index.json / app.json
    "usingComponents": {
      "we-table": "@fearcleari/wetable"
    }
    ```

3. 组件中书写对应的属性

    ``` html
    index.wxml
    <we-table
    scroll="{{scroll}}"
    columns="{{columns}}"
    dataSource="{{dataSource}}"
     >
     </we-table>
    ```

    ``` js
    index.js
    Page({
        data: {
            columns: [
                {dataIndex: 'name', title: 'Full Name', fixed: 'left', width: 100},
                {dataIndex: 'age', title: 'Age',width: 100},
                {dataIndex: 'address', title: 'Address'},
            ],
            scroll: {
                x: 750,
                y: 300
            },
            dataSource: [
                {name: 'Mike', age: 12, address: 'Nan.Street'},
                {name: 'Mike', age: 12, address: 'Nan.Street'},
                {name: 'Mike', age: 12, address: 'Nan.Street'},
                {name: 'Mike', age: 12, address: 'Nan.Street'}
            ]
        }
    })
    ```
