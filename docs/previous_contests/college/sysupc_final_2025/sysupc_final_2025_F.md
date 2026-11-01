# F. SYSU II

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 256 megabytes

As you all know, you are participating in the SYSUCPC (SYSU Counting Periodic-string Contest) finals.

A string is considered good if and only if it can be rearranged into a perfectly periodic

string with sysu as its period (which means several sysu repetitions). For example,

![sysu,yssu,ssyyssuu are all good, while ussu, sysusys are not. Given a string S, determine](sysupc_final_2025_assets/F_p10_formula001.png)

how many of its substrings are good.

![A string a is a substring of a string b if a can be obtained from b by the deletion of](sysupc_final_2025_assets/F_p10_formula002.png)

several (possibly zero or all) characters from the beginning and several (possibly zero or all)

characters from the end.

## Input

![The only line contains a single string S(4 ≤ |S| ≤ 2×105). It is guaranteed that S only contains](sysupc_final_2025_assets/F_p10_formula003.png)

lowercase English letters.

## Output

![An integer, representing the number of good substrings of S.](sysupc_final_2025_assets/F_p10_formula004.png)

## Example

### 样例输入

```text
ilovesysusysu
```

### 样例输出

```text
6
```

## Note

There are 6 good substrings : sysu,ysus,susy,usys,sysu,sysusysu.
