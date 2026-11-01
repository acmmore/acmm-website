# G. 过河卒

输入文件： standard input
出文件：

输出文件： s s t t a a n n d d a a r r d d i o n u p t u p t ut
时间限制： 1 second

时间限制： s1tsaencdoanrdd

空间限制： 256 megabytes

棋盘上有黑红两方的过河卒，需要走到底线。过河卒行走的规则是可以向左移动一格，向右移动一格或

者向前移动一格。然而，这一题没有对方的棋子拦截你的过河卒，双方需要做的反而是配合让所有过河

卒走到底线。

![让我们将问题进行简化。给定一个 n 行 m 列的狭长棋盘，其中 m 的取值只会是 2 或 3。棋盘的第 1 行 有 个红子， 行有 个黑子。在一 棋中，你可以选 棋盘上的任意一个子，并 移动到相邻](sysuNovice_onsite_2025_assets/G_p10_formula001.png)

![有 m 个红子，第 n 行有 m 个黑子n。在一m步棋中，你可以选择棋m盘上的任意一个子2 ，并3将其移动到相1 邻 且 有子的位 上。两个位 相邻， 且仅 二者在同一行且列数差 为 ， 者二者在同一列且行](sysuNovice_onsite_2025_assets/G_p10_formula002.png)

且没m有子的位置上n。两个位m置相邻，当且仅当二者在同一行且列数差恰好为 1，或者二者在同一列且行
数差 为 。

数差恰好为 1。

![现在要将所有黑子移动到第 1 行，所有红子移动到第 n 行，请你算出完成目标所需的最少步数。](sysuNovice_onsite_2025_assets/G_p10_formula003.png)

## Input

![第一行包含两个整数 n,m (6 ≤ n ≤ 109,2 ≤ m ≤ 3)，代表棋盘的大小。](sysuNovice_onsite_2025_assets/G_p10_formula004.png)

## Output

输出一行一个整数，代表答案。

## Examples

### 样例输入

```text
6 2
```

### 样例输出

```text
22
```

### 样例输入

```text
6 3
```

### 样例输出

```text
34
```
