# D. 区区整除

输入文件: standard input

输出文件: standard output

时间限制: 1 second

空间限制: 16 megabytes

![小 S 和小 Y 是情同手足的好哥们，经常互相考验对方问题。当对方回答不上来时，他们就会有强烈的优](sysuNovice_onsite_2024_assets/D_p05_formula001.png)

![越感。今天的数学课上，老师强哥在黑板上写上，“x 整除 y，记作 x|y，等价于 ∃k ∈ Z,y = k · x ……”](sysuNovice_onsite_2024_assets/D_p05_formula002.png)

![下课后，小 S 得意地走到小 Y 的书桌边，拍了拍小 Y 肩膀，“刚刚上课的时候, 我想到了一道关于整除](sysuNovice_onsite_2024_assets/D_p05_formula003.png)

的题，你肯定不会做。”

![小 Y 登时站了起来，插起了腰，怒目圆睁, “嘿，区区整除，难不倒我！！！你放马过来。”     x > y > z     x|y + z 小 S 从裤兜掏出一张皱巴巴的草稿纸，其上赫然写道：有三个正整数 x,y,z，满足 ，    y|x + z     z|x + y](sysuNovice_onsite_2024_assets/D_p05_formula004.png)

![若已知 d = x − z ，请据此构造合法的 x,y,z 或指出不存在方案。](sysuNovice_onsite_2024_assets/D_p05_formula005.png)

![此时的小 Y 汗流浃背了，赶紧想办法推脱一下，“我上个厕所应该就想出来了。你别得意的太早。”](sysuNovice_onsite_2024_assets/D_p05_formula006.png)

![在去厕所的路上，小 Y 撞见了你，马上像抓到救命稻草一般，一五一十地告诉了你题目，请求聪明的你](sysuNovice_onsite_2024_assets/D_p05_formula007.png)

的帮助。

## Input

![输入一个正整数 d(1 ≤ d ≤ 109)，表示 x − z 的值](sysuNovice_onsite_2024_assets/D_p05_formula008.png)

## Output

![若存在方案，请输出任意一种。输出一行三个整数 x,y,z (以空格相隔)。](sysuNovice_onsite_2024_assets/D_p05_formula009.png)

若无解，输出 “Impossible”(不包含引号)。

## Examples

### 样例输入

```text
3
```

### 样例输出

```text
Impossible
```

### 样例输入

```text
4
```

### 样例输出

```text
6 4 2
```
