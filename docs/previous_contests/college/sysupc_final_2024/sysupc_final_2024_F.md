# F. Finding Maxi-strings

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 512 megabytes

Mike was doing an everyday challenge on a website. One day, the website gave the following challenge:

![You’ve got a string s consisting of lowercase English letters. Let’s define the occurrence number of another string on as the number of pairs such that and . List the strings](sysupc_final_2024_assets/F_p10_formula001.png)

![string t on s as thesnumber of pairs (l,r) such that 1 ≤ l ≤ r ≤ |s| and s s ...s = t. List the strings l l+1 r with the biggest occurrence number.](sysupc_final_2024_assets/F_p10_formula002.png)

with thte bigsgest occurrence number.

Mike figured out the answer within one second. But after he typed all the answers on the website, he

noticed that many challengers finished faster than him. Mike thought that the problem was the input

order.

The website provides an input area for users to write answers. The input area is initially empty, and the

function of it is limited — only the following actions are allowed:

- Adding a lowercase English letter at the end of the input.

- Pressing “Backspace” to remove one letter from the end of the input. This action only works if there

are letters in the input area.

- Pressing “Enter” to submit an answer based on the current input. The content of the input area

remains unchanged.

The challenge finishes when all the answers are submitted. In addition to the original problem, Mike will

![change the string s for m times, each modification involving a single character. You are required to output the minimum number of actions needed to submit all answers to the string .](sysupc_final_2024_assets/F_p10_formula003.png)

![the minimum numsber omf actions needed to submit all answers after every change to the string s.](sysupc_final_2024_assets/F_p10_formula004.png)

## Input

![The first line contains a single integer n (1 ≤ n ≤ 5 × 105) — the length of the given string s.](sysupc_final_2024_assets/F_p10_formula005.png)

![The second line contains a string of n lowercase English letters — the string s.](sysupc_final_2024_assets/F_p10_formula006.png)

![The third line contains a single integer m (1 ≤ m ≤ 105) — the number of modifications.](sysupc_final_2024_assets/F_p10_formula007.png)

![Each of the next m lines contains a single integer p (1 ≤ p ≤ n) and a lowercase English letter ch — a modification specifying that the -th letter of string should be changed to .](sysupc_final_2024_assets/F_p10_formula008.png)

![modification specimfying that the p-th letter of stringp s 1sh≤oupld≤benchanged to ch.](sysupc_final_2024_assets/F_p10_formula009.png)

## Output

After each modification, output a single integer in a line — the minimum number of actions required to

submit all answers.

## Examples

### 样例输入

```text
6
ababab
4
1 c
3 c
6 a
5 c
```

### 样例输出

```text
2
2
10
2
```

### 样例输入

```text
23
fadejademadewademinimum
3
1 j
9 j
13 j
```

### 样例输出

```text
18
15
26
```

## Note

![In the first example, the string s becomes cbcbaa after the third change. The answers are a, b, c, and cb, as each of these appears times in string . A possible way to submit these answers in actions is as](sysupc_final_2024_assets/F_p11_formula010.png)

![as each of these appears 2 timess in stringc s b.cAbaapossible way to submit these answers in 1 a 0 bactcions iscabs follows:](sysupc_final_2024_assets/F_p11_formula011.png)

follows:

![ empty  − A − dd −→ a a − E − nt − e → r a(cid:88) − B − a − ck − s − pa − c → e  empty  − A − dd −→ b b − E − nt − e → r b(cid:88)](sysupc_final_2024_assets/F_p11_formula012.png)

![− B − a − ck − s − pa − c → e  empty  − A − dd −→ c c − E − nt − e → r c(cid:88) − A − dd −→ b cb − E − nt − e → r cb(cid:88)](sysupc_final_2024_assets/F_p11_formula013.png)
