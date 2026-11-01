# J. 高速公路

输入文件： standard input
出文件：

输出文件： s s t t a a n n d d a a r r d d i o n u p t u p t ut
时间限制： 3 seconds

时间限制： s3tsaencdoanrdds

空间限制： 512 megabytes

![G 省的高速公路系统可以看成包含 n 个点和 m 条边的带权无向图，每条边代表一段高速公路，而每个 节点代表一个城市。 路都可以双向通行， 路 接 两个城市，且长度为 。](sysuNovice_onsite_2025_assets/J_p14_formula001.png)

![节点代表一个城市。每段公路都可以n双向通行m，第 i 段公路连接 u ,v 这两个城市，且长度为 w 公里。 i i i](sysuNovice_onsite_2025_assets/J_p14_formula002.png)

现在小 Z 正在 G 省通勤，小 Z 的车每行驶一公里消耗一单位的油。任意一个城市中存在加油站可以把

![车的油加满，忽略小 Z 在城市中行驶的油耗。现在小 Z 计划了 q 次出行，第 i 次出行从城市 x 开始， i 如果他想要能到达至少 个不同的城市（包括 ），请问他的车的油箱的容量至少为多少？](sysuNovice_onsite_2025_assets/J_p14_formula003.png)

![如果他想要能到达至少 c 个不同的城市（包括 x ），请问他的车q的油箱的容量i至少为多少？ i i](sysuNovice_onsite_2025_assets/J_p14_formula004.png)

## Input

![输入的第一行包含两个整数 n,m (1 ≤ n ≤ 105,1 ≤ m ≤ 2 × 105)，分别代表城市的数量和高速公路的数 。](sysuNovice_onsite_2025_assets/J_p14_formula005.png)

量。

![接下来 m 行，第 i 行包含三个整数 u ,v ,w (1 ≤ u ,v ≤ n,u ≠ v ,1 ≤ w ≤ 2 × 106)，代表第 i 条高 i i i i i i i i 速公路连接 两个城市，长度为 公里。可能会有多条高速公路连接一对相同的城市。](sysuNovice_onsite_2025_assets/J_p14_formula006.png)

![速公路连m接 u ,v 两i 个城市，长度为 w ui,v公i,里wi。(1可≤能u会i,有vi多≤条n,高ui速≠公vi路,1连≤接w一i ≤对2相×同1的0 )城市。 i i i](sysuNovice_onsite_2025_assets/J_p14_formula007.png)

![接下来一行包含一个整数 q (1 ≤ q ≤ 106)，代表出行次数。](sysuNovice_onsite_2025_assets/J_p14_formula008.png)

![接下来 q 行，第 i 行包含两个整数 x ,c (1 ≤ x ≤ n,2 ≤ c ≤ n)，表示一次询问。 i i i i](sysuNovice_onsite_2025_assets/J_p14_formula009.png)

## Output

![输出 q 行，每行包含一个整数，代表最小油箱容量。](sysuNovice_onsite_2025_assets/J_p14_formula010.png)

## Example

### 样例输入

```text
5 7
3 5 13
1 2 8
1 4 6
5 1 9
1 2 8
3 4 2
5 1 15
5
3 2
5 2
4 3
2 4
2 5
```

### 样例输出

```text
2
9
6
8
9
```

## Note

本题输入数据量较大，请使用较快的输入方式。
