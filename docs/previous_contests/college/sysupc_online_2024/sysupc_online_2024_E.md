# E. Shield Block

Input file: standard input

Output file: standard output

Time limit: 2 seconds

Memory limit: 256 megabytes

Little Q is playing Hearthstone, and his opponent is a Warrior who is skilled at getting armor.

![Initially, there are n cards in Little Q’s deck, and he will play them from top to bottom. The i-th card](sysupc_online_2024_assets/E_p07_formula001.png)

![deals a damage to the Warrior. i](sysupc_online_2024_assets/E_p07_formula002.png)

![Each turn, the Warrior will reset his armor to D points (note that it is “reset”, not “increase”). Then,](sysupc_online_2024_assets/E_p07_formula003.png)

![Little Q will play k cards in order (If the remaining cards are fewer than k, Little Q will still play all the](sysupc_online_2024_assets/E_p07_formula004.png)

![remaining cards in the last turn). If the total damage of these k cards (called S) exceeds D, the Warrior](sysupc_online_2024_assets/E_p07_formula005.png)

![will take S − D damage; otherwise, the Warrior will take no damage. The game ends when all the cards](sysupc_online_2024_assets/E_p07_formula006.png)

in Little Q’s deck have been played.

Little Q has a special ability: he can remove any cards from his deck before the game starts, without

![changing the relative position of the remaining cards. He wants to know, for each k = 1,2,...,n, the](sysupc_online_2024_assets/E_p07_formula007.png)

maximum damage he can deal to the Warrior.

## Input

![The first line contains two integers n,D (1 ≤ n ≤ 106,1 ≤ D ≤ 109), representing the number of cards in](sysupc_online_2024_assets/E_p07_formula008.png)

Little Q’s deck and the Warrior’s armor.

![The next line contains n integers a (1 ≤ a ≤ 1012), representing the damage of each card in the deck i i](sysupc_online_2024_assets/E_p07_formula009.png)

from top to bottom.

## Output

![Output n lines. The i-th line contains an integer, denoting the maximum damage Little Q can deal to the](sysupc_online_2024_assets/E_p07_formula010.png)

![Warrior when k = i.](sysupc_online_2024_assets/E_p07_formula011.png)

![原题插图（PDF 第 7 页）](sysupc_online_2024_assets/E_p07_figure1.png)

## Example

### 样例输入

```text
5 5
2 1 5 4 3
```

### 样例输出

```text
0
4
7
9
10
```

## Note

![In the example, when k = 1, since only one card can be played per turn, it is impossible to deal any](sysupc_online_2024_assets/E_p08_formula012.png)

damage to the Warrior anyway.

![When k = 2, by removing the 2nd card, the damage in the first round is 2 + 5 − 5 = 2, and in the second](sysupc_online_2024_assets/E_p08_formula013.png)

![round, the damage is 4 + 3 − 5 = 2.](sysupc_online_2024_assets/E_p08_formula014.png)

![When k = 3, by removing the 1st and 2nd cards, the damage in the first round is 5 + 4 + 3 − 5 = 7.](sysupc_online_2024_assets/E_p08_formula015.png)

![When k = 4, by removing the 2nd card, the damage in the first round is 2 + 5 + 4 + 3 − 5 = 9.](sysupc_online_2024_assets/E_p08_formula016.png)

![When k = 5, no cards are removed, and the damage in the first round is 2 + 1 + 5 + 4 + 3 − 5 = 10.](sysupc_online_2024_assets/E_p08_formula017.png)
