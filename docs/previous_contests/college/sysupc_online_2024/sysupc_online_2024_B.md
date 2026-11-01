# B. WAduck and Cuteness Contest

Input file: standard input

Output file: standard output

Time limit: 1 second

Memory limit: 256 megabytes

WAduck is a cute duck. One day, he registers for a cuteness contest.

![There are 2n ducks in the contest. Each of them has a cuteness value, which is an integer between 0 and](sysupc_online_2024_assets/B_p02_formula001.png)

![2n − 1. Additionally, the cuteness values are pairwise different. WAduck’s cuteness value is k.](sysupc_online_2024_assets/B_p02_formula002.png)

![The contest is played in a knockout format. The contest will run for n rounds. In each round, all ducks](sysupc_online_2024_assets/B_p02_formula003.png)

are paired based on the bracket. For each pair, the duck with larger cuteness wins and moves to the next

round, and the other loses and is eliminated from the contest.

An example of a cuteness contest.

![It’s obvious that the duck with cuteness 2n − 1 will be the winner. However, the bracket for the contest](sysupc_online_2024_assets/B_p02_formula004.png)

is unknown before the contest, so the ducks don’t know their opponents in each round. WAduck wonders

how many times he can win at most.

## Input

![The only line contains two integers n and k. It’s guaranteed that 1 ≤ n ≤ 30, 0 ≤ k ≤ 2n − 1.](sysupc_online_2024_assets/B_p02_formula005.png)

## Output

Output a single integer, denoting your answer.

## Examples

### 样例输入

```text
3 3
```

### 样例输出

```text
2
```

### 样例输入

```text
3 7
```

### 样例输出

```text
3
```

## Note

![A possible situation when n = 3, which matches the examples:](sysupc_online_2024_assets/B_p02_formula006.png)

![原题插图（PDF 第 2 页）](sysupc_online_2024_assets/B_p02_figure1.png)

![原题插图（PDF 第 3 页）](sysupc_online_2024_assets/B_p03_figure1.png)
