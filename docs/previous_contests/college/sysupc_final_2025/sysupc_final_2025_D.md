# D. Perfect Life

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 256 megabytes

Dr.Z wants to live a perfect life. In the future, he acquires a time machine that gives him a chance to
alter his life. His life is represented by a string . He can modify the string using another string .

![Dalrt.eZr his life. His life is represented by a string S. He can modify the string S using another string T.](sysupc_final_2025_assets/D_p08_formula001.png)

![Each modification allows him to choose a positive integer i in the range  1,|S| − |T| + 1  and replace the substring with . More precisely, for each , he sets .](sysupc_final_2025_assets/D_p08_formula002.png)

![the substring S i : i + |T| − 1  with T. More precisely, fior each j ∈  1  1 ,| , T |S |  |,−he|Ts|e+ts 1 S   = T . i+j−1 j This operation can be performed infinitely many times. considers his life perfect if and only if](sysupc_final_2025_assets/D_p08_formula003.png)

This operationS[cian: ibe+p|Ter|fo−rm1e]d infinTitely many times.Dr.Z consijder∈s [h1i,s|Tli|f]e perfect iSfi+ajn−d1 o=nlyTjif
—that is, when the string becomes a palindrome.

![∀i ∈  1,|S| ,S = S —that is, when the string S becoDmre.sZa palindrome. i |S|−i+1](sysupc_final_2025_assets/D_p08_formula004.png)

Dr.Z wants to know whether it’s possible for his life to become perfect through these modifications.

![There are t test cases. For each test case, you are given two strings S and T.If S can become a palindrome, output . Otherwise, output .](sysupc_final_2025_assets/D_p08_formula005.png)

output Yes t. Otherwise, output No.

## Input

![The first line contains an integer t means that there are t test cases.](sysupc_final_2025_assets/D_p08_formula006.png)

![The next t lines each contain 2 strings S,T (1 ≤ |S| ≤ 106,|T| ≤ 60).](sysupc_final_2025_assets/D_p08_formula007.png)

![It is guaranteed that S and T contain only uppercase and lowercase letters, and the total length of all strings across test cases does not exceed .](sysupc_final_2025_assets/D_p08_formula008.png)

![strings S across test caSses doTes not exceed 2 × 106.](sysupc_final_2025_assets/D_p08_formula009.png)

## Output

![The next t lines each contain Yes or No.](sysupc_final_2025_assets/D_p08_formula010.png)

## Example

### 样例输入

```text
9
asdppsaAA Aad
pjdaAjcKaA Aad
pjdsdAadaA Aad
pjdjAjcKsA Aad
ABAB AB
BBA AB
abcdDea cd
abcdDea cb
asbAADbbaaa abbc
```

### 样例输出

```text
Yes
Yes
Yes
No
No
Yes
No
Yes
Yes
```

## Note

![In the first test case, S can be turned into a palindrome through 3 modifications. By sequentially choosing , is changed as follows: AadppsaAA AadAadaAA AAadadaAA.](sysupc_final_2025_assets/D_p08_formula011.png)

![i = 1,4,2, S is changSed as follows: S → AadppsaAA → AadAadaAA → AAadadaAA.](sysupc_final_2025_assets/D_p08_formula012.png)

In the fourth test case,there is no way to change.
