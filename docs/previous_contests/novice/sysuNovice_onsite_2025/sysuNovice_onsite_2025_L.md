# L. 提前修改

输入文件： standard input
出文件：

输出文件： s s t t a a n n d d a a r r d d i o n u p t u p t ut
时间限制： 1 second

时间限制： s1tsaencdoanrdd

空间限制： 256 megabytes

![Alice 和 Bob 在进行游戏！具体来说，现在桌面上有 n 堆石子，其中第 i 堆石子有 a 个，先后手轮流操 i 作，每次操作者需要选择一堆非空的石子，并拿走至少一颗石子，取完最后一颗石子的玩家取得胜利。](sysuNovice_onsite_2025_assets/L_p16_formula001.png)

作，每次操作者需要选择一堆非空的石子，并拿走至n少一颗石子，取完最i 后一颗石a子i 的玩家取得胜利。

由于 Alice 和 Bob 都是绝顶聪明的，所以他们总会采用最优策略进行游戏。

喜欢研究博弈论的你当然知道，这是典型的 Nim 游戏，当双方均采用最优策略时，先手在

![a ⊕ a ⊕ a ⊕ ··· ⊕ a = 0 时必败，否则必胜，其中 ⊕ 表示异或符号，也即 C/C++ 语言中的 1 2 3 n 运算符。只通过一点计算，你就预测出了最后的结果，于是你决定在游戏进行前，尝试对当前局面](sysuNovice_onsite_2025_assets/L_p16_formula002.png)

x
a
o
1
r
⊕运a2算⊕符a。3 只⊕通··过· ⊕一a点n 计=算0，你就预测出了最后的结果，⊕于是你决定在游戏进行前，尝试对当前局面
做 作。

x做o操r 作。

![一次操作定义为，选择两个任意的正整数 l,r(1 ≤ l ≤ r ≤ n)，然后对所有在  l,r  中的正整数 i，将 a i 异或上 ，即 。修改将通过宇宙射线完成，所以你无需考虑修改耗时太久而影响 Alice 和 Bob](sysuNovice_onsite_2025_assets/L_p16_formula003.png)

![异或上 i，即 a ← a ⊕i。修改将通过宇宙射l,r线(1完≤成l，≤所r 以≤你n)无需考虑修改耗时 l太,r久  而影响 Alicei和 Boabi i i 的游戏进行。](sysuNovice_onsite_2025_assets/L_p16_formula004.png)

的游戏进i 行。a

你想要知道，是否存在有限次操作的方案，使得局面能够转变为先手必败态。由于你追求完美，所以更

进一步地，如果存在这样的操作方案，你还希望所需的操作次数能够最小化。你决定写一个程序来解答

这个问题。

## Input

![第一行包含一个整数 n (1 ≤ n ≤ 106)，表示石子堆数。](sysuNovice_onsite_2025_assets/L_p16_formula005.png)

![第二行包含 n 个整数 a (1 ≤ a ≤ 109)，表示每堆石子的初始个数。 i i](sysuNovice_onsite_2025_assets/L_p16_formula006.png)

## Output

若不存在有限次的操作方案，使得局面能够转为先手必败态，则输出 -1。

![否则先输出一行一个整数 m，表示所需的最小操作次数。](sysuNovice_onsite_2025_assets/L_p16_formula007.png)

![接下来输出 m 行，第 i 行包含两个整数 l 和 r ，表示第 i 次操作的区间是  l ,r  。你的输出需要 i i i i 满足 。](sysuNovice_onsite_2025_assets/L_p16_formula008.png)

![满足 1 ≤ l ≤ m r ≤ n。 i i](sysuNovice_onsite_2025_assets/L_p16_formula009.png)

如果存在多种操作次数最小的合法方案，输出任意一种即可。

## Examples

### 样例输入

```text
5
20 24 8 7 2
```

### 样例输出

```text
1
4 5
```

### 样例输入

```text
8
21 52 11 25 41 67 77 10
```

### 样例输出

```text
-1
```

## Note

![对于第一个样例，我们可以选择仅修改一次，并选择区间  4,5  进行操作。操作后 a = 3,a = 7，满 4 5 足 ，此时局面变为先手必败态。需要注意的是，这只是](sysuNovice_onsite_2025_assets/L_p16_formula010.png)

![足 a ⊕ a ⊕ a ⊕ a ⊕ a = 20 ⊕ 24 ⊕ 8 ⊕ 3 ⊕ 7 = 0，此时局 4面,5变  为先手必败态。需要a注4 意=的3,是a5，=这7只是 1 2 3 4 5 其中一种最优方案，即使你的答案和样例输出不同，只要你的答案是任意一种最优方案，你的答案都会](sysuNovice_onsite_2025_assets/L_p16_formula011.png)

其中a一1 ⊕种a最2 ⊕优a方3 ⊕案a，4 ⊕即a使5 你=的20答⊕案24和⊕样8例⊕输3 ⊕出7不=同0，只要你的答案是任意一种最优方案，你的答案都会

被判定为正确。
