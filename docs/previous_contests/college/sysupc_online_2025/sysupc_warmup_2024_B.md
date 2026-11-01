# B. Breakingsky and graph

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 256 megabytes

![In Graph Theory we have learned how to calculate the single-source shortest path in a graph with n vertices and edges, but Pegasus thinks that all the shortest path algorithms running on limited graph](sysupc_warmup_2024_assets/B_p03_formula001.png)

![vertices and m edges, but Pegasus thinks that all the shortest path algorithms running on limited grapnh are useless, and “completely inextensible”.](sysupc_warmup_2024_assets/B_p03_formula002.png)

are useless, amnd “completely inextensible”.

What you said is right, but now I’m creating an Open World Game. The game happens in a fantasy world

called “Sun Yeah Sand”, where selected people are granted “Sun’s Eye ”, and will guide the power of Sun.

In the end of the journey, you will finally discover the ultimate truth of “Sun Yeah Sand”......

“Sun Yeah Sand” is an infinite open world with infinite city. We can label the city in this world 0, 1, 2, 3,

![... , and for each city p, there are three directed roads starting from p:](sysupc_warmup_2024_assets/B_p03_formula003.png)

![• A directed road from p to p + 1 with length 1.](sysupc_warmup_2024_assets/B_p03_formula004.png)

![• A directed road from p to p ∗ 3 with length 1.](sysupc_warmup_2024_assets/B_p03_formula005.png)

![• A directed road from p to p ∗ 4 with length 1.](sysupc_warmup_2024_assets/B_p03_formula006.png)

![Now you are a traveler and decide to take T journeys. In the i-th journey you will start at city 0 and end at city , and you need to calculate the minimum distance you have to travel.](sysupc_warmup_2024_assets/B_p03_formula007.png)

![at city x , and you need to calculate the mTinimum distance yiou have to travel. i](sysupc_warmup_2024_assets/B_p03_formula008.png)

## Input

![The first line contains one integer T (T ≤ 10).](sysupc_warmup_2024_assets/B_p03_formula009.png)

![Then follows T lines, the i-th line contains one integer x (0 ≤ x ≤ 109). i i](sysupc_warmup_2024_assets/B_p03_formula010.png)

## Output

![T lines, the i-th line representing the answer of the i-th journey.](sysupc_warmup_2024_assets/B_p03_formula011.png)

## Example

### 样例输入

```text
7
0
1
2
3
4
5
6
```

### 样例输出

```text
0
1
2
2
2
3
3
```
