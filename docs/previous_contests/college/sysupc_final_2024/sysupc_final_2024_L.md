# L. LCM and GCD

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 512 megabytes

As you all know, you are participating in the SYSUCPC (SYSU Constructive Problem Contest) finals.

Undoubtedly, the Constructive Kingdom of Sun Yat-sen University is eager for you to tackle some related

problems.

Before you challenge the problem from the constructive kingdom, here’s another constructive problem for

you to warm up.

![You are given n integers a ,a ,...,a and m integers b ,b ,...,b . An n-by-m matrix mat is called 1 2 n 1 2 m i,j if it satisfies all requirements below:](sysupc_final_2024_assets/L_p18_formula001.png)

good if it satisfines all requair1e,ma2e,n.t.s.b,aelnow:

![• 1 ≤ mat ≤ 109 holds; i,j](sysupc_final_2024_assets/L_p18_formula002.png)

![• The LCM (Least Common Multiple) of numbers in the i-th row equals a ; i](sysupc_final_2024_assets/L_p18_formula003.png)

![• The GCD (Greatest Common Divisor) of numbers in the j-th column equals b . j](sysupc_final_2024_assets/L_p18_formula004.png)

Construct a good matrix or determine if it is impossible.

## Input

![The first line contains two integers n,m (1 ≤ n,m ≤ 1000).](sysupc_final_2024_assets/L_p18_formula005.png)

![The second line contains n integers a ,a ,...,a (1 ≤ a ≤ 109). 1 2 n i](sysupc_final_2024_assets/L_p18_formula006.png)

![The third line contains m integers b ,b ,...,b (1 ≤ b ≤ 109). 1 2 m j](sysupc_final_2024_assets/L_p18_formula007.png)

## Output

If it’s impossible to construct a good matrix, output a single line containing No.

![Otherwise, output Yes on the first line, and then output n lines, each containing m numbers, denoting your construction. If there are multiple answers, print any of them.](sysupc_final_2024_assets/L_p18_formula008.png)

your construction. IYfetshere are multiple answers, print anynof them.

You can output Yes and No in any case (for example, strings yEs, yes, and YES will be recognized as a
positive response).

positive responseY).e

## Examples

### 样例输入

```text
2 3
2 6
1 2 2
```

### 样例输出

```text
Yes
2 2 2
1 6 2
```

### 样例输入

```text
3 3
1 1 4
5 1 4
```

### 样例输出

```text
No
```
