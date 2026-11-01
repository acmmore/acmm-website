# M. Road2

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 3 seconds

Time limit: s3tsaencdoanrdds

Memory limit: 1024 megabytes

![The highway system of Province G can be viewed as a weighted undirected graph with n nodes and m edges. Each edge represents a segment of the highway, and each node represents a city. Every highway](sysupc_final_2025_assets/M_p18_formula001.png)

edges. Each edge represents a segment of the highway, and each node represents a city.nEvery highwamy

![segment is bidirectional. The i-th highway segment connects the two cities u and v , with a length of w i i i kilometers.](sysupc_final_2025_assets/M_p18_formula002.png)

kilometers.

Miss Orange is currently commuting in Province G. Her car consumes one unit of fuel per kilometer
traveled. Any city has a gas station where the car’s fuel tank can be fully refilled, and the fuel consumption

MtriasvseleOdr.aAngney city has a gas station where the car’s fuel tank can be fully refilled, and the fuel consumption

![of Miss Orange’s car while driving within the city is negligible. Miss Orange has planned q trips. The -th trip starts from city and ends at city . She wants to know the minimum fuel tank capacity required](sysupc_final_2025_assets/M_p18_formula003.png)

![i-thMitrsisp sOtraarntsgefrom city x and ends at city y. She wants to know thMeismsinOimraunmgefuel tank capacqity required for this trip.](sysupc_final_2025_assets/M_p18_formula004.png)

ifor this trip.

![However, she has not decided on x and y but only knows that x and y lie within the interval  l ,r  . i i Specifically, for all , Miss Orange wants to know the sum of the minimum fuel tank](sysupc_final_2025_assets/M_p18_formula005.png)

![Specifically, for all l ≤ x < y ≤ x r , Misys Orange wants to knowx the syum of the minimum fuel lit,arni k i i capacities required to travel from to . Formally, let denote the fuel tank capacity required for](sysupc_final_2025_assets/M_p18_formula006.png)

![capacities required tloi ≤traxvel<froym≤ x rtio y. Formally, let f(x,y) denote the fuel tank capacity required for a trip starting at x and ending at y. You need to output (cid:80) f(x,y).](sysupc_final_2025_assets/M_p18_formula007.png)

![li≤x<y≤ri](sysupc_final_2025_assets/M_p18_formula008.png)

Since she needs to consider her next plan based on the current one, certain constraints will be imposed

on you in the problem.

## Input

![The first line contains two integers n(1 ≤ n ≤ 5 × 104) and m(1 ≤ m ≤ 2 × 105).](sysupc_final_2025_assets/M_p18_formula009.png)

![The next m lines each contain three integers u,v(1 ≤ u,v ≤ n,u ̸= v),w(1 ≤ w ≤ 109), representing an edge between and with a weight of .](sysupc_final_2025_assets/M_p18_formula010.png)

![edge betwmeen u and v with a weight of w.](sysupc_final_2025_assets/M_p18_formula011.png)

![Then, one line contains an integer q(1 ≤ q ≤ 5 × 104).](sysupc_final_2025_assets/M_p18_formula012.png)

![The next q lines each contain two integers l′,r′(0 ≤ l′,r′ ≤ 1018), representing the encrypted queries. Each time, you need to XOR the current and with the previous answer to obtain the real and .The data](sysupc_final_2025_assets/M_p18_formula013.png)

![time, youqneed to XOR the current l′ and l r′,rw(it0h≤thle,rpre≤vi1o0us )answer to obtain the real l and r.The data guarantees that the real and satisfy .](sysupc_final_2025_assets/M_p18_formula014.png)

![guarantees that the real l and r satilsfy 1 ≤ r l ≤ r ≤ n.](sysupc_final_2025_assets/M_p18_formula015.png)

## Output

![Output q lines, each containing one integer representing the answer.](sysupc_final_2025_assets/M_p18_formula016.png)

## Example

### 样例输入

```text
5 10
1 2 13
1 3 13
1 4 12
4 5 11
4 4 7
4 2 10
4 5 13
1 4 8
2 4 8
3 4 8
5
4 4
2 4
28 29
10 10
1 5
```

### 样例输出

```text
0
24
11
0
92
```
