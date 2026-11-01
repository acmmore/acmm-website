# K. 晚餐铃

Time limit: 1 second

Memory limit: 256 megabytes

晚餐铃响起，像梦里那样呼唤着我。

因为不能选择，所以才不情愿地称之为爱吗？长围裙也是有温度的人。

无论什么时候我都会乖乖的，从前妈妈定下的规矩，某个寒夜里在路边弄丢了，打不开的门的剪影、白铃铛。

我不想吃的东西数也数不完，但如果一直这样的话我会慢慢死去，变得渺小而悲惨。喝下玩具厨师煮的热汤，用那

份温暖熬到天亮。抱紧自己好好睡一觉吧。

![美味的晚餐被分成 n 碗汤，连续一排摆在餐桌上。每碗汤都有一个温暖值，第 i 碗汤的温暖值为 a ，如果我一次 i](sysuNovice_warmup_2024_assets/K_p17_formula001.png)

![喝下一段从第 L 到第 R 碗汤，那么带来的温暖会是第 L 到第 R 碗汤中温暖值最大的一碗汤的温暖值 maxR a 。 i=L i](sysuNovice_warmup_2024_assets/K_p17_formula002.png)

一段一段地喝完所有的汤，每段都会给我带来温暖，这些温暖加起来会是无比幸福的吧？我可以将汤分成任意段，

每段为连续的任意长度，该怎样划分，使得最后带来的温暖的和最大呢？

像世俗那般，和大家一样，治好我的发烧吧，温柔地治好我吧，晚餐铃。

![原题插图（PDF 第 17 页）](sysuNovice_warmup_2024_assets/K_p17_figure1.png)

## Input

![输入数据分为多组数据，第一行输入一个整数 T ，表示数据数量。](sysuNovice_warmup_2024_assets/K_p18_formula003.png)

![紧接着 T 组数据，每组数据格式如下：](sysuNovice_warmup_2024_assets/K_p18_formula004.png)

![第一行为一个整数 n ，表示美味的晚餐被分成 n 碗汤。](sysuNovice_warmup_2024_assets/K_p18_formula005.png)

![第二行为 n 个整数，第 i 个整数为 a ，表示第 i 碗汤的温暖值。 i](sysuNovice_warmup_2024_assets/K_p18_formula006.png)

## Output

![每组数据输出一行，含一个整数，表示这 n 碗汤的各种划分方案中，带来的温暖的和的最大值。](sysuNovice_warmup_2024_assets/K_p18_formula007.png)

## Example

### 样例输入

```text
4
4
7 2 2 5
4
7 5 3 1
4
5 5 -1 2
4
5 0 5 0
```

### 样例输出

```text
16
16
12
10
```

## Note

![1 ≤ T ≤ 5,1 ≤ n ≤ 105,−109 ≤ a ≤ 109 i](sysuNovice_warmup_2024_assets/K_p18_formula008.png)

样例后两组数据的合适的划分方法分别为

![(5)(5,−1)(2)](sysuNovice_warmup_2024_assets/K_p18_formula009.png)

![(5,0)(5,0)](sysuNovice_warmup_2024_assets/K_p18_formula010.png)
