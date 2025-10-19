# 父级容器属性

**grid-template-columns：定义网格列宽**

**grid-template-rows：定义网格行高**

> 100px 200px：第一列宽100px，第二列宽200px
>
> repeat(2,100px)：两列宽都是100px
>
> 1fr 2fr：一列中剩余宽度按照1:2的比例等分

**gap：行列间距**

**grid-template-areas：用名称定义网格区域布局**

> 需要子项目配合使用grid-area属性指定放在哪个区域
>
> ```html
> <div class="container">
>     <div class="head">head</div>
>     <div class="sidebar">sidebar</div>
>     <div class="content">content</div>
> </div>
> ```
>
> ```css
> .parent{
>     display: grid;
>     grid-template-columns: repeat(3, 200px);
>     grid-template-rows: repeat(2, 200px);
>     gap: 20px;
>     grid-template-areas: 
>     "head head head"
>     "sidebar content content";
> }
> .head{
>     grid-area: head;
> }
> .sidebar{
>     grid-area: sidebar;
> }
> .content{
>     grid-area: content;
> }
> ```

**grid-auto-flow：控制网格自动排列方向**

> row（默认），按行填充
>
> column：按列填充
>
> row dense：按行紧密填充空格

**justify-content：设置整个网格内容在容器中的水平位置**

**align-content：设置整个网格内容在容器中的垂直位置**

> start：对齐容器的起始边框
>
> end：对齐容器的结束边框
>
> center：网格在容器内部居中
>
> space-around：每个项目两侧间距相等（项目之间间距是项目与容器变宽间距的两倍）
>
> space-between：项目与项目之间的间距相等（项目与容器边框之间没有间距）
>
> space-evenly：项目与项目之间的间距相等（项目与容器边框之间也是同样间距大小）

**justify-items：设置每个网格单元格内的水平对齐方式**

**align-items：设置每个网格单元格内的垂直对齐方式**

> start：对齐单元格起始边缘
>
> end：对齐单元格结束边缘
>
> center：在单元格居中
>
> stretch：拉伸占满整个单元格



# 子级容器属性

**grid-column-start：项目左边框所在的垂直网格线**

**grid-column-end：项目右边框所在的垂直网格线**

> 可以简写为grid-column:x/x

**grid-row-start：项目上边框所在的水平网格线**

**grid-row-end：项目下边框所在的水平网格线**

> 可以简写为grid-row:x/x

**grid-area：指定项目放在某个区域**

> 与父级容器的grid-template-areas一起使用

**justify-self：控制单元格内内容的水平位置**

**align-self：控制单元格内内容的垂直位置**

> 与justify-items、align-items用法相同，只是作用于当前项目