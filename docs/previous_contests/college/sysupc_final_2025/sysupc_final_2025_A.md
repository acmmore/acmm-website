# A. Abacus

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 2 seconds

Time limit: s2tsaencdoanrdds

Memory limit: 128 megabytes

![There is a special abacus lying flat on the table with a total of m vertical rods. Each vertical rod has some beads, forming a total of rows. The -th row from the top contains beads, where is a positive](sysupc_final_2025_assets/A_p03_formula001.png)

![some beads, forming a total of n rows. The i-th row from the top cmontains a beads, where a is a positive i i integer not exceeding . Adjacent rows on a vertical rod may not necessarily both have beads. Now, the](sysupc_final_2025_assets/A_p03_formula002.png)

![integer not exceeding m. Adjacnent rows on ia vertical rod may not necessaraiily both have beaaids. Now, the abacus is stood upright, and all beads fall naturally. Determine the number of beads in each row after the](sysupc_final_2025_assets/A_p03_formula003.png)

abacus is stood uprighmt, and all beads fall naturally. Determine the number of beads in each row after the

![beads have fallen. It can be proved that there are still n rows after the beads fall.](sysupc_final_2025_assets/A_p03_formula004.png)

The process for the first sample case is as follows:

## Input

![The first line contains two integers n and m(1 ≤ n,m ≤ 104).](sysupc_final_2025_assets/A_p03_formula005.png)

![The next line contains n integers a ,a ,...,a . It is guaranteed that 1 ≤ a ≤ m for all i = 1,2,...,n. 1 2 n i](sysupc_final_2025_assets/A_p03_formula006.png)

## Output

![The only line contains n integers represent the beads in each row after the process.](sysupc_final_2025_assets/A_p03_formula007.png)

## Examples

### 样例输入

```text
4 6
4 2 6 3
```

### 样例输出

```text
2 3 4 6
```

### 样例输入

```text
7 10
3 6 6 4 3 1 5
```

### 样例输出

```text
1 3 3 4 5 6 6
```

![原题插图（PDF 第 3 页）](sysupc_final_2025_assets/A_p03_figure1.png)
