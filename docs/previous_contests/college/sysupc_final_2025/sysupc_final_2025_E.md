# E. Ecosystem

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 256 megabytes

Dr.Orange is conducting research in animal psychology, and one of the studies involves inferring the
number of each animal in the ecosystem based on their dietary habits. It is known that there are types

![Dnru.mObrearnogfeeach animal in the ecosystem based on their dietary habits. It is known that there are n types of animals in the ecosystem, and the -th type of animal consumes portions of bait per time. ’s](sysupc_final_2025_assets/E_p09_formula001.png)

![of animals in the ecosystem, and the i-th type of animal consumes a portions of bait per time. Dr.Or n ange’s i experiment was conducted over days, and on the -th day, portions of bait were deployed, with all](sysupc_final_2025_assets/E_p09_formula002.png)

![experiment was conducted over m diays, and on the i-th day, t apiortions of bait were deployDerd.,Owraitnhgeall i bait being consumed each day. For each of the days, different animals take turns to consume bait. You](sysupc_final_2025_assets/E_p09_formula003.png)

![bait being consumed each day. Fomr each of the m daysi, differenttianimals take turns to consume bait. You need to answer how many different eating sequences. Two sequences are the same only if the animals at](sysupc_final_2025_assets/E_p09_formula004.png)

need to answer how many different eating sequmences. Two sequences are the same only if the animals at

each position in the sequence are of the same species. Since this result can be very large, please provide

![the answer modulo 109 + 7.](sysupc_final_2025_assets/E_p09_formula005.png)

## Input

![The first line contains two integers n,m(1 ≤ n,m ≤ 100).](sysupc_final_2025_assets/E_p09_formula006.png)

![The second line contains n integers, where the i-th integer represents a (1 ≤ a ≤ 100). i i](sysupc_final_2025_assets/E_p09_formula007.png)

![The third line contains m integers, representing the amount of bait deployed on the i-th day, .](sysupc_final_2025_assets/E_p09_formula008.png)

![t (1 ≤ t ≤ 109). i i](sysupc_final_2025_assets/E_p09_formula009.png)

## Output

![Output one line with m integers, where the i-th integer represents the answer for the i-th day modulo .](sysupc_final_2025_assets/E_p09_formula010.png)

![109 + 7.](sysupc_final_2025_assets/E_p09_formula011.png)

## Examples

### 样例输入

```text
5 3
5 4 4 2 3
5 8 3
```

### 样例输出

```text
3
16
1
```

### 样例输入

```text
10 5
9 1 6 5 10 4 9 2 7 6
64 92 43 30 2
```

### 样例输出

```text
566507809
840913760
608266829
85862862
2
```

## Note

![For the first day of the first sample, there are three possible eating sequences:  1 ,  4,5 , and  5,4 . The numbers in the sequences represent the types of animals.](sysupc_final_2025_assets/E_p09_formula012.png)

numbers in the sequences represent the types of animals.
