# H. 罗德岛战役

输入文件: standard input

输出文件: standard output

时间限制: 1 second

空间限制: 256 megabytes

一大批整合运动的领袖带领整合运动进军罗德岛

而你，doctor，作为罗德岛的战术指挥官，率领着干员们与整合运动的领袖对抗。

擒贼先擒王，所以如何击溃整合运动的领袖们显得极为重要。

![每一个整合运动的领袖，具有生命值、防御 d 、法抗 s 三个属性，要在有限的时间内击溃他，就要选择](sysuNovice_onsite_2024_assets/H_p10_formula001.png)

一些干员，使干员们在这段时间内造成的伤害 (实际造成的物理伤害 + 法术伤害 + 真实伤害) 大于等于

敌方领袖的生命值。

于是，你每次都会从未被选中的干员中选择一名加入编队，或者从已选中的干员中将一名干员移除编队，

并计算以目前编队内的干员，能否在有限时间内击杀这个敌方领袖。在将干员加入编队的时候，你会知道

![干员的代号以及这位干员在有限时间内能进行多少次攻击，每次攻击的物理伤害 a 、法术伤害 b 和真实](sysuNovice_onsite_2024_assets/H_p10_formula002.png)

![伤害 c 分别是多少。计算敌人的防御 d 和法抗 s 后，实际造成的物理伤害为 max(a − d,⌊a ∗ 5%⌋) ，法](sysuNovice_onsite_2024_assets/H_p10_formula003.png)

![术伤害为 max(⌊b ∗ 100−s⌋,⌊b ∗ 5%⌋) ，真实伤害为 c 。 100](sysuNovice_onsite_2024_assets/H_p10_formula004.png)

对于不同的敌方领袖，你会选择不同的编队。因此在结束一个敌方领袖的编队选择后，你会先清空编队，

再选择对抗下一个敌方领袖的编队。

![⌊x⌋ 表示不大于 x 的最大整数，比如 ⌊1.5⌋ = 1,⌊−1.5⌋ = −2。](sysuNovice_onsite_2024_assets/H_p10_formula005.png)

## Input

![第一行一个整数 T，表示整合运动的领袖个数 (1 ≤ T ≤ 104)](sysuNovice_onsite_2024_assets/H_p10_formula006.png)

对于每一个敌方领袖，

![第一行三个整数 h,d,s (1 ≤ h ≤ 1014, 0 ≤ d ≤ 105, 0 ≤ s ≤ 100)，表示敌方领袖的生命值、防御和法抗。](sysuNovice_onsite_2024_assets/H_p10_formula007.png)

![∑ 第二行输入一个整数 m，表示添加或移除干员的操作次数。(保证 1 ≤ m ≤ 105)](sysuNovice_onsite_2024_assets/H_p10_formula008.png)

![接下来 m 行，每行先第一个整数 opt。](sysuNovice_onsite_2024_assets/H_p10_formula009.png)

![若 opt = 1 ，表示将添加一名干员。随后输入一个仅由字母和数字组成的字符串 str 和 4 个整数 n ,a ,b ,c i i i i i](sysuNovice_onsite_2024_assets/H_p10_formula010.png)

![(n ,a ,b ,c ∈  0,105 )，str 表示干员代号 (|str | ≤ 50)，n ,a ,b ,c 分别表示在有限时间内能够进行的 i i i i i i i i i i](sysuNovice_onsite_2024_assets/H_p10_formula011.png)

攻击次数，每次攻击的物理伤害、法术伤害和真实伤害。如果编队中已经有相应干员代号的干员，忽略这

次添加干员的操作直接输出答案。

![若 opt = 2 ，表示将移除一名干员，随后输入一个仅由字母和数字组成的字符串 str ，表示要移除的干 i](sysuNovice_onsite_2024_assets/H_p10_formula012.png)

员的代号。若编队中没有以这个字符串为代号的干员，忽略这次移除干员的操作直接输出答案。

## Output

![对于每一个领袖，共 m 行表示每次操作（可能被忽略）后现在的编队能否在有限的时间内击杀整合运动](sysuNovice_onsite_2024_assets/H_p10_formula013.png)

领袖。如果能，输出 Yes, 否则输出 No。(不区分大小写）

## Example

### 样例输入

```text
1
50000 3000 80
12
1 Amiya 20 0 1000 2000
1 Amiya 20 0 1000 2000
1 Degenbrecher 10 5000 0 0
1 KirinRYato 16 1265 633 0
2 Texas
2 Amiya
1 Eyjafjalla 27 0 1875 0
1 Amiya 20 0 1000 2000
2 Degenbrecher
2 Degenbrecher
2 Eyjafjalla
1 Eyjafjalla 27 0 1875 0
```

### 样例输出

```text
No
No
Yes
Yes
Yes
No
No
Yes
Yes
Yes
No
Yes
```
