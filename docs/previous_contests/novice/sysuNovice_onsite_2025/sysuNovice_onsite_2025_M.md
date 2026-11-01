# M. 尖塔攻击

输入文件： standard input
出文件：

输出文件： s s t t a a n n d d a a r r d d i o n u p t u p t ut
时间限制： 1 second

时间限制： s1tsaencdoanrdd

空间限制： 256 megabytes

![在一个平面坐标系上有 k 座尖塔，第 i 座尖塔被放置在整点 (x ,y ) 上，并且满足 1 ≤ x ≤ n 且 i i i 。尖塔两两之间会产生电流，对它们的中点进行一次攻击。需要注意的是，虽然尖塔被放置](sysuNovice_onsite_2025_assets/M_p17_formula001.png)

![1 ≤ y ≤ m。尖塔两两之k间会产生电流，i对它们的中点进行一次攻(x击i,y。i)需要注意的是，虽1 然≤尖xi塔≤被n放置 i 在整点上，但其中点并不一定落在整点上，此时的攻击依然是生效的。](sysuNovice_onsite_2025_assets/M_p17_formula002.png)

1在≤整y点i 上≤ ，m但其中点并不一定落在整点上，此时的攻击依然是生效的。

如果一个位置被攻击了至少两次，那么这个位置就会被损坏。你需要检查是否存在受损的位置，如果

有，还需要给出其中任意一个位置的坐标。

## Input

![本题采用多组测试数据，第一行包含一个整数 T (1 ≤ T ≤ 10)，表示数据组数。](sysuNovice_onsite_2025_assets/M_p17_formula003.png)

在每组数据中：

![第一行包含三个整数 n,m,k (1 ≤ n,m ≤ 1000,1 ≤ k ≤ min(n × m,105))。](sysuNovice_onsite_2025_assets/M_p17_formula004.png)

![接下来的 k 行，第 i 行包含两个整数 x ,y (1 ≤ x ≤ n,1 ≤ y ≤ m)，表示第 i 座尖塔的位置坐标。两 i i i i 座尖塔的位置可能相同，此时它们的中点视为尖塔所在的位置。](sysuNovice_onsite_2025_assets/M_p17_formula005.png)

座尖塔的位k 置可能相i 同，此时它们的中xi点,y视i (为1 ≤尖x塔i 所≤在n,的1 ≤位置yi 。≤

## Output

对于每组数据，输出一行：

![• 如果存在至少一个损坏的位置，则输出 YES a b，其中 (a,b) 代表任意一个受损的位置坐标；](sysuNovice_onsite_2025_assets/M_p17_formula006.png)

- 否则，输出 NO。

## Example

### 样例输入

```text
2
3 3 4
1 1
1 2
2 2
2 3
5 5 7
1 5
2 3
1 1
1 3
1 2
5 1
3 3
```

### 样例输出

```text
YES 1.5 2.0
NO
```

## Note

![对于第一组数据：第一座尖塔和第四座尖塔形成的电流会在 (1.5,2) 处造成攻击，而第二座尖塔和第三 座 塔 的 流也会在 造 攻 ，故 们认为 位 受损。](sysuNovice_onsite_2025_assets/M_p17_formula007.png)

![座尖塔形成的电流也会在 (1.5,2) 处造成攻击，故我们认为 (1 ( .5 1 , .5 2 , ) 2位) 置受损。](sysuNovice_onsite_2025_assets/M_p17_formula008.png)
