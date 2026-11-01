# E. 取模

输入文件： standard input
出文件：

输出文件： s s t t a a n n d d a a r r d d i o n u p t u p t ut
时间限制： 1 second

时间限制： s1tsaencdoanrdd

空间限制： 256 megabytes

小 W 在课堂上学习了如何进行取模。他感觉取模操作实在太单调了，于是创造了一种新型的取模方

案，名为 Soft-取模。

![具体而言，Soft-取模需要一个正整数 x，一个正整数区间  l,r ，以及一个步长 d，且需要满足 d 是 r − l 的因数。Soft-取 会 行 r−l 取 作：在 作时， 赋值为 。](sysuNovice_onsite_2025_assets/E_p08_formula001.png)

![的因数。Soft-取模会进行共 r−l +1 次x取模操作：在第 i 次 l操,r作  时，将 x 赋值为d x mod (r−d∗ d (i−1 r )) −。l d 这相当于让 x 依次对 r，r − d，...，l + d 和 l 取模。](sysuNovice_onsite_2025_assets/E_p08_formula002.png)

![小 W 希望知道，在每次取模后 x 的新值的总和是多少。小 W 会进行若干次 Soft-取模操作，并希望你 可以对 Soft-取 作 对应的 和。](sysuNovice_onsite_2025_assets/E_p08_formula003.png)

可以对每次 Soft-取模操作求出对x应的总和。

## Input

![第一行包含一个整数 T (1 ≤ T ≤ 105)，表示 Soft-取模的次数。](sysuNovice_onsite_2025_assets/E_p08_formula004.png)

![接下来 T 行，每行包含四个整数 x,l,r,d (1 ≤ x ≤ 109,1 ≤ l ≤ r ≤ 109,1 ≤ d ≤ 109,d | (r − l))，表示一 Soft-取 作。](sysuNovice_onsite_2025_assets/E_p08_formula005.png)

次 Soft-T取模操作。

## Output

![输出 t 行，每行包含一个整数，表示对应的 Soft-取模在每次取模后的新值总和。](sysuNovice_onsite_2025_assets/E_p08_formula006.png)

## Example

### 样例输入

```text
3
7 1 5 2
1919810 114 514 10
749999999 1 500000000 1
```

### 样例输出

```text
4
820
62499999999999999
```

## Note

![对于样例的第一次 Soft-取模，有 x = 7，l = 1，r = 5 和 d = 2，共进行三次取模。](sysuNovice_onsite_2025_assets/E_p08_formula007.png)

![1. 第一次取模时将 x = 7 对 5 取模，新值为 2；](sysuNovice_onsite_2025_assets/E_p08_formula008.png)

![2. 第二次取模时将 x = 2 对 3 取模，新值为 2；](sysuNovice_onsite_2025_assets/E_p08_formula009.png)

![3. 第三次取模时将 x = 2 对 1 取模，新值为 0。](sysuNovice_onsite_2025_assets/E_p08_formula010.png)

![故 x 的新值的总和为 2 + 2 + 0 = 4。](sysuNovice_onsite_2025_assets/E_p08_formula011.png)
