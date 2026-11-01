# G. General Checksum Calculation

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 2 seconds

Time limit: s2tsaencdoanrdds

Memory limit: 512 megabytes

After several years of hard work, a group of students from Sun Yat-sen University has successfully

developed their first handcrafted CPU, named SYS-Unit. The initial task for SYS-Unit is “General
Checksum Calculation”.

Checksum Calculation”.

![There are n integers a ,a ,··· ,a stored in memory, and SYS-Unit is required to compute k checksums 1 2 n based on these integers. For the -th checksum, three arguments are provided: , , and . The -th](sysupc_final_2024_assets/G_p12_formula001.png)

![based on tnhese integear1s,.aF2,o·r··th,ean i-th checksum, three arguments are provided: d , l , and k r . The i-th i i i checksum is formulated as:](sysupc_final_2024_assets/G_p12_formula002.png)

checksum is formulated as:

![⊕ri (a − d ) p=li p i](sysupc_final_2024_assets/G_p12_formula003.png)

![where ⊕ denotes the bitwise XOR operator. To simplify the process, all requests ensure that for every index within the range , the condition holds.](sysupc_final_2024_assets/G_p12_formula004.png)

![index p ⊕within the range  l ,r  , the condition d ≤ a holds. i i i p](sysupc_final_2024_assets/G_p12_formula005.png)

You are asked to pre-compute all checksums in order to verify the correctness of SYS-Unit.

## Input

![The first line contains two integers n and k (1 ≤ n,k ≤ 105).](sysupc_final_2024_assets/G_p12_formula006.png)

![The second line contains n integers a ,a ,...,a (0 ≤ a < 217). 1 2 n i](sysupc_final_2024_assets/G_p12_formula007.png)

![For the next k lines, the i-th one contains three integers d , l , and r (0 ≤ d < 217, 1 ≤ l ≤ r ≤ n). It i i i i i i is guaranteed that for all , holds.](sysupc_final_2024_assets/G_p12_formula008.png)

![is guaranteedkthat for alli l ≤ p ≤ r , d ≤ a holds. i i i p](sysupc_final_2024_assets/G_p12_formula009.png)

## Output

![Output k lines. The i-th line should contain one integer — the i-th checksum.](sysupc_final_2024_assets/G_p12_formula010.png)

## Example

### 样例输入

```text
7 4
11 45 14 19 19 8 10
1 1 4
5 1 4
1 4 7
14 2 4
```

### 样例输出

```text
57
41
14
26
```

## Note

In the example:

![• The first checksum is 10 ⊕ 44 ⊕ 13 ⊕ 18 = 57;](sysupc_final_2024_assets/G_p12_formula011.png)

![• The second checksum is 6 ⊕ 40 ⊕ 9 ⊕ 14 = 41;](sysupc_final_2024_assets/G_p12_formula012.png)

![• The third checksum is 18 ⊕ 18 ⊕ 7 ⊕ 9 = 14;](sysupc_final_2024_assets/G_p12_formula013.png)

![• The fourth checksum is 31 ⊕ 0 ⊕ 5 = 26.](sysupc_final_2024_assets/G_p12_formula014.png)
