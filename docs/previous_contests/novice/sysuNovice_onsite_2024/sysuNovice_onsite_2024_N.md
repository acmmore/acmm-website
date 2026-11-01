# N. 不为人知的位运算童谣

输入文件: standard input

输出文件: standard output

时间限制: 1 second

空间限制: 256 megabytes

言语都是过剩多余

这梦境也将持续下去

若要由我来谈论爱的话

那一切都已在这首歌中

谁也不知道的这个故事

似乎又不小心哼唱出来了

![鹅妈妈有一段童谣，它是一个长度为 n 的严格单调递增非负整数序列 {a } (即 ∀i ∈  1,n − 1 ,a < a n i i+1](sysuNovice_onsite_2024_assets/N_p23_formula001.png)

)。

![鹅妈妈打算用一个非负整数 x 去保存这段童谣，序列会保留为 {a and x} 。 n](sysuNovice_onsite_2024_assets/N_p23_formula002.png)

![因为 x 越大越容易被人忘记，所以鹅妈妈希望找到最小的一个非负整数 x ，使得 {a and x} 依然是一 n](sysuNovice_onsite_2024_assets/N_p23_formula003.png)

![个严格单调递增的序列 (即 ∀i ∈  1,n − 1 ,(a and x) < (a and x)) 。 i i+1](sysuNovice_onsite_2024_assets/N_p23_formula004.png)

其中 and 操作表示 按位与，如果你不了解定义可以阅读下列定义：

将两个整数作为二进制数，对二进制表示中的每一位逐一运算，只有对应的两个二进位都为 1 时，结果

位才为 1 。在 C++ 中, 可以使用 “&” 运算符进行按位与。

## Input

![第一行给出一个正整数 n (2 ≤ n ≤ 105) 。](sysuNovice_onsite_2024_assets/N_p23_formula005.png)

![接下来一行给出 n 个非负整数表示 a (0 ≤ a < 231) 。 i i](sysuNovice_onsite_2024_assets/N_p23_formula006.png)

## Output

![输出一行一个非负整数表示满足条件最小的 x 。](sysuNovice_onsite_2024_assets/N_p23_formula007.png)

## Example

### 样例输入

```text
5
0 2 5 114 514
```

### 样例输出

```text
534
```

## Note

![对于样例中，所有的 a and x 分别是：0,2,4,18,514 。可以证明，不存在更小的 x 满足约束条件。 i](sysuNovice_onsite_2024_assets/N_p23_formula008.png)
