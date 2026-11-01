# G. Breakingsky and warehouse

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 256 megabytes

This problem used to be another problem but under someone’s demand, it was replaced by this problem

now.

![Hitass_SY has been playing a boring game recently. In the game, you have K treasures and you need to place them in a rectangular treasure case with grids. Each treasure occupies a rectangular area](sysupc_warmup_2024_assets/G_p09_formula001.png)

![to place them in a rectangular treasure case with n × m grids. Each treasure oKccupies a rectangular area of grids and has its value . The game’s goal is to place some treasure in the treasure case and](sysupc_warmup_2024_assets/G_p09_formula002.png)

![of x × y grids and has its value v . The game’s gno×almis to place some treasure in the treasure case and i i i maximize the sum of the treasures’ value in the treasure case. You may place a treasure in the](sysupc_warmup_2024_assets/G_p09_formula003.png)

maxxiim×izyei the sum of the treasurevsi’ value in the treasure case. You may NOT place a treasure in the
treasure case after rotating it at any non-zero angle. Also, two treasures may share a common grid.

treasure case after rotating it at any non-zero angle. Also, two treasures maNy N OT OT share a common grid.

Now Hitass\_SY wants to know what is the maximum value he can get.

## Input

![The first line contains three integers, n, m, K. (1 ≤ n × m ≤ 100000, K ≤ 100000)](sysupc_warmup_2024_assets/G_p09_formula004.png)

![Then follows K lines, each line contains three integers x , y , v . (1 ≤ x ,y ≤ 2, x +y > 2, 0 ≤ v ≤ 1000) i i i i i i i i](sysupc_warmup_2024_assets/G_p09_formula005.png)

## Output

One non-negative integer, representing the answer.

## Example

### 样例输入

```text
2 3 3
2 2 10
1 2 2
2 1 3
```

### 样例输出

```text
13
```

![原题插图（PDF 第 9 页）](sysupc_warmup_2024_assets/G_p09_figure1.png)
