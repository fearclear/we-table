# @fearcleari/wetable

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## 目录

- [说明](#%E8%AF%B4%E6%98%8E)
- [用法](#%E7%94%A8%E6%B3%95)
- [API](#api)
  - [Table](#table)
  - [测试](#%E6%B5%8B%E8%AF%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 说明

- 用于小程序table展示
- 图片只支持网络图片
- 采用rich-text渲染
- 不支持所有节点的事件

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

## API

### Table

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| tableLayout |表格元素的[table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout)属性，设为`fixed`表示内容不会影响列的布局|- &#124; `auto` &#124; `fixed`|无 <hr/> 固定表头/列或使用了`column.ellipsis`时，默认值为`fixed`|

### 测试
