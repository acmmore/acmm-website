# I. 小学生也能秒解的题

Time limit: 1 second

Memory limit: 256 megabytes

Lanly 告知 Windberu ，在《名侦探柯南》的动画第 1135 集（对应漫画的第 1062 话）中，柯南在诸多 FBI 面前

淡定地破解了暗号，令众人佩服。

![这是柯南的破译过程，为将密文的底部 3 行进行左右翻转，随后发现从左往右每 5∗5 个字符表示原文的一个字符，](sysuNovice_warmup_2024_assets/I_p13_formula001.png)

借此破译出了原文的各个字符。

现在 Windberu 也给你一段密文，告诉你原文仅含小写字母，希望你能帮忙破译得到原文。

![原题插图（PDF 第 13 页）](sysuNovice_warmup_2024_assets/I_p13_figure1.png)

![原题插图（PDF 第 13 页）](sysuNovice_warmup_2024_assets/I_p13_figure2.png)

## Input

![第一行输入一个整数 n ，代表原文长度。接下来 5 行每行输入一个长度为 5∗n 的仅含 .|− 三种字符的字符串，这](sysuNovice_warmup_2024_assets/I_p14_formula002.png)

5 行字符串代表着加密后的文字。

## Output

![输出一行长度为 n 的字符串，表示破译后的原文，用小写字母表示。](sysuNovice_warmup_2024_assets/I_p14_formula003.png)

## Example

### 样例输入

```text
9
............-.........-....-....-...-.-..-.-.
.|....|....|.|..|.|..|....|.|..|...|.|.||.|.|
.................-....-......................
|.|.||.|.|...|..|.|....|..|.|..|.|....|....|.
............-.........-....-....-....-.......
```

### 样例输出

```text
iloveacmm
```

## Note

![1 ≤ n ≤ 105](sysuNovice_warmup_2024_assets/I_p14_formula004.png)

你可能需要依靠随题目提供的大数据完成本题。
