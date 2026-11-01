# B. 寻觅

输入文件: standard input

输出文件: standard output

时间限制: 1 second

空间限制: 128 megabytes

慧青学者协会 (Savvy Young Scholar Union) 聚集了一群朝气蓬勃的青年学者。他们经常举行集会讨论前

沿理论问题。下周二是协会的创办 001 周年纪念日，为此协会理事会决定举办盛大的庆典。

理事长分配给秘书小嵩一个任务：给协会成员发送庆典的邀请函。在编写好得体的文书和导入协会名录

后，打印机被小嵩一键启动，一张张邀请函被制作出来。然而，不同寻常的是，慧青学者协会的打印机解

![锁了一定程度的自我意识，它会把正常的数字编号加密成一串长度为 n 的英文字符串 S。每次正常编号](sysuNovice_onsite_2024_assets/B_p03_formula001.png)

加 1，对这个字符串的影响是修改某个特定位置的字符 (当然也有可能全串维持不变)。

![协会总共有 m + 1 个成员，故总共制作了 m + 1 张邀请函。小嵩观察到了第 1 张邀请函的加密串为 S 。 1](sysuNovice_onsite_2024_assets/B_p03_formula002.png)

![之后，小嵩又发现第 i + 1 张邀请函对应的加密串 S 是将 S 中第 x 个字符改成 ch 。 i+1 i i i](sysuNovice_onsite_2024_assets/B_p03_formula003.png)

收到邀请函的成员十分兴奋，聪明的他/她一下子就注意到了那串神奇的字符串。出于强烈的集体认同感，

![收到邀请函的那一刻，成员就会数邀请函上的加密串 S 有多少个子串为 “sysu”，并在协会群发送自己的](sysuNovice_onsite_2024_assets/B_p03_formula004.png)

伟大发现。

聪明的你也是协会的一员，请试着预测所有人的消息吧。

## Input

![第一行包含两个整数 n(1 ≤ n ≤ 106) 和 m(1 ≤ m ≤ 104)，分别表示字符串 S 的长度和协会成员数 −1 。](sysuNovice_onsite_2024_assets/B_p03_formula005.png)

![第二行给出一个长度为 n 的字符串 S ，其中字符均为小写英文字母。 1](sysuNovice_onsite_2024_assets/B_p03_formula006.png)

![接下来的 m 行，每 i 行包含一个整数 x (1 ≤ x ≤ n) 和一个字符 ch (保证为小写英文字母) ，描述 S 到 i i i i](sysuNovice_onsite_2024_assets/B_p03_formula007.png)

![S 的修改。 i+1](sysuNovice_onsite_2024_assets/B_p03_formula008.png)

## Output

![输出 m + 1 行，每行一个整数，表示收到第 i 张邀请函的成员统计子串 “sysu” 的出现次数的结果。](sysuNovice_onsite_2024_assets/B_p03_formula009.png)

## Example

### 样例输入

```text
6 5
sysusy
3 c
3 s
4 y
6 u
3 s
```

### 样例输出

```text
1
0
1
0
1
1
```

## Note

子串：串中任意个连续的字符组成的子序列称为该串的子串。
