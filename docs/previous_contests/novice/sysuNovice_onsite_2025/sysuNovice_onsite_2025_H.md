# H. 三仙归洞

输入文件： standard input
出文件：

输出文件： s s t t a a n n d d a a r r d d i o n u p t u p t ut
时间限制： 3 seconds

时间限制： s3tsaencdoanrdds

空间限制： 512 megabytes

![现在有 n 位杂技师同时进行表演，每个人的面前有一张桌子，桌子上有一根筷子、两个倒扣的碗和 若干 球。 中 个人左 的碗 有 个 球，右 的碗 有 个 球，在碗 面的桌面上](sysuNovice_onsite_2025_assets/H_p11_formula001.png)

![若干小球n。其中第 i 个人左手边的碗内有 a 个小球，右手边的碗内有 b 个小球，在碗外面的桌面上 i i 方，还有 个小球。除此之外，现场没有任何其他的小球，即小球的位置和数量情况可以用三个序列](sysuNovice_onsite_2025_assets/H_p11_formula002.png)

![方，还有 c 个小球i。除此之外，现场没有任ai何其他的小球，即小球的位b置i 和数量情况可以用三个序列 i 来表示。](sysuNovice_onsite_2025_assets/H_p11_formula003.png)

![{a },{b }, ci {c } 来表示。 n n n](sysuNovice_onsite_2025_assets/H_p11_formula004.png)

![现在有若干次表演。一次表演可以被形式化为，选定一个区间  l,r ，然后选定 {a },{b },{c } 中的两 n n n 个序列，不妨记其为 ，接着对所有 ，交换 和 的值。](sysuNovice_onsite_2025_assets/H_p11_formula005.png)

![个序列，不妨记其为 {p },{q }，接着对所有 j ∈  l,r ，交换 p  和l,r q   的值。 n n j j](sysuNovice_onsite_2025_assets/H_p11_formula006.png)

作为这场表演的观众，你因为拥有透视功能，且观察相当细致，所以知道了以上的所有信息。出于好

![奇，你会进行若干次观察。一次观察可以被形式化为，计算当前第 l 位杂技师到第 r 位杂技师左手边的 碗内的小球总数，即 (cid:80)r a 。 i=l i](sysuNovice_onsite_2025_assets/H_p11_formula007.png)

由于杂技师的数量众多，于是你决定用计算机编写一个程序来帮助你解答这个问题。为了方便表述，我

![们记表演和观察总共有 m 次。](sysuNovice_onsite_2025_assets/H_p11_formula008.png)

## Input

![第一行包含两个整数 n,m (1 ≤ n ≤ 5 × 105,1 ≤ m ≤ 8 × 105)，分别表示杂技师的数量，以及表演与观 察的 数。](sysuNovice_onsite_2025_assets/H_p11_formula009.png)

察的总次数。

![接下来三行，每行包含 n 个整数，分别表示三个序列 {a },{b },{c } (1 ≤ a ,b ,c ≤ 2 × 103)。 n n n i i i](sysuNovice_onsite_2025_assets/H_p11_formula010.png)

![接下来 m 行，每行包含三个整数 opt,l,r (0 ≤ opt ≤ 3,1 ≤ l ≤ r ≤ n)，表示一次表演或观察。具体而 ：](sysuNovice_onsite_2025_assets/H_p11_formula011.png)

言：

![• 当 opt = 0 时，表示当前进行了一次表演，选择的 p,q 序列分别为 a 序列和 b 序列；](sysuNovice_onsite_2025_assets/H_p11_formula012.png)

![• 当 opt = 1 时，表示当前进行了一次表演，选择的 p,q 序列分别为 a 序列和 c 序列；](sysuNovice_onsite_2025_assets/H_p11_formula013.png)

![• 当 opt = 2 时，表示当前进行了一次表演，选择的 p,q 序列分别为 b 序列和 c 序列；](sysuNovice_onsite_2025_assets/H_p11_formula014.png)

![• 当 opt = 3 时，表示当前进行了一次观察。](sysuNovice_onsite_2025_assets/H_p11_formula015.png)

## Output

对于每次观察，输出一行一个整数，表示这次观察的计算结果。

## Example

### 样例输入

```text
8 10
486 249 12 175 432 1074 1054 677
1325 159 941 1090 486 1324 989 1208
331 801 1232 930 1004 179 1073 99
3 5 7
2 5 6
1 4 5
2 7 8
3 5 8
1 5 7
0 2 8
2 2 5
0 3 5
3 1 8
```

### 样例输出

```text
2560
3291
3889
```

## Note

本题输入数据量较大，请使用较快的输入方式。
