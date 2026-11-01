# C. WAduck Rotates For One Minute

Input file: standard input

Output file: standard output

Time limit: 1 second

Memory limit: 256 megabytes

![WAduck is a funky duck, and he has n coins. Each side of the coins has a number, which is an integer](sysupc_online_2024_assets/C_p04_formula001.png)

![between 1 and n. Numbers on two sides can be the same or different. Also, each integer between 1 and n](sysupc_online_2024_assets/C_p04_formula002.png)

![appears in these n coins exactly twice in total.](sysupc_online_2024_assets/C_p04_formula003.png)

![WAduck wants to play a game with these coins. At first, the n coins are placed face up on the table. Then](sysupc_online_2024_assets/C_p04_formula004.png)

WAduck chooses some of the coins (possibly none of them) and flips them. After that, WAduck can see

![n numbers on the table. If each integer between 1 and n appears exactly once, WAduck will be very](sysupc_online_2024_assets/C_p04_formula005.png)

thrilled and rotate for one minute.

WAduck wonders how many kinds of choices to flip coins can make him thrilled. As the answer can be

very large, you need to output the answer modulo 1 000 000 007.

## Input

![The first line contains one integer n (1 ≤ n ≤ 105), denoting the number of coins.](sysupc_online_2024_assets/C_p04_formula006.png)

![The second line contains n integers a ,a ,...,a (1 ≤ a ≤ n), denoting the number of the i-th coin on 1 2 n i](sysupc_online_2024_assets/C_p04_formula007.png)

heads.

![The third line contains n integers b ,b ,...,b (1 ≤ b ≤ n), denoting the number of the i-th coin on tails. 1 2 n i](sysupc_online_2024_assets/C_p04_formula008.png)

![It’s guaranteed that each integer between 1 and n appears exactly twice in {a } and {b }. i i](sysupc_online_2024_assets/C_p04_formula009.png)

## Output

Output a single integer, denoting your answer modulo 1 000 000 007.

## Examples

### 样例输入

```text
3
1 1 2
2 3 3
```

### 样例输出

```text
2
```

### 样例输入

```text
2
1 2
1 2
```

### 样例输出

```text
4
```

## Note

In the first example, there are 2 choices:

In the second example, whatever WAduck flips, the result can always make WAduck thrilled, so there are

4 choices.

![原题插图（PDF 第 5 页）](sysupc_online_2024_assets/C_p05_figure1.png)
