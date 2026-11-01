# D. 靶场

输入文件： standard input
出文件：

输出文件： s s t t a a n n d d a a r r d d i o n u p t u p t ut
时间限制： 1 second

时间限制： s1tsaencdoanrdd

空间限制： 256 megabytes

在因为糟糕的枪法被朋友嘲笑后，小 F 决定去靶场苦练自己的枪法。靶场可以看作一个圆，其圆周被均

![匀分为 c 个瞄准点，按照顺序标号为 0,1,...,c − 1，小 F 站在中心点且不会移动，初始时（对应第 0 秒）面朝 号 点。 F 练习会 个靶， 中 个靶会在 秒 现在 个 点。](sysuNovice_onsite_2025_assets/D_p07_formula001.png)

![秒）面朝c 0 号瞄准点。小 F 每次练习会0,打1,. n ..个,c靶−，1其中第 i 个靶会在第 i 秒出现在第 a 个瞄准点。小0 i F 预先知道了所有靶子的位置，因此规定：只有在靶子出现的一瞬间开枪并命中，才会认为自己中靶。](sysuNovice_onsite_2025_assets/D_p07_formula002.png)

F 预先知道0了所有靶子的位置，因此规定：n只有在靶子出现的i 一瞬间开枪i并命中，才会a认i 为自己中靶。

![若小 F 每秒钟只能转动最多 s 个瞄准点的角度，那么在最优情况下，他能命中多少个靶（假设他只要面 朝 某个靶 在的方向， 一定能命中 个靶）？](sysuNovice_onsite_2025_assets/D_p07_formula003.png)

朝着某个靶所在的方向，就一s定能命中这个靶）？

## Input

![本题采用多组测试数据，第一行包含一个整数 T (1 ≤ T ≤ 10)，代表输入数据组数。](sysuNovice_onsite_2025_assets/D_p07_formula004.png)

在每组数据中：

![第一行包含三个整数 n,c,s (1 ≤ n ≤ 1000,1 ≤ s < c ≤ 109)，分别表示靶子个数，瞄准点个数和最大转 动速度。](sysuNovice_onsite_2025_assets/D_p07_formula005.png)

动速度。

![接下来 n 行，第 i 行包含一个整数 a (0 < a < c)，代表第 i 个靶子所在的瞄准点。 i i](sysuNovice_onsite_2025_assets/D_p07_formula006.png)

## Output

对每组数据，输出一行一个整数，代表在最优情况下能命中的靶子数量。

## Example

### 样例输入

```text
2
5 6 1
0 4 3 0 4
11 45 14
13 40 30 1 32 5 22 39 4 19 35
```

### 样例输出

```text
3
6
```

## Note

对于第一个测试数据，以下是一种可能的转动方案：

![原题插图（PDF 第 7 页）](sysuNovice_onsite_2025_assets/D_p07_figure1.png)
