# L. Larger or Smaller

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 256 megabytes

In his recent work on permutation properties, Dr.Z investigates the relationship between element values
and their indices. A key focus is the cardinality of the set of indices where (called

![and their indices. A key focus is the cardinaDlirty.Zof the set of indices i where p > i (called larger i](sysupc_final_2025_assets/L_p17_formula001.png)

![position) and where p < i (called smaller position). To formalize this, he defines f(n,x,y) i](sysupc_final_2025_assets/L_p17_formula002.png)

![as the number of permutations of n elements containing exactly x larger positions and y](sysupc_final_2025_assets/L_p17_formula003.png)

smaller positions. Dr.Z now aims to characterize this function completely by determining

![the values of f(n,x,y) across all valid positive integers x and y after modulo m. Could you](sysupc_final_2025_assets/L_p17_formula004.png)

help him solve this problem efficiently?

## Input

![The only line contains two integers n,m(2 ≤ n ≤ 2000,2 ≤ m ≤ 109 + 7).](sysupc_final_2025_assets/L_p17_formula005.png)

## Output

![There are n−1 rows in total. The i-th row contains n−i integers. The j-th integer represents](sysupc_final_2025_assets/L_p17_formula006.png)

![the result of f(n,i,j) modulo m.](sysupc_final_2025_assets/L_p17_formula007.png)

## Example

### 样例输入

```text
5 998244353
```

### 样例输出

```text
10 10 5 1
10 35 21
5 21
1
```

## Note

![The five permutations of x = 1,y = 3 are  1,5,2,3,4 , 4,1,2,3,5 , 5,1,2,4,3 , 5,1,3,2,4 , and](sysupc_final_2025_assets/L_p17_formula008.png)

![ 5,2,1,3,4 .](sysupc_final_2025_assets/L_p17_formula009.png)
