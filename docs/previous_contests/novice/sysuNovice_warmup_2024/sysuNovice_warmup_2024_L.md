# L. 晚餐铃

Time limit: 1 second

Memory limit: 256 megabytes

晚餐铃响起，像寻常那样呼唤着大家。

各种我所不拥有的东西散落一地，大家理所当然拿着的餐具，触碰就消失不见了。

在梦里我能飞翔，用以前魔女给的翅膀，回家路上透过窗口看到的温暖聚会，长围裙的剪影、白铃铛。

我没有的东西数也数不完，回家路上透过窗口看到的温暖聚会，在魔术光里的喧闹。每次每次看到他们我都忍不住

想，那份温暖是怎么来的由什么组成的？那里的孩子知道答案是什么。

![苦涩的回忆被分成 n 勺雪，连续一排洒在雪地上。每勺雪都有一个痛苦值，第 i 勺雪的痛苦值为 a ，如果我一次 i](sysuNovice_warmup_2024_assets/L_p19_formula001.png)

![喝下一段从第 L 到第 R 勺雪，那么带来的痛苦会是第 L 到第 R 勺雪中痛苦值最大的一勺雪的痛苦值 maxR a 。 i=L i](sysuNovice_warmup_2024_assets/L_p19_formula002.png)

一段一段地喝完所有的雪，每段都会给我带来痛苦，这些痛苦加起来会是难以承受的吧？我可以将雪分成任意段，

每段为连续的任意长度，该怎样划分，使得最后带来的痛苦的和最小呢？

被银雪覆盖着，在我的心脏变冷之前，呼唤我的名字吧，晚餐铃。

![原题插图（PDF 第 19 页）](sysuNovice_warmup_2024_assets/L_p19_figure1.png)

## Input

![输入数据分为多组数据，第一行输入一个整数 T ，表示数据数量。](sysuNovice_warmup_2024_assets/L_p20_formula003.png)

![紧接着 T 组数据，每组数据格式如下：](sysuNovice_warmup_2024_assets/L_p20_formula004.png)

![第一行为一个整数 n ，表示苦涩的回忆被分成 n 勺雪。](sysuNovice_warmup_2024_assets/L_p20_formula005.png)

![第二行为 n 个整数，第 i 个整数为 a ，表示第 i 勺雪的痛苦值。 i](sysuNovice_warmup_2024_assets/L_p20_formula006.png)

## Output

![每组数据输出一行，含一个整数，表示这 n 勺雪的各种划分方案中，带来的痛苦的和的最小值。](sysuNovice_warmup_2024_assets/L_p20_formula007.png)

## Example

### 样例输入

```text
3
3
5 1 -5
3
5 -5 1
4
5 -7 3 -2
```

### 样例输出

```text
0
1
-1
```

## Note

![1 ≤ T ≤ 5,1 ≤ n ≤ 105,−109 ≤ a ≤ 109 i](sysuNovice_warmup_2024_assets/L_p20_formula008.png)

样例前两组数据的合适的划分方法分别为

![(5,1)(−5)](sysuNovice_warmup_2024_assets/L_p20_formula009.png)

![(5)(−5)(1)](sysuNovice_warmup_2024_assets/L_p20_formula010.png)
