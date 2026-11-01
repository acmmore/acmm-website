# F. 商店

输入文件： standard input
出文件：

输出文件： s s t t a a n n d d a a r r d d i o n u p t u p t ut
时间限制： 1 second

时间限制： s1tsaencdoanrdd

空间限制： 256 megabytes

小 F 最近沉迷某款四字游戏，每天早上八点醒来第一件事就是打开每日商店看看是否刷出心仪的皮肤。

他的好兄弟 ZZ 看他刷不出金整天愁眉不展，打算帮助他写个程序预测一下。

![假设一共有 n 种类型的枪械，第 i 类枪械一共有 a 种皮肤，而小 F 心仪的只有其中的 b 种。商店每 i i 天只刷新一种皮肤，且如果小 F 购买过某类枪械的皮肤，那么这类枪械的所有皮肤将不会再次在商店里](sysuNovice_onsite_2025_assets/F_p09_formula001.png)

天只刷新一种n皮肤，且如果小 F 购i买过某类枪械的a皮i 肤，那么这类枪械的所有皮肤将不会b再i 次在商店里

![刷出。商店里刷出的皮肤会在所有可刷新的皮肤中等概率随机，只要刷新出小 F 心仪的皮肤，他就会购 (cid:80)](sysuNovice_onsite_2025_assets/F_p09_formula002.png)

![买出。具体的里，假出设现在小 F 没 所购买过的枪械的集合等为概 S ，那么每日商店出刷小新的物 心品将在 (cid:80) a 就个皮 i∈S i 肤中等概率随机。](sysuNovice_onsite_2025_assets/F_p09_formula003.png)

现在 ZZ 想让你帮忙写个程序预测小 F 期望需要多少天才能为每类枪械购买一件皮肤。

## Input

![第一行包含一个整数 n (1 ≤ n ≤ 19)，代表枪械类型总数。](sysuNovice_onsite_2025_assets/F_p09_formula004.png)

![接下来 n 行，第 i 行包含两个整数 a ,b (1 ≤ b ≤ a ≤ 100)，分别代表第 i 类枪械的皮肤数量和其中小 i i i i F 心仪的皮肤数量。](sysuNovice_onsite_2025_assets/F_p09_formula005.png)

F 心仪的n皮肤数量i。

## Output

![输出一行一个整数，若期望天数的最简分数为 P ，那么你应当输出 P · Q−1 mod (109 + 7)。 Q](sysuNovice_onsite_2025_assets/F_p09_formula006.png)

## Examples

### 样例输入

```text
3
3 1
3 1
3 1
```

### 样例输出

```text
9
```

### 样例输入

```text
19
65 27
55 3
32 14
59 1
75 71
96 84
69 49
68 59
98 73
85 73
20 3
14 13
75 62
86 46
35 10
40 20
13 3
25 12
85 48
```

### 样例输出

```text
2374748
```
