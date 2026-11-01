# D. Depths of Cities

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 512 megabytes

![There are n cities in a country, numbered from 1 to n. Initially, there are n − 1 bidirectional roads, each connecting two cities, ensuring that all cities can reach each other. In other words, the cities and roads](sysupc_final_2024_assets/D_p08_formula001.png)

connectingntwo cities, ensuring that all cities ca1n reanch each other. In othner−w1ords, the cities and roads

form a tree in graph theory.

![As the manager of this city, you are planning to construct a subway connecting two cities, u and v (even if the two cities are already connected directly by a road). This subway will form a cycle with some of](sysupc_final_2024_assets/D_p08_formula002.png)

if the two cities are already connected directly by a road). This subway will form a cycleuwith svome of

the existing roads, and the cities on the cycle are called key cities. After that, the depth of a city is
defined as the minimum distance between the city and any key city. Here, the distance between two cities

defined as the minimum distance between the city and any kkeeyy cciittyi.esHere, the distance between two cities

is determined by the number of roads needed to travel from one to the other. The depth of key cities is

defined as zero.

Two plans to construct a subway in the first example. The key cities are marked by dashed stroke, and the depth

of each city is given at the top-left of the circle.

![There are n(n−1) plans for constructing the subway. For each city, what is the total depth across all plans? 2](sysupc_final_2024_assets/D_p08_formula003.png)

## Input

![The first line contains one integer n (2 ≤ n ≤ 2 × 105) — the number of cities.](sysupc_final_2024_assets/D_p08_formula004.png)

![Each of the following n−1 lines contains two integers u and v (1 ≤ u,v ≤ n, u ≠ v) — a road connecting city and . It is guaranteed that cities can reach each other by roads.](sysupc_final_2024_assets/D_p08_formula005.png)

![city u and v. It is guanra−nt1eed that cities can reach eachu othervby1 ≤roaud,sv.](sysupc_final_2024_assets/D_p08_formula006.png)

## Output

![Output n lines. The i-th line should contain one integer — the total depth of city i.](sysupc_final_2024_assets/D_p08_formula007.png)

## Examples

### 样例输入

```text
5
1 2
1 3
2 4
2 5
```

### 样例输出

```text
3
1
9
7
7
```

### 样例输入

```text
7
1 2
1 3
1 4
2 5
2 6
3 7
```

### 样例输出

```text
4
7
13
19
22
22
28
```

![原题插图（PDF 第 8 页）](sysupc_final_2024_assets/D_p08_figure1.png)
