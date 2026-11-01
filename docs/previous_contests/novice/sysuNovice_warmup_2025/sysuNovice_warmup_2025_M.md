# M. 计算

输入文件: standard input

输出文件: standard output

时间限制: 1 second

空间限制: 256 megabytes

已经没有什么好怕的了。

— 《魔法少女小圆》

![这是一个存在魔法的世界。世界上存在极少数的少女会与 QB 签订魔法契约，成为 “魔法少女” 以对抗邪](sysuNovice_warmup_2025_assets/M_p22_formula001.png)

恶的魔女保护世界。

![逸仙书院校庆即将到来，小 C 想和同伴一起庆祝这个日子，正当他们在准备的时候，未知的敌人突然出](sysuNovice_warmup_2025_assets/M_p22_formula002.png)

![现在了这里，企图制造混乱。这时 QB 出现在了他的面前，她希望小 C 和自己签订契约，成为 “魔法少](sysuNovice_warmup_2025_assets/M_p22_formula003.png)

![女” 来保护她的朋友和这里的一切。作为交换，小 C 可以实现一个愿望。](sysuNovice_warmup_2025_assets/M_p22_formula004.png)

![正巧小 C 正烦恼于某门科目的结课作业，作业只有一道问题。问题是这样的：小 C 每次会收到一串信](sysuNovice_warmup_2025_assets/M_p22_formula005.png)

![息, 信息由数字和 ‘|’、‘&’、‘ ^ ’ 三种运算符构成，数字连续长度不超过 5 ，特别的，‘^’ 后面的指数最多](sysuNovice_warmup_2025_assets/M_p22_formula006.png)

![只有一位，且数值 ≤ 3 ，保证不会出现运算符相邻情况，并保证 ‘^’ 运算符不会连续出现，即 3^3^3 是](sysuNovice_warmup_2025_assets/M_p22_formula007.png)

错误的。

![小 C 需要 QB 帮他得到这一串信息运算后的结果，由于 QB 数学不好，于是她找到了人类世界中为数](sysuNovice_warmup_2025_assets/M_p22_formula008.png)

不多的朋友——你，并向你求助，希望你能够帮帮她。

## Input

![仅包含一行一个字符串 S(|S| ≤ 2×106 ) ，表示 QB 收到的一串信息。(保证 S 中的字符由数字,‘|’,‘&’,‘^’](sysuNovice_warmup_2025_assets/M_p22_formula009.png)

构成。)

## Output

输出仅一行, 包含一个数字, 表示你的答案。

## Examples

### 样例输入

```text
1&1^2|1^1
```

### 样例输出

```text
1
```

### 样例输入

```text
11451&1919|810
```

### 样例输出

```text
1851
```

## Note

注意, 在本题中，‘|’,‘&’ 是位运算符，但 ‘^’ 是乘方运算符，具有右结合性。

优先级: 乘方 (^)> 按位与 (&)> 按位或 (|)。
