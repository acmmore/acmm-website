# J. Palindrome

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 5 seconds

Time limit: s5tsaencdoanrdds

Memory limit: 256 megabytes

Recently, Student A has been studying strings. Certain peculiar strings caught his attention, so he named

such strings “quasi-palindromic strings“.

![A string s is a quasi-palindromic string if and only if the following two conditions are both satisfied:](sysupc_final_2025_assets/J_p15_formula001.png)

![1. There does not exist any contiguous substring t of s with length greater than or equal to 2 that is a palindromic string.](sysupc_final_2025_assets/J_p15_formula002.png)

palindromic string.

![2. Suppose the length of s is n, there exist l,r satisfying 1 ≤ l ≤ r ≤ n, such that after reversing the substring , becomes a palindromic string.](sysupc_final_2025_assets/J_p15_formula003.png)

![substring s l...r , s becomess a npalindromic strl,inrg.](sysupc_final_2025_assets/J_p15_formula004.png)

For example: The string “aac“ is not a quasi-palindromic string because it contains the contiguous substring

“aa“ of length 2, which is a palindrome. The string “abdc“ is not a quasi-palindromic string because there

![do not exist l,r such that reversing the substring s l...r  would turn s into a palindrome. The string “bcabca“ is a quasi-palindromic string.](sysupc_final_2025_assets/J_p15_formula005.png)

“bcabca“ is a lq,urasi-palindromic string.

![Now, given a string T, Student A wants to know how many contiguous substrings of T are quasi- palindromic strings.](sysupc_final_2025_assets/J_p15_formula006.png)

palindromic strings.

Here, contiguous substrings are distinguished solely by their starting and ending positions in the original

string. For instance, in the string “aba“, the contiguous substring [1,1] (the first “a“) and the contiguous

substring [3,3] (the last “a“) are considered two different contiguous substrings, even though they are both

the character “a“.

## Input

![A string T(1 ≤ |T| ≤ 5 × 105).](sysupc_final_2025_assets/J_p15_formula007.png)

## Output

![An integer representing the number of contiguous substrings of T that are quasi-palindromic strings.](sysupc_final_2025_assets/J_p15_formula008.png)

## Examples

### 样例输入

```text
abcabc
```

### 样例输出

```text
9
```

### 样例输入

```text
abc
```

### 样例输出

```text
3
```

## Note

In the first sample, all contiguous substrings of length 1 are quasi-palindromic strings. Among substrings

longer than 1, the quasi-palindromic strings are “abcab“, “bcabc“, and “abcabc“.
