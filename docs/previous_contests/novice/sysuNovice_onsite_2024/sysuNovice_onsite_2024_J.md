# J. 回忆之树

输入文件: standard input

输出文件: standard output

时间限制: 1 second

空间限制: 256 megabytes

你知道吗？此段记忆，此篇关于光明与纷争的故事……

以一粒装满了感情的种子被埋进土中为始。

然后，在被珍视和被唾弃的回忆的共同滋养下，开始生根发芽。

再然后，它便茁壮成长，执拗地想去到更高的地方，一如这执拗的时间。

再然后呢，它就长成了一棵……BFS 树？？？

Arcaea 的世界是一张无向连通图。风云变幻，世界的法则不断更迭。回忆之树仍然挺立，但回忆之源却

已然模糊……

![现在给出 Arcaea 世界的构造（即一张无向连通图 G），再给出回忆之树的构造（即 G 的一棵生成树 T），](sysuNovice_onsite_2024_assets/J_p15_formula001.png)

![有多少个节点可能是回忆之源呢？（即满足 T 是以该节点为根的一棵 BFS 树）](sysuNovice_onsite_2024_assets/J_p15_formula002.png)

【名词解释】

![生成树：一个连通无向图的生成子图，同时要求是树。也即在图的边集中选择 n−1 条，将所有顶点连通。](sysuNovice_onsite_2024_assets/J_p15_formula003.png)

BFS：BFS 全称是 Breadth First Search，中文名是宽度优先搜索，也叫广度优先搜索。所谓宽度优先，

就是每次都尝试访问同一层的节点。如果同一层都访问完了，再访问下一层。

BFS 树：在 BFS 过程中，通过记录每个节点从哪个点访问而来，可以建立一个树结构，即为 BFS 树。

BFS 的起点即为树根。

## Input

![第一行一个正整数 t(1 ≤ t ≤ 104)，表示数据组数。](sysuNovice_onsite_2024_assets/J_p15_formula004.png)

![对于每组数据，第一行输入两个正整数 n,m(1 ≤ n ≤ 2 × 105,n − 1 ≤ m ≤ min( n(n−1) ,3 × 105))，表示 2](sysuNovice_onsite_2024_assets/J_p15_formula005.png)

![无向连通图 G 的点数和边数。](sysuNovice_onsite_2024_assets/J_p15_formula006.png)

![接下来 m 行，每行两个正整数 i,j(1 ≤ i,j ≤ n,i ̸= j)，表示给定的无向连通图 G 中，i,j 间存在一条无](sysuNovice_onsite_2024_assets/J_p15_formula007.png)

向边。

![接下来 n − 1 行，每行两个正整数 i,j(1 ≤ i,j ≤ n,i ̸= j)，表示给定的生成树 T 中，i,j 间存在一条无](sysuNovice_onsite_2024_assets/J_p15_formula008.png)

向边。

![保证不存在重边，所有数据组中 n 的总和不超过 2 × 105，m 的总和不超过 4 × 105。](sysuNovice_onsite_2024_assets/J_p15_formula009.png)

## Output

![对于每组数据，首先输出一行一个整数 c，表示合法的节点数目。](sysuNovice_onsite_2024_assets/J_p15_formula010.png)

![接下来一行从小到大输出 c 个正整数，表示合法节点的编号。注意，若 c = 0，也需要输出一个空行。](sysuNovice_onsite_2024_assets/J_p15_formula011.png)

## Example

### 样例输入

```text
2
7 7
1 2
1 3
2 4
2 5
3 6
3 7
2 3
1 2
1 3
2 4
2 5
3 6
3 7
5 5
1 2
2 3
4 3
4 5
5 2
1 2
2 3
3 4
4 5
```

### 样例输出

```text
1
1
2
3 4
```
