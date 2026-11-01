# I. Sum

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 2 seconds

Time limit: s2tsaencdoanrdds

Memory limit: 256 megabytes

![Student A is studying numeral systems. For a natural number n, Student A wants to know the smallest digit sum among the representations of in bases from to . For example, the natural number has](sysupc_final_2025_assets/I_p14_formula001.png)

![dStiguidtesnutmAamong the representations of n in bases from 2 to R n. FSotruedxeanmtpAle, the natural number 6 has a representation of in base , with a digit sum of , and a representation of in base , also](sysupc_final_2025_assets/I_p14_formula002.png)

![a representation of (110) in base 2, witnh a digit sum of2 2, anRd a representation of (20) in base 3 6, also 2 3 with a digit sum of .](sysupc_final_2025_assets/I_p14_formula003.png)

with a digit sum of ( 2 1.1

## Input

There are multiple test cases.

![The first line of input contains a positive integer T(1 ≤ T ≤ 100), indicating the number of test cases.](sysupc_final_2025_assets/I_p14_formula004.png)

![The next T lines each contain two positive integers n,R(2 ≤ n,R ≤ 1012).](sysupc_final_2025_assets/I_p14_formula005.png)

## Output

![Output T lines, each containing an integer, representing the smallest digit sum.](sysupc_final_2025_assets/I_p14_formula006.png)

## Example

### 样例输入

```text
4
6 3
7 4
30 5
999967000273 999983
```

### 样例输出

```text
2
3
2
3
```

## Note

For 6, the digit sum is minimized in base 2 or base 3. For 7, the digit sum is minimized in base 2 or base
. For , the digit sum is minimized in base .

3. Fo6r 30, the digit sum is minimized in b2ase 5.
