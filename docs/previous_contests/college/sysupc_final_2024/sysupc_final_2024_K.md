# K. King of Card Games

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 512 megabytes

An innovative card drawing game, developed by K7K7 Games, has become famous among ACMM Club.

![In this card game, a deck consists of n cards, each marked with a distinct integer from 1 to n written on them. The player must perform the following action times: draw a card randomly from a deck, record](sysupc_final_2024_assets/K_p17_formula001.png)

![them. The player must perform the fonllowing action m times: draw a card randomly fro1m andeck, record the number on this card, and then return it to the deck. After draws, if the maximum and minimum](sysupc_final_2024_assets/K_p17_formula002.png)

![the number on this card, and then return it to the dmeck. After m draws, if the maximum and minimum numbers recorded are and , respectively, the “level of bad luck“ is defined as .](sysupc_final_2024_assets/K_p17_formula003.png)

![numbers recorded are a and b, respectively, the “level of bad lucmk“ is defined as (a − b)2.](sysupc_final_2024_assets/K_p17_formula004.png)

Maple aspires to become the king of card games. She is curious about the total sum of the “level of

![bad luck” for all nm possible sequences of card drawings. Since the number can be huge, Maple is only interested in the sum modulo .](sysupc_final_2024_assets/K_p17_formula005.png)

interested in the snum modulo 998 244 353.

## Input

![The first line contains two integers n and m (1 ≤ n,m ≤ 106) — the number of cards in a deck and the number of card draws.](sysupc_final_2024_assets/K_p17_formula006.png)

number of card draws.

## Output

Output a single integer — the total sum of the “level of bad luck” modulo 998 244 353.

## Examples

### 样例输入

```text
3 1
```

### 样例输出

```text
0
```

### 样例输入

```text
3 2
```

### 样例输出

```text
12
```

### 样例输入

```text
114 514
```

### 样例输出

```text
486446955
```

## Note

In the first example, the “level of bad luck” is always zero since only one number is recorded.

In the second example, there are 9 possible sequences of card drawings.

- Three of the sequences have a “level of bad luck” of 0;

- Four of the sequences have a “level of bad luck” of 1;

- Two of the sequences have a “level of bad luck” of 4.

![In summary, the total sum of the “level of bad luck” equals 3 × 0 + 4 × 1 + 2 × 4 = 12.](sysupc_final_2024_assets/K_p17_formula007.png)
