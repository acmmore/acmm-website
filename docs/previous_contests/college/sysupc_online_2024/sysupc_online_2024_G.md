# G. Make SYSU Great Again 3.0 Alpha

Input file: standard input

Output file: standard output

Time limit: 1 second

Memory limit: 256 megabytes

As you all know, you are participating in the SYSUCPC (SYSU Constructive Problem Contest) qualifiers.

Undoubtedly, the Constructive Kingdom of Sun Yat-sen University is eager for you to tackle some

constructive problems.

![Little Q is stargazing. He discovers that Regulus consists of n stars and m star paths connecting pairs of](sysupc_online_2024_assets/G_p11_formula001.png)

![stars. Since Regulus is a galaxy, the m star paths will connect all the stars together (ensure that every](sysupc_online_2024_assets/G_p11_formula002.png)

pair of stars can reach each other through bidirectional star paths) . However, the star paths can only

transmit light in one direction. Little Q does not know the direction of light transmission for each path,

and he only knows the brightness of each star.

![The brightness of the i-th star is a , meaning that starting from the i-th star, there exists at least one i](sysupc_online_2024_assets/G_p11_formula003.png)

![light path of length a . Now, Little Q wants you to tell him a possible direction in which each star path i](sysupc_online_2024_assets/G_p11_formula004.png)

transmits light.

## Input

![The first line contains two integers n and m (1 ≤ n ≤ 105,1 ≤ m ≤ 2n), representing the number of stars](sysupc_online_2024_assets/G_p11_formula005.png)

and star paths, respectively.

![The second line contains n integers a (0 ≤ a ≤ 109), representing the brightness of each star. i i](sysupc_online_2024_assets/G_p11_formula006.png)

![The next m lines each contain two positive integers x and y (1 ≤ x ,y ≤ n), indicating that the i-th i i i i](sysupc_online_2024_assets/G_p11_formula007.png)

![star path connects the x -th and y -th stars. i i](sysupc_online_2024_assets/G_p11_formula008.png)

It is guaranteed that no star path connects the same star to itself, and no two star paths connect the

same pair of stars.

## Output

![Output a string of length m consisting only of 0 and 1. If the i-th character is 0, it means that the i-th](sysupc_online_2024_assets/G_p11_formula009.png)

![star path transmits light in the direction x → y ; otherwise, it transmits light in the direction y → x . i i i i](sysupc_online_2024_assets/G_p11_formula010.png)

If there are more than one solutions, output any of them. If there is no solution, output “-1” (without

quotes).

![原题插图（PDF 第 11 页）](sysupc_online_2024_assets/G_p11_figure1.png)

## Examples

### 样例输入

```text
6 7
1 2 3 4 5 6
1 2
2 3
3 4
4 5
5 6
6 4
5 3
```

### 样例输出

```text
0000001
```

### 样例输入

```text
5 4
1 0 0 2 0
1 2
2 3
3 4
2 5
```

### 样例输出

```text
0110
```

### 样例输入

```text
5 4
0 2 0 2 3
4 2
5 4
5 1
3 4
```

### 样例输出

```text
-1
```

## Note

The picture below shows the Regulus given by the second example.

![原题插图（PDF 第 12 页）](sysupc_online_2024_assets/G_p12_figure1.png)
