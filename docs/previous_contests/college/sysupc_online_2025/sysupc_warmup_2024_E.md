# E. Breakingsky and ping_fan

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 256 megabytes

Ping\_fan is a good friend of BreakingSky. He loves playing a music game called "Project phigarcea:

chunimaiDX". The level of a player can be measured by a positive integer known as potential (ptt for
short).

short).

![The difficulty of each song in the game is decided by three factors, the song’s speed x, the density of note ( C), and the rank of the song . Similarly, the song’s level is defined as follows](sysupc_warmup_2024_assets/E_p07_formula001.png)

![y (x,y ∈ C), and the rank of the song n. Similarly, the song’s level is defined as follxows](sysupc_warmup_2024_assets/E_p07_formula002.png)

![level = xn + yn](sysupc_warmup_2024_assets/E_p07_formula003.png)

![Here we define 00 = 1.](sysupc_warmup_2024_assets/E_p07_formula004.png)

To enhance his strength in playing music games, Ping\_fan will choose a song whose level is the same as

![his ptt to play. However, because of the strange ideas of the developers, the game shows A = x+y, B = xy and (it is guaranteed that , are non-negative integers), instead of , and , because the song’s](sysupc_warmup_2024_assets/E_p07_formula005.png)

![andp n tt (it is guaranteed that A, B are non-negative integers), instead of x, y and n, bAec=auxse+tyheBso=ngx’ys speed and density of notes may be . Now given a song’s , and , Ping_fan](sysupc_warmup_2024_assets/E_p07_formula006.png)

![speedn x and density of notes A y mBay be complex numbers. Now given axsoyng’s A n, B and n, Ping_fan wants you to tell with how much will he choose this song.](sysupc_warmup_2024_assets/E_p07_formula007.png)

wants xyou to tell with how muych ptt wilclohme cphleoxosenuthmisbseornsg.

![Notice: Considering it may be hard to know what x and y exactly are and calculate xn and yn, you’d better find a way to calculate without knowing and .](sysupc_warmup_2024_assets/E_p07_formula008.png)

![Nbeottteicrefind a way to calculate xn + yn without knowixng x aynd y.](sysupc_warmup_2024_assets/E_p07_formula009.png)

## Input

![The first line contains one positive integer T (T ≤ 1000).](sysupc_warmup_2024_assets/E_p07_formula010.png)

![Then follows T lines, each line contains three non-negative integers A, B (0 ≤ A,B < 109 + 7) and n ((cid:80) n ≤ 1000000), denoting a song’s information shown in the game.](sysupc_warmup_2024_assets/E_p07_formula011.png)

## Output

![Output T lines. Each line contains one integer denoting the answer module 109 + 7.](sysupc_warmup_2024_assets/E_p07_formula012.png)

## Example

### 样例输入

```text
3
2 2 2
1 1 1
0 0 0
```

### 样例输出

```text
0
1
2
```

## Note

In the example,

![• For the first song, x = 1 + i and y = 1 − i, so x2 + y2 = 0.](sysupc_warmup_2024_assets/E_p07_formula013.png)

![√ √ • For the second song, x = 1 + 3i and x = 1 − 3i, so x1 + y1 = 1. 2 2 2 2](sysupc_warmup_2024_assets/E_p07_formula014.png)

![• For the first song, x = 0 and y = 0, so x0 + y0 = 2.](sysupc_warmup_2024_assets/E_p07_formula015.png)
