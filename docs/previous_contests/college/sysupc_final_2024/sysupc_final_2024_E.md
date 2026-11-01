# E. Erasing Numbers

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 512 megabytes

![Alice and Bob are going to play a game. Initially, there are n numbers lined up on the board, all of which are either or . Alice and Bob take turns to move, and Alice moves first.](sysupc_final_2024_assets/E_p09_formula001.png)

are either 0 or 1. Alice and Bob take turns to move, and Alnice moves first.

On Alice’s turn, she can perform one of the following actions:

- Choose a number 0 on the board and erase it.

- Choose two numbers 0 on the board and erase them with all the numbers between them.

![For example, if the numbers on the board are 0,1,1,0,1, Alice can either erase one of the zeros or erase the first four numbers together.](sysupc_final_2024_assets/E_p09_formula002.png)

the first four numbers together.

Bob’s actions are similar to Alice’s, but he should choose 1 instead of 0.

To make the game more interesting, Alice and Bob agree that the first person who is unable to perform

any action wins (e.g., no number 0 on the board on Alice’s turn). If both players play optimally, who will
be the winner?

be the winnweirn?

## Input

![The first line contains a single integer T (1 ≤ T ≤ 104) — the number of test cases.](sysupc_final_2024_assets/E_p09_formula003.png)

Each test case consists of two lines:

![• The first line contains one integer n (1 ≤ n ≤ 105) — the initial count of numbers on the board.](sysupc_final_2024_assets/E_p09_formula004.png)

![• The second line contains a binary string of length n — the n numbers on the board in order.](sysupc_final_2024_assets/E_p09_formula005.png)

![It is guaranteed that the sum of n over all test cases does not exceed 2 × 105.](sysupc_final_2024_assets/E_p09_formula006.png)

## Output

For each test case, output a single line containing Alice or Bob — the winner if both players play optimally.

## Example

### 样例输入

```text
3
5
10100
5
11011
5
01010
```

### 样例输出

```text
Alice
Alice
Bob
```
