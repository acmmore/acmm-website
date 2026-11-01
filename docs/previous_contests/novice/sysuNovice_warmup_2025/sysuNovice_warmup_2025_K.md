# K. 骤雨

输入文件: standard input

输出文件: standard output

时间限制: 1 second

空间限制: 256 megabytes

让这崩落的世界得到修复，完好如初。

让雨点和雪花在这片它们从未光顾过的荒芜土地上降下。

让毫无生气的死海再次满盈，让沉寂许久的波涛再度翻涌。

让新的法则一锤定音，就此挥之不去。

2024 年 11 月 12 日，漩涡滚滚，巨浪滔天。本只是来参加百年庆典的你，却意外卷入这场风暴之中...

所谓的法则呢，就是这么个东西：

![称一个长度为 m 的整数序列 c 是一个 V-diagram，当且仅当 m ≥ 3，且存在一个下标 1 < i < m 满足：](sysuNovice_warmup_2025_assets/K_p17_formula001.png)

![• 对所有 1 ≤ j < i，有 c > c 。 j j+1](sysuNovice_warmup_2025_assets/K_p17_formula002.png)

![• 对所有 i < j ≤ m，有 c j > c j−1 。](sysuNovice_warmup_2025_assets/K_p17_formula003.png)

![给定每个位置的取值范围，你能否造出一个长度为 n 的 V-diagram，平息这一切呢？](sysuNovice_warmup_2025_assets/K_p17_formula004.png)

## Input

![第一行一个正整数 t（1 ≤ t ≤ 5 × 104），表示数据组数。](sysuNovice_warmup_2025_assets/K_p17_formula005.png)

![对于每组数据，第一行输入一个正整数 n（3 ≤ n ≤ 2 × 105），表示序列长度。](sysuNovice_warmup_2025_assets/K_p17_formula006.png)

![接下来 n 行，每行两个正整数 l,r（1 ≤ l ≤ r ≤ 109），表示每个数的取值范围。](sysuNovice_warmup_2025_assets/K_p17_formula007.png)

![保证所有数据组中 n 的总和不超过 2 × 105。](sysuNovice_warmup_2025_assets/K_p17_formula008.png)

## Output

![若存在合法方案，则输出一行 YES，再输出一行 n 个数，表示构造的一组方案；](sysuNovice_warmup_2025_assets/K_p17_formula009.png)

若不存在合法方案，只需输出一行 NO。

YES 与 NO 不区分大小写。

## Example

### 样例输入

```text
2
5
8 10
7 10
6 10
5 10
4 10
4
4 5
4 5
4 5
4 5
```

### 样例输出

```text
YES
10 7 8 9 10
NO
```
