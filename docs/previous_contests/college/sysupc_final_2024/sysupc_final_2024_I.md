# I. Isla Loves Christmas

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1.5 seconds

Time limit: s1.t5ansedcaornddso

Memory limit: 512 megabytes

![Christmas is coming! Isla bought n colorful Christmas lights online and strung them up with a wire. There are different colors of lights, each represented by a distinct integer between and . The color of the](sysupc_final_2024_assets/I_p15_formula001.png)

![are k different colors of lights, eanch represented by a distinct integer between 1 and k. The color of the -th light from the left is denoted as .](sysupc_final_2024_assets/I_p15_formula002.png)

![i-thklight from the left is denoted as a . i](sysupc_final_2024_assets/I_p15_formula003.png)

![Isla plans to decorate the lights with m actions. The i-th action will focus on a continuous section of lights, specifically between the -th and the -th light. The action is defined as follows:](sysupc_final_2024_assets/I_p15_formula004.png)

![lights, specifically between the l -th andmthe r -th light.iThe action is defined as follows: i i](sysupc_final_2024_assets/I_p15_formula005.png)

![For every pair of positions (p,q) such that l ≤ p ≤ q ≤ r and a = a , a note with a non-negative integer i i p q value will be placed on the -th light if and are satisfied.](sysupc_final_2024_assets/I_p15_formula006.png)

![value v will be placed on t(hpe,q x )-th light if l p i ≤ ≤ p x ≤ ≤ q q ≤anrdi a = a a p =araeq satisfied. i x p](sysupc_final_2024_assets/I_p15_formula007.png)

After the actions, Isla wants to know the sum of the values on the notes for each light. As the result can

![be huge, she only cares about the sum modulo 109 + 7.](sysupc_final_2024_assets/I_p15_formula008.png)

## Input

![The first line contains two integers n and k (1 ≤ k ≤ n ≤ 105) — the number of lights and colors.](sysupc_final_2024_assets/I_p15_formula009.png)

![The second line contains n integers a ,a ,...,a (1 ≤ a ≤ k) — the color of the lights. 1 2 n i](sysupc_final_2024_assets/I_p15_formula010.png)

![The third line contains one integer m (1 ≤ m ≤ 105) — the number of actions.](sysupc_final_2024_assets/I_p15_formula011.png)

![For the next m lines, the i-th one contains three integers l , r , and v (1 ≤ l ≤ r ≤ n, 1 ≤ v ≤ 105) — i i i i i the information of the -th action.](sysupc_final_2024_assets/I_p15_formula012.png)

![the informatiomn of the i-thi action.](sysupc_final_2024_assets/I_p15_formula013.png)

## Output

![Output one line containing n integers. The i-th integer should equal the sum of the values on the notes for the -th light modulo .](sysupc_final_2024_assets/I_p15_formula014.png)

![for the i-th light modulo 109n + 7.](sysupc_final_2024_assets/I_p15_formula015.png)

## Example

### 样例输入

```text
10 3
3 3 1 1 2 1 1 2 2 2
3
1 9 1
3 7 10
5 10 100
```

### 样例输出

```text
2 2 44 66 413 266 244 604 603 400
```
