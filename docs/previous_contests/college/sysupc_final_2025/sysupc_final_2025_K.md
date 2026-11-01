# K. Divisor Transformation

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 3 seconds

Time limit: s3tsaencdoanrdds

Memory limit: 256 megabytes

![Dr.Z is studying a permutation p of length n (i.e., p contains each integer from 1 to n exactly once). He performs experiments, each defined by parameters .](sysupc_final_2025_assets/K_p16_formula001.png)

![pDrer.fZorms q experiments, each depfined by parnametersp (l,r,x).](sysupc_final_2025_assets/K_p16_formula002.png)

![In each experiment, he processes the subarray p ,p ,...,p sequentially. Starting with value x, for each l l+1 r element in the subarray:](sysupc_final_2025_assets/K_p16_formula003.png)

![element p in the subarray: i](sysupc_final_2025_assets/K_p16_formula004.png)

![• If x | p (x divides p ), then x becomes p /x i i i](sysupc_final_2025_assets/K_p16_formula005.png)

![• Else if p | x (p divides x), then x becomes x/p i i i](sysupc_final_2025_assets/K_p16_formula006.png)

![• Otherwise, x remains unchanged](sysupc_final_2025_assets/K_p16_formula007.png)

Dr.Z needs your help to compute:

![1. The final value of x after processing each experiment](sysupc_final_2025_assets/K_p16_formula008.png)

![2. The total number of times either x | p or p | x was satisfied during the process i i](sysupc_final_2025_assets/K_p16_formula009.png)

## Input

![The first line contains two integers n,q (1 ≤ n,q ≤ 500000)](sysupc_final_2025_assets/K_p16_formula010.png)

![The second line contains n distinct integers p ,p ,...,p (∀1 ≤ i ≤ n,1 ≤ p ≤ n) 1 2 n i](sysupc_final_2025_assets/K_p16_formula011.png)

![The next q lines each contain 3 integers l,r,x (1 ≤ l ≤ r ≤ n,1 ≤ x ≤ n)](sysupc_final_2025_assets/K_p16_formula012.png)

## Output

For each experiment, output two integers:

![• The final value of x](sysupc_final_2025_assets/K_p16_formula013.png)

![• The total count of cases where either x | p or p | x i i](sysupc_final_2025_assets/K_p16_formula014.png)

## Example

### 样例输入

```text
6 6
1 4 3 2 5 6
1 6 4
3 4 2
3 4 4
5 5 1
2 5 3
6 6 4
```

### 样例输出

```text
2 4
1 1
2 1
5 1
2 2
4 0
```
