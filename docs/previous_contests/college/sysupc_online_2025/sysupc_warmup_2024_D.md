# D. Breakingsky and star rail

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 2 seconds

Time limit: s2tsaencdoanrdds

Memory limit: 256 megabytes

Nekopass, together with his friends, takes Astral Express across the Milky Way, along the journey of some

Aeon, towarding the end of the journey.

![The galaxy has n planets, and Akivili has left m rails among the n planets. Each rail starts at some planet and ends at some planet and has its own length , which means that you can travel from planet to](sysupc_warmup_2024_assets/D_p06_formula001.png)

![u and ends at sonme planet v and has its own lmength w, which menans that you can travel from planet u to planet quickly by using this rail. Notice you travel from planet to planet by using this rail.](sysupc_warmup_2024_assets/D_p06_formula002.png)

![uplanet v quickly by using thvis rail. Notice you canno w t travel from planet v to planet u by using this urail. However, using rails is not free, because you should pay Pom-Pom, the conductor, some Stellar Jade for](sysupc_warmup_2024_assets/D_p06_formula003.png)

Howevevr, using rails is not free, because you shcoaunlndopt ay Pom-Pom, the covnductor, soume Stellar Jade for

using a rail, and as the number of rails you have used grows, the cost also grows. Specifically, if you use

![k rails in the order of p , p , ... p , then you should pay (cid:80)k wi Stellar Jade to Pom-Pom. 1 2 k i=1 pi](sysupc_warmup_2024_assets/D_p06_formula004.png)

Nekopass is planning to spend as much as possible Stellar Jade for gacha, so he should save money when

![traveling. Now Nekopass wants to know with K Stellar Jade, whether he can travel from planet S to planet . If he can’t afford the travel, output . Otherwise, output the maximum Stellar Jade he can](sysupc_warmup_2024_assets/D_p06_formula005.png)

![planet T. If he can’t afford the travel, outputK 0. Otherwise, output the maximum Stellar Jade heScan reserve after traveling from to .](sysupc_warmup_2024_assets/D_p06_formula006.png)

![reserveTafter traveling from S to T.](sysupc_warmup_2024_assets/D_p06_formula007.png)

## Input

![The first line contains five positive integers, n, m, K, S, T. (S,T ≤ n ≤ 50000, m ≤ 200000,K < 230)](sysupc_warmup_2024_assets/D_p06_formula008.png)

![Then follows m lines. The i-th line contain three integers, u , v and w , (1 ≤ u ,v ≤ n, i i i i i 30)indicating that the -th rail connect planet , with length . It is guaranteed that](sysupc_warmup_2024_assets/D_p06_formula009.png)

![1 < w ≤ 230)imndicating that ithe i-th rail connect planet u , v wuiithvliength w wi. It1is ≤guaurai,nvtieed≤thant i i i i there are no self-loops or multiple edges.](sysupc_warmup_2024_assets/D_p06_formula010.png)

1the<rewaire≤no2 self-loops or multiple eidges.

## Output

One integer, denoting the answer.

## Example

### 样例输入

```text
4 4 64 1 4
1 2 4
2 4 3
1 3 2
3 4 4
```

### 样例输出

```text
51
```

## Note

In the example,

![The lowest cost is 41 + 32 = 13 by visiting planets 1, 2, 4 in order.](sysupc_warmup_2024_assets/D_p06_formula011.png)

![So Nekopass can reserve at most 64 − 13 = 51 Stellar Jade.](sysupc_warmup_2024_assets/D_p06_formula012.png)

![原题插图（PDF 第 6 页）](sysupc_warmup_2024_assets/D_p06_figure1.png)
