# B. 老实点 每次都有你

Time limit: 1 second

Memory limit: 256 megabytes

众所周知，Xcw 是 pcr 中的人气角色（Xcw：骑士君哥哥可以再叫我一次镜华吗），同时她也受 Lanly 委托，来到

新手赛咨询群中处理事务。

Lanly 不总是有时间教 Xcw 做更多的事——这也给了群友们时不时整出些让人两眼一黑的活的机会——Lanly 不

仅忙于自己的工作，还要抽出时间到 pcr 中刷装备。

![这一天，Lanly 在 pcr 中进行了 n 次扫荡，每次扫荡都获得了一定数量的金币，其中第 i 次扫荡获得的金币数量为](sysuNovice_warmup_2024_assets/B_p03_formula001.png)

![c 。 i](sysuNovice_warmup_2024_assets/B_p03_formula002.png)

![Lanly 发现每次扫荡得到的金币数量不同，但是由于今天是 k 倍掉落的日子，所以第 i 次扫荡实际得到的金币数量](sysuNovice_warmup_2024_assets/B_p03_formula003.png)

![c 为这次扫荡中初始得到的金币数量 a 乘 k 。其中 k 与任意的 a 都是正整数。 i i i](sysuNovice_warmup_2024_assets/B_p03_formula004.png)

![Lanly 忘记看今天是几倍掉落了，但 Lanly 有这 n 次扫荡的数据。请问你能否通过分析这 n 次扫荡的数据，得到](sysuNovice_warmup_2024_assets/B_p03_formula005.png)

![今天的掉落倍数 k 可能是哪些值呢？](sysuNovice_warmup_2024_assets/B_p03_formula006.png)

## Input

![输入数据分为多组数据。其中第一行输入一个整数 T ，表示数据组数。](sysuNovice_warmup_2024_assets/B_p03_formula007.png)

![接下来 T 组数据，每组数据格式如下：](sysuNovice_warmup_2024_assets/B_p03_formula008.png)

![第一行输入一个整数 n ，表示 Lanly 今天进行了 n 次扫荡。](sysuNovice_warmup_2024_assets/B_p03_formula009.png)

![第二行输入 n 个整数，其中第 i 个整数 c 表示第 i 次扫荡得到的金币数量。 i](sysuNovice_warmup_2024_assets/B_p03_formula010.png)

## Output

![每组数据输出一行，为将 k 的所有可能取值从小到大输出。](sysuNovice_warmup_2024_assets/B_p03_formula011.png)

## Example

### 样例输入

```text
3
6
6 27 30 18 39 9
7
8 36 32 20 36 52 12
6
14 56 42 28 49 21
```

### 样例输出

```text
1 3
1 2 4
1 7
```

## Note

![1 ≤ T ≤ 5,1 ≤ n ≤ 103](sysuNovice_warmup_2024_assets/B_p03_formula012.png)

![对于任意 i 满足，1 ≤ c ≤ 108 i](sysuNovice_warmup_2024_assets/B_p03_formula013.png)

提示：存在与开方相关复杂度的求因数算法。
