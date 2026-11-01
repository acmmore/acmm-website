# I. 挑选座位

输入文件： standard input
出文件：

输出文件： s s t t a a n n d d a a r r d d i o n u p t u p t ut
时间限制： 2 seconds

时间限制： s2tsaencdoanrdds

空间限制： 256 megabytes

中午下课的时候，松韬园里总是有很多人，小 Z 一般会挑选一个周围的人尽量少的座位入座。但松韬园

很大，小 Z 有时候不能在短时间里找到合适的座位，所以他决定统计每个座位周围的人数。

![松韬园里一共有 n 个座位，第 i 个座位上已经坐了 a 个人。这 n 个座位被 n − 1 条边相连，且保证这 i 些座位可以互相到达。两个座位是相邻的，当且仅当这两个座位被一条边相连。一个座位周围的人数被](sysuNovice_onsite_2025_assets/I_p13_formula001.png)

些座位可以互相到n达。两个座位i是相邻的，当且仅当a这i 两个座位被n 一条边相连n。−一1 个座位周围的人数被

定义为这个座位的人数和与这个座位相邻的所有座位的人数之和。

![小 Z 会在 q 个单位时间里统计松韬园座位周围的人数，在每个单位时间里，可能发生两种事件：](sysuNovice_onsite_2025_assets/I_p13_formula002.png)

![• 第 x 个座位的人数会变成 y，即令 a ← y； x](sysuNovice_onsite_2025_assets/I_p13_formula003.png)

![• 小 Z 想要知道第 x 个座位周围的人数。](sysuNovice_onsite_2025_assets/I_p13_formula004.png)

小 Z 希望你能帮他解决这个问题。

## Input

![第一行包含两个整数 n,q (1 ≤ n,q ≤ 5 × 105)，分别代表座位数量和单位时间数量。](sysuNovice_onsite_2025_assets/I_p13_formula005.png)

![第二行包含 n 个整数 a (0 ≤ a ≤ 109)，代表初始情况下每个座位上的人数。 i i](sysuNovice_onsite_2025_assets/I_p13_formula006.png)

![接下来 n − 1 行，每行包含两个整数 a,b (1 ≤ a,b ≤ n,a ≠ b)，表示第 a 个座位和第 b 个座位被一条边 相 。](sysuNovice_onsite_2025_assets/I_p13_formula007.png)

相连。

![接下来 q 行，每行的最开始为一个整数 opt (1 ≤ opt ≤ 2)，表示事件的类型。随后：](sysuNovice_onsite_2025_assets/I_p13_formula008.png)

![• 若 opt = 1，则接下来包含两个整数 x,y (1 ≤ x ≤ n,0 ≤ y ≤ 109)，表示第 x 个座位的人数会变成 ；](sysuNovice_onsite_2025_assets/I_p13_formula009.png)

![y；o](sysuNovice_onsite_2025_assets/I_p13_formula010.png)

![• 若 opt = 2，则接下来包含一个整数 x (1 ≤ x ≤ n)，表示小 Z 想要知道第 x 个座位周围的人数。](sysuNovice_onsite_2025_assets/I_p13_formula011.png)

## Output

![对于每个 opt = 2 的事件输出一行一个整数，表示询问的答案。](sysuNovice_onsite_2025_assets/I_p13_formula012.png)

## Example

### 样例输入

```text
5 3
1 2 3 4 5
1 2
2 3
2 4
4 5
2 2
1 2 3
2 2
```

### 样例输出

```text
10
11
```

## Note

本题输入数据量较大，请使用较快的输入方式。
