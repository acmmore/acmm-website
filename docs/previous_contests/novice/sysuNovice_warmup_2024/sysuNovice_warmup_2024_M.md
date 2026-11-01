# M. 梦与公交站

Time limit: 1 second

Memory limit: 256 megabytes

小 Zo 正在公交站等车，可是深夜里公交车已经不会再来了。在小 Zo 开始哭泣之前，空中出现了一位小精灵。小

![精灵告诉小 Zo ，沿路一共有 n 处公交站，编号从 1 到 n ，许多公交站都分布有数量不定的小精灵，当小 Zo 到达](sysuNovice_warmup_2024_assets/M_p21_formula001.png)

一处公交站的时候，该公交站的小精灵会用传送魔法帮助小 Zo 到想去的公交站。

![不过每只小精灵都有自己的特点，第 i 只小精灵喜欢数字 w ，因此它只会将小 Zo 送到编号为 k 的倍数的公交站； i i](sysuNovice_warmup_2024_assets/M_p21_formula002.png)

![此外它有法力的限制，只能将小 Zo 送到编号在  L ,R   间的公交站；同时传送会花费 w 的时间。 i i i](sysuNovice_warmup_2024_assets/M_p21_formula003.png)

![小精灵已经知道公交站的数量 n ，当前它与小 Zo 所在公交站编号 S ，小精灵的数量 q 以及它们的所有信息。小](sysuNovice_warmup_2024_assets/M_p21_formula004.png)

精灵想要知道，将小 Zo 送去某一个公交站，最短需要多长时间。

## Input

![输入数据分为多组数据。第一行输入一个整数 T ，表示数据组数。](sysuNovice_warmup_2024_assets/M_p21_formula005.png)

![接下来输入 T 组数据，每组数据输入格式如下：](sysuNovice_warmup_2024_assets/M_p21_formula006.png)

![第一行输入三个整数 n,q,S ，分别表示公交站的数量，小精灵的数量与当前小 Zo 所在公交站编号。](sysuNovice_warmup_2024_assets/M_p21_formula007.png)

![随后 q 行，每行输入五个整数 u ,L ,R ,k ,w ，分别表示一只小精灵位于编号为 u 的公交站，能将小 Zo 送到编 i i i i i i](sysuNovice_warmup_2024_assets/M_p21_formula008.png)

![号在  L ,R   间且为 k 倍数的公交站，传送花费时间为 w 。 i i i i](sysuNovice_warmup_2024_assets/M_p21_formula009.png)

## Output

![每组数据输出一行，含 n 个整数，为从小 Zo 出发点 S 出发到各个编号的公交站的最短距离，按编号从小到大输](sysuNovice_warmup_2024_assets/M_p21_formula010.png)

出。

## Example

### 样例输入

```text
3
5 5 1
1 1 4 1 13
1 2 5 2 3
2 3 5 1 9
4 2 3 1 5
5 1 5 1 1
5 5 1
1 1 3 2 1
2 1 3 1 2
3 3 5 5 1
2 2 4 2 3
5 1 5 1 1
4 3 3
1 1 4 1 7
3 1 3 1 2
2 2 4 2 4
```

### 样例输出

```text
0 3 8 3 12
0 1 3 4 4
2 2 0 6
```

## Note

![1 ≤ T ≤ 5,1 ≤ n ≤ 10000,1 ≤ q ≤ 30000。](sysuNovice_warmup_2024_assets/M_p22_formula011.png)

![对于任意 i ，满足 1 ≤ u ≤ n,1 ≤ L ,R ≤ n,1 ≤ k ≤ n,1 ≤ w ≤ 109 。 i i i i i](sysuNovice_warmup_2024_assets/M_p22_formula012.png)

![数据保证从编号为 S 的公交站出发，小 Zo 能直接或间接被送到 1 到 n 中任意编号的公交站。](sysuNovice_warmup_2024_assets/M_p22_formula013.png)
