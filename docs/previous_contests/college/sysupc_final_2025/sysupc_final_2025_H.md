# H. SYSU III

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 256 megabytes

As you all know, you are participating in the SYSUCPC (SYSU Constructive Problem Contest) finals.

Undoubtedly, the Constructive Kingdom of Sun Yat-sen University is eager for you to tackle some related

problems.

![Given a string S containing only lowercase letters, determine the maximum number of disjoint subsequences of length that can be formed, such that all subsequences are . Formally, a subsequence](sysupc_final_2025_assets/H_p13_formula001.png)

subsequences of leSngth 4 that can be formed, such that all subsequences are sysu. Formally, a subsequence
of a string is a subset of characters of that read from left to right.

![of a string S is a subset4 of characters of S that read from left to right.](sysupc_final_2025_assets/H_p13_formula002.png)

A greedy algorithm is currently used: each time, starting from the end, an unused u is considered, and it is
matched with nearest unused sequentially to form a qualified subsequence, which is then removed.

matched with nearest unused s,y,s sequentially to form a qualified subsequence,uwhich is then removed.

![You are now requested to provide a string S such that the answer obtained by the greedy method is x, while the correct answer is . If no such exists, output .](sysupc_final_2025_assets/H_p13_formula003.png)

![while the correct answer is y. If no such S eSxists, output −1.](sysupc_final_2025_assets/H_p13_formula004.png)

## Input

![The only line contains two integers x,y(1 ≤ x,y ≤ 105).](sysupc_final_2025_assets/H_p13_formula005.png)

## Output

![A string S such that the answer obtained by the greedy method is x, while the correct answer is y. If no such exists, output . The length of must not exceed .](sysupc_final_2025_assets/H_p13_formula006.png)

![such S exSists, output −1. The length of S must not exceed 4 × 105.x](sysupc_final_2025_assets/H_p13_formula007.png)

## Examples

### 样例输入

```text
1 1
```

### 样例输出

```text
ilovesysu
```

### 样例输入

```text
2 1
```

### 样例输出

```text
-1
```
