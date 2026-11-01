# I. 第三心脏

输入文件: standard input

输出文件: standard output

时间限制: 1 second

空间限制: 256 megabytes

每当一起回家时

分离以后脆弱的我冒出想法

没有和你道别是因为

不想你一个人被寂寞和黑暗吞噬

那颗冰冷的第三心脏

一直默默地在看着我们两人

—第三心脏

![回家的路上有 n 个地点，由 m 条双向道路将其连接，第 i 条道路连接地点 x 与 y ，最开始每条道路 i i](sysuNovice_warmup_2025_assets/I_p12_formula001.png)

都是黑暗的，你需要选择任意条 不相交 (任意两条路径没有重复地点) 的 路径，将上面所有的道路点亮，

![让任意两个地点之间都 存在一条路径不超过 k 条 未被点亮的道路。](sysuNovice_warmup_2025_assets/I_p12_formula002.png)

对于任意两个地点，保证可以通过双向道路连接。

路径：无重复节点的节点序列，相邻节点存在一条双向道路将它们相连。

## Input

![第一行输入三个正整数 n,m,k （1 ≤ n ≤ 2000,1 ≤ m ≤ 2500,20 ≤ k ≤ n ）。](sysuNovice_warmup_2025_assets/I_p12_formula003.png)

![接下来 m 行，第 i 行输入两个正整数 x ,y 表示有一条地点连接 x 与 y 的道路。 i i i i](sysuNovice_warmup_2025_assets/I_p12_formula004.png)

不存在任意两条道路连接的地点完全相同，不存在道路两端连接同一个节点，对于任意两个地点，保证可

以通过双向道路连接。

![原题插图（PDF 第 12 页）](sysuNovice_warmup_2025_assets/I_p12_figure1.png)

## Output

![如果无解第一行输出一个 −1 。](sysuNovice_warmup_2025_assets/I_p13_formula005.png)

![否则第一行输出一个正整数 T 表示选择的路径条数。](sysuNovice_warmup_2025_assets/I_p13_formula006.png)

![接下来 T 行第一行一个正整数 w 表示该路径的点数，接下来 w 个正整数依次表示路径上的若干个点。](sysuNovice_warmup_2025_assets/I_p13_formula007.png)

如题，你需要保证没有输出重复的点。

## Example

### 样例输入

```text
9 12 20
1 2
1 9
2 3
2 6
2 7
3 4
4 5
4 8
4 9
5 6
6 7
6 8
```

### 样例输出

```text
2
5 5 4 8 6 7
4 3 2 1 9
```

## Note

![根据样例的输出，先绘制出连通图，先把所有道路的权值设为 1 ，然后把路径 5 → 4 → 8 → 6 → 7 与路](sysuNovice_warmup_2025_assets/I_p14_formula008.png)

![径 3 → 2 → 1 → 9 上的所有道路权值设为 0 得到下图。](sysuNovice_warmup_2025_assets/I_p14_formula009.png)

![不难发现图中所有点的最短距离都不超过 1 ，满足 ≤ k 的条件, 且选出的路径没有重复的部分。](sysuNovice_warmup_2025_assets/I_p14_formula010.png)

![原题插图（PDF 第 14 页）](sysuNovice_warmup_2025_assets/I_p14_figure1.png)
