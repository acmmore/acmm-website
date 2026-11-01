# B. Bruhcaea Simulator

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 3 seconds

Time limit: s3tsaencdoanrdds

Memory limit: 512 megabytes

As I always say,

if you don’t like it, don’t play.

— Guy, ©lowiro

A programmer named Baker is developing a simulator for an innovative 2D rhythm game called Bruhcaea.
There are lines displayed during the gameplay of , and any endpoint on the game chart can

![There are n lines displayed during the gameplay of Bruhcaea, and any endpoint on the gamBe rcuhahrctaceaan be represented by an integral point in the Cartesian coordinate system. Here, represents time,](sysupc_final_2024_assets/B_p04_formula001.png)

![be represennted by an integral point (x,y) in the CaBrtreushiacnaecaoordinate system. Here, x represents time, and represents the line this position is on, where must be satisfied for all endpoints.](sysupc_final_2024_assets/B_p04_formula002.png)

![and y represents the line this position(xi,syo)n, where 1 ≤ y ≤ n must be satisfied for all exndpoints.](sysupc_final_2024_assets/B_p04_formula003.png)

![There are two arcs in a chart of Bruhcaea, each represented as a broken line connecting m endpoints. The endpoints of the first arc are specified as in order, while the endpoints](sysupc_final_2024_assets/B_p04_formula004.png)

![The endpoints of the first arc are sBpreucihficedaeaas (1,p ),(3,p ),...,(2m−1,p ) in order, while tmhe endpoints 1 2 m of the second arc are specified as in order.](sysupc_final_2024_assets/B_p04_formula005.png)

![of the second arc are specified as (2,q ),(4,q ( ) 1 , , . p . 1 . ) , , ( ( 2 3 m ,p , 2 q ),. ) .i.n,(o2rmde−r.1 1 2 m](sysupc_final_2024_assets/B_p04_formula006.png)

![The image above shows three different cases of the arcs where n = 5 and m = 3. Only the first of them satisfies the following constraint.](sysupc_final_2024_assets/B_p04_formula007.png)

the following constrnai=nt5.

To maintain gameplay quality, the two arcs cannot intersect or touch at any position (not just at the
endpoints, as shown in the third case above). Furthermore, the more movements the arcs perform, the

endpoints, as shown in the third case above). Furthermore, the more amtoavenmyepntossitthieonarcs perform, the

more playful the chart becomes. Baker defines the playfulness of the two arcs as

![m−1 (cid:88) |p − p | + |q − q | i i+1 i i+1](sysupc_final_2024_assets/B_p04_formula008.png)

![i=1](sysupc_final_2024_assets/B_p04_formula009.png)

Baker is curious to know the sum of playfulness among all different configurations of arcs (i.e., distinct

![sets of p and q ) that satisfy the constraint. As the result can be huge, Baker only requires the 1...m 1...m answer modulo 9 .](sysupc_final_2024_assets/B_p04_formula010.png)

![answer pm1.o..dmulo 109q1 + ...m 7.](sysupc_final_2024_assets/B_p04_formula011.png)

## Input

![The first line contains two integers n and m (2 ≤ n,m ≤ 250).](sysupc_final_2024_assets/B_p04_formula012.png)

## Output

![Output a single integer in a line — the answer modulo 109 + 7.](sysupc_final_2024_assets/B_p04_formula013.png)

![原题插图（PDF 第 4 页）](sysupc_final_2024_assets/B_p04_figure1.png)

## Examples

### 样例输入

```text
2 2
```

### 样例输出

```text
8
```

### 样例输入

```text
5 3
```

### 样例输出

```text
19716
```

### 样例输入

```text
114 191
```

### 样例输出

```text
24045753
```

## Note

In the first example, there are 8 different configurations of arcs, as shown below.

Note: we rotated the coordinate system to display all the solutions better.

![原题插图（PDF 第 5 页）](sysupc_final_2024_assets/B_p05_figure1.png)
