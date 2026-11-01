# M. Make SYSU Great Again 3

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 512 megabytes

As you all know, you are participating in the SYSUCPC (SYSU Constructive Problem Contest) finals.

Undoubtedly, the Constructive Kingdom of Sun Yat-sen University is eager for you to tackle some related

problems.

![Maple has a set of n integers: 1,2,...,n (where n ≥ 4). She wants to arrange these numbers in a circle. There are selections to pick three adjacent numbers from the circle, and she wants to find an arrangement](sysupc_final_2024_assets/M_p19_formula001.png)

![There are n selectionns to pick th1r,e2e,a.d..ja,cnent numbner≥s fr4om the circle, and she wants to find an arrangement such that at least of the selections satisfy the condition where the largest number equals the sum](sysupc_final_2024_assets/M_p19_formula002.png)

![such that nat least (cid:100)n/2(cid:101) of the selections satisfy the condition where the largest number equals the sum of the other two numbers.](sysupc_final_2024_assets/M_p19_formula003.png)

![of the other two nu(cid:100)mn/b2e(cid:101)rs.](sysupc_final_2024_assets/M_p19_formula004.png)

As a friend of Maple, you are asked to either construct such an arrangement or determine that it does

not exist.

## Input

![The first line contains one integer T (1 ≤ T ≤ 100) — the number of test cases.](sysupc_final_2024_assets/M_p19_formula005.png)

![Each test case contains one integer n (4 ≤ n ≤ 2 × 105).](sysupc_final_2024_assets/M_p19_formula006.png)

![It is guaranteed that the sum of n over all test cases does not exceed 5 × 105.](sysupc_final_2024_assets/M_p19_formula007.png)

## Output

For each test case:

If it’s impossible to construct the arrangement, output a single line containing No.

![Otherwise, output Yes on the first line, then output n numbers on the second line, denoting your construction. If there are multiple answers, print any of them.](sysupc_final_2024_assets/M_p19_formula008.png)

construction. If therYeeasre multiple answers, print any of tnhem.

You can output Yes and No in any case (for example, strings yEs, yes, and YES will be recognized as a
positive response).

positive responseY).e

## Example

### 样例输入

```text
2
4
5
```

### 样例输出

```text
Yes
4 1 3 2
Yes
3 2 5 4 1
```

## Note

![In the second test case, there are 4 valid selections in the arrangement: (3,2,5), (5,4,1), (4,1,3), and , so this arrangement satisfies the requirement of at least valid selections.](sysupc_final_2024_assets/M_p19_formula009.png)

![(1,3,2), so this arrangement satisfie4s the requirement of at least (cid:100)n/2(cid:101) = 3 (3v,a2l,id5)se(le5c,t4i,o1n)s.](sysupc_final_2024_assets/M_p19_formula010.png)

![原题插图（PDF 第 19 页）](sysupc_final_2024_assets/M_p19_figure1.png)
