# C. 游览路线

输入文件： standard input
出文件：

输出文件： s s t t a a n n d d a a r r d d i o n u p t u p t ut
时间限制： 1 second

时间限制： s1tsaencdoanrdd

空间限制： 256 megabytes

![一个游览景点可以抽象成一个包含 n 个点和 m 条边的带权无向连通图，第 i 条边连接点 u 和 v ，其权 i i 值为 。游客想从起点 点进入，并从终点 点离开，而这一路上的高兴值为边权的按位与。形式化来](sysuNovice_onsite_2025_assets/C_p06_formula001.png)

![值为 w 。游客想从起点 s 点进入，n并从终点m t 点离开，而这一路上的高兴值i为边权的按位u与i 。形vi式化来 i 说，假设这位游客自起点 经过编号分别为 的边并到达终点 ，那么这条路径对应的高兴值](sysuNovice_onsite_2025_assets/C_p06_formula002.png)

![说，假w设i 这位游客自起点s s 经过编号分别为 i t ,i ,...,i 的边并到达终点 t，那么这条路径对应的高兴值 1 2 k 为 （这里的 代表按位与）。](sysuNovice_onsite_2025_assets/C_p06_formula003.png)

![为 w & w & ... & w s（这里的 & 代表按i1位,i与2,）...。,i i1 i2 i k](sysuNovice_onsite_2025_assets/C_p06_formula004.png)

![现在给出这张无向图，以及起点 s 和终点 t，请求出在最佳的方案下，最大的高兴值可能是多少。](sysuNovice_onsite_2025_assets/C_p06_formula005.png)

## Input

![第一行包含两个整数 n,m (1 ≤ n ≤ 105,1 ≤ m ≤ 5 × 105)，代表图的点数和边数。](sysuNovice_onsite_2025_assets/C_p06_formula006.png)

![第二行包含两个整数 s,t (1 ≤ s,t ≤ n,s ≠ t)，分别代表游览的起点和终点。](sysuNovice_onsite_2025_assets/C_p06_formula007.png)

![接下来 m 行，第 i 行包含三个整数 u ,v ,w (1 ≤ u ,v ≤ n,1 ≤ w ≤ 109,u ≠ v )，代表一条连接点 u i i i i i i i i i 和 且权值为 的边。图中可能出现重边，也就是若干条边连接了同一对节点的情况。数据保证任](sysuNovice_onsite_2025_assets/C_p06_formula008.png)

![和 v 且m权值为 w i的边。图中可能出u现i,v重i,w边i，(1也≤就ui是,v若i ≤干n条,1边≤连w接i ≤了1同0 一,u对i ≠节v点i)的情况。数据保证任ui i i 意两个点都可以通过这些路径互相到达。](sysuNovice_onsite_2025_assets/C_p06_formula009.png)

意两vi个点都可以w通i过这些路径互相到达。

## Output

一行一个整数，代表最大的高兴值。

## Example

### 样例输入

```text
5 10
5 1
4 1 8
4 5 3
4 3 4
4 2 10
1 4 4
1 2 4
3 5 8
1 5 4
5 2 7
1 2 5
```

### 样例输出

```text
5
```

## Note

对于样例，可以选择从 5 号点通过第 9 条边走到 2 号点，随后通过第 10 条边走到 1 号点。整条路径对
应的 值为 ，可以证明 是最 的 值。

![应的高兴值为 7 ⊕ 5 = 5 5，可以证明这是9 最大的高兴2值。](sysuNovice_onsite_2025_assets/C_p06_formula010.png)

本题输入数据量较大，请使用较快的输入方式。
