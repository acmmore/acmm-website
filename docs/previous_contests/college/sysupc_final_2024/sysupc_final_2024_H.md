# H. Hoppers and Doors

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 2 seconds

Time limit: s2tsaencdoanrdds

Memory limit: 512 megabytes

K was trapped in a Minecraft prison created by a YouTuber named Omz, who had a penchant for using

hoppers in his prisons. The hopper in this problem can be viewed as a container that can store any
.

number of items.

Fortunately, he soon realized that barrier blocks did not surround the prison, allowing him to use F5 to
see the entire area. The prison could be described as a maze consisting of nodes, starting with

![see the entire area. The prison could be described as a maze consisting of n + m + 1 nodes, startingFw5ith K at node . There were hoppers, each positioned at a unique node between 2 and , and doors,](sysupc_final_2024_assets/H_p13_formula001.png)

![K at node 1. There were n hoppers, each positioned at a unique node betwnee+nm2 +an1d n+1, and m doors, each located at a unique node between and . Several bidirectional paths connected two](sysupc_final_2024_assets/H_p13_formula002.png)

![each locate1d at a uniquennode between n + 2 and n + m + 1. Several bidirectional pnat+hs1connemcted two nodes, ensuring that . However, K could only](sysupc_final_2024_assets/H_p13_formula003.png)

nodes, ensuring that all nodes can be n re + a 2 ched a n ft + er m a + ll 1 doors are opened. However, K could only
enter a node with a door if he had found a way to open it. The final goal for K is to .

![enter a node with a daololrnifohdeeshacdanfoubnedraeawcahyetdo aofpteenriat.llTdhoeofirnsalagreoaol pfoernKedis to open all m doors.](sysupc_final_2024_assets/H_p13_formula004.png)

The image above shows the prison specified by the second example.

![Based on his intuition, K suspects that there are m keys hidden in the hoppers, with each key corresponding to a unique door. He wonders: if each key is placed in a random hopper, how many of the possible](sysupc_final_2024_assets/H_p13_formula005.png)

![to a unique door. He wonders: if each key is plmaced in a random hopper, how many of the nm possible arrangements of keys in hoppers would allow K to collect all the keys and achieve his goal?](sysupc_final_2024_assets/H_p13_formula006.png)

arrangements of keys in hoppers would allow K to collect all the keys and achieve his goal?

## Input

![The first line contains three integers n, m, and r (1 ≤ n,m ≤ 11, n + m ≤ r ≤ (n+m)(n+m+1)) – the 2 number of hoppers, doors, and bidirectional paths.](sysupc_final_2024_assets/H_p13_formula007.png)

![Each of the next r lines contains two integers u and v (1 ≤ u < v ≤ n + m + 1) – a path connecting node and node .](sysupc_final_2024_assets/H_p13_formula008.png)

![u and node v.](sysupc_final_2024_assets/H_p13_formula009.png)

It is guaranteed that no two paths connect the same two nodes, and all nodes can be reached from node

1 after all doors are opened.

## Output

Output a single integer in a line — the number of possible arrangements of keys in hoppers.

![原题插图（PDF 第 13 页）](sysupc_final_2024_assets/H_p13_figure1.png)

## Examples

### 样例输入

```text
2 2 5
1 2
2 4
2 5
3 4
3 5
```

### 样例输出

```text
3
```

### 样例输入

```text
3 3 7
1 2
1 5
1 6
3 5
3 6
3 7
4 7
```

### 样例输出

```text
10
```
