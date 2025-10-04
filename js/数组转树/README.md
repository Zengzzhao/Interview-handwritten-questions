**问题描述**

在前端开发中，经常会遇到将 **扁平数组** 转换成 **树形结构** 的需求。例如，从后端获取的菜单数据可能是扁平数组，但前端需要渲染成树形菜单

给定一个扁平数组，每个元素包含id与parentId，要求将其转换为树形结构

**实例输入**

```js
const arr = [
    { id: 1, name: "Node 1" },
    { id: 2, name: "Node 2", parentId: 1 },
    { id: 3, name: "Node 3", parentId: 1 },
    { id: 4, name: "Node 4", parentId: 2 },
    { id: 5, name: "Node 5", parentId: 2 },
    { id: 6, name: "Node 6", parentId: 3 },
];
```

**实例输出**

```js
[
    {
        id: 1,
        name: "Node 1",
        children: [
            {
                id: 2,
                name: "Node 2",
                children: [
                    { id: 4, name: "Node 4" },
                    { id: 5, name: "Node 5" },
                ],
            },
            {
                id: 3,
                name: "Node 3",
                children: [
                    { id: 6, name: "Node 6" },
                ],
            },
        ],
    },
]
```

