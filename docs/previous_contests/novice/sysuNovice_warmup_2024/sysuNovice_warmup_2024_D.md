# D. 究极手

Time limit: 1 second

Memory limit: 256 megabytes

《塞尔达传说：王国之泪》将会在 2023.05.12 发售，Windberu 表示这个 4 月份是一天也呆不下去了。

前阵子，Windberu 看见了《王国之泪》的实机演示视频，激动无比，对其中林克的各项新能力非常感兴趣。

其中林克获得的一项能力是「究极手」，它让林克能够将许多材料连接拼装成一个整体，只需要敲击这个整体的任

意一个位置，就会有一个信号被传递，启动连接在这个整体里的风扇机。如下图展示的这样

![Windberu 想要写程序实现「究极手」的功能——在 Windberu 的设计中，一共有 N 个材料被组成一个整体，不](sysuNovice_warmup_2024_assets/D_p06_formula001.png)

![同材料有不同数量的接口，第 i 个材料的接口数量为 p 。两个不同的材料 i,j 间可以各消耗一个接口被「究极手」 i](sysuNovice_warmup_2024_assets/D_p06_formula002.png)

![连接起来，用 (i,j) 表示，要求 i < j 。](sysuNovice_warmup_2024_assets/D_p06_formula003.png)

![Windberu 希望你能帮忙测试一下已经写好的程序。Windberu 会告诉你材料的数量 N 以及各个材料的接口数量 p i](sysuNovice_warmup_2024_assets/D_p06_formula004.png)

，希望你给 Windberu 一个使用「究极手」连接材料的测试数据，测试数据含使用「究极手」的次数以及分别在哪

两个材料间使用。要求所有材料到最后都被连接起来成为一个整体，且每个材料的所有接口都被用上。

但是 Windberu 在尝试实现信号传递的功能时发现程序卡住了，检查后发现当材料的连接结构出现环的时候会出问

![题，例如 (1,2)(1,3)(2,3) 或者 (1,2)(1,2) 这样的结构出现时，信号会在材料间无止境地循环。](sysuNovice_warmup_2024_assets/D_p06_formula005.png)

Windberu 发现自己修不好这个 bug ，于是反其道而行之，Windberu 要求你给的测试数据里不能出现这样的结构。

得知这样的奇怪要求的你依然愿意给 Windberu 测试数据，但是你也降下神罚，惩戒 Windberu 明年才能玩到《王

国之泪》。

## Input

输入数据包含多个数据点，每个数据点格式如下

![第一行输入一个正整数 N ，表示材料的数量，材料从 1 开始从小往大编号。](sysuNovice_warmup_2024_assets/D_p06_formula006.png)

![第二行输入 N 个整数，其中第 i 个整数表示第 i 个材料的接口数量 p 。 i](sysuNovice_warmup_2024_assets/D_p06_formula007.png)

![当输入的 N 为 0 时表示数据输入结束。](sysuNovice_warmup_2024_assets/D_p06_formula008.png)

![原题插图（PDF 第 6 页）](sysuNovice_warmup_2024_assets/D_p06_figure1.png)

## Output

![对于每个数据点，若不可能得到能满足输入数据的测试数据，则仅输出一行，内容为 −1 。若能得到能满足输入数](sysuNovice_warmup_2024_assets/D_p07_formula009.png)

据的测试数据，则输出测试数据。如果包含多个能满足的测试数据，输出任意一个即可。其中测试数据的格式为

![第一行输出一个整数 M ，表示「究极手」的使用次数。](sysuNovice_warmup_2024_assets/D_p07_formula010.png)

![接下来 M 行，每行包含两个整数 i,j ，表示使用一次「究极手」将材料 i 与材料 j 连接起来，要求 1 ≤ i < j ≤ N](sysuNovice_warmup_2024_assets/D_p07_formula011.png)

，可以按任意顺序输出。要求所有材料到最后都被连接起来成为一个整体，且每个材料的所有接口都被用上，且不

能出现环结构。

## Example

### 样例输入

```text
3
2 2 2
6
1 1 4 1 2 1
13
1 9 1 1 3 2 1 1 1 1 1 1 1
6
1 1 1 1 1 5
2
1 1
0
```

### 样例输出

```text
-1
5
5 6
3 5
3 4
2 3
1 3
12
6 13
5 6
5 12
2 5
2 11
2 10
2 9
2 8
2 7
2 4
2 3
1 2
5
5 6
4 6
3 6
2 6
1 6
1
1 2
```

## Note

![∑ 输入数据满足：所有数据点的 N 的总和 1 ≤ N ≤ 106 ，每个数据点满足所有 1 ≤ p ≤ 108 。 i](sysuNovice_warmup_2024_assets/D_p07_formula012.png)

![输出数据要求：0 ≤ M ≤ 108 ，任意 (i,j) 要求 1 ≤ i < j ≤ N 。](sysuNovice_warmup_2024_assets/D_p07_formula013.png)

（PS：事实上 Windberu 买不起 Nintendo Switch ，所以即使《王国之泪》发售也玩不到《王国之泪》）
