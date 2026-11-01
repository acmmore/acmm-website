# C. Breakingsky and space

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 256 megabytes

In the game Honor of Kings, there is a hero, Genghis Khan, who is almost forgotten by everyone. His

second skill Beast Trap can significantly increase the damage dealt by Genghis Khan if used properly. As

you can see, the trap’s trigger radius is far smaller than its damage radius, as shown in the picture, which

means that if someone triggers the trap, one may be attacked by the trap even if he is not in the trigger

radius of the trap.

Taking inspiration from life, Hitass\_ SY invents a trap sphere in three-dimensional space. The trap sphere

![has a damage radius R and an infinite trigger radius. Now Hitass_ SY places n trap sphere in the three- dimensional space, and the -th trap sphere’s sphere center is at and can deal damage to](sysupc_warmup_2024_assets/C_p04_formula001.png)

![dimensional space, anRd the i-th trap sphere’s sphere center is at (X ,Y ,Z ) annd can deal B damage to i i i i each one whose distance from the sphere center is no bigger than the damage radius once the trap sphere](sysupc_warmup_2024_assets/C_p04_formula002.png)

each one whose distance fromi the sphere center is no bigger than t(hXei,dYaim,Zagi)e radius once thBeitrap sphere

explodes. However, due to the difficulty of researching, all the trap spheres share the same damage radius

![R.](sysupc_warmup_2024_assets/C_p04_formula003.png)

![Now there are m spaceships flying along some straight lines. When an airship visits a point (x,y,z) and , , and are all integers, the spaceship will leave one passenger at that point. Given the spaceship’s](sysupc_warmup_2024_assets/C_p04_formula004.png)

![x, y, and z aremall integers, the spaceship will leave one passenger at that point. Given the(xsp,ayc,ezs)hip’s position vector and direction vector , the airship will visit point](sysupc_warmup_2024_assets/C_p04_formula005.png)

![xposyition vezctor (x ,y ,z ) and direction vector (a ,b ,c ), the airship will visit point i i i i i i](sysupc_warmup_2024_assets/C_p04_formula006.png)

![(x + ka ,y + kb ,z + kc ),k ∈ R i i i i i i](sysupc_warmup_2024_assets/C_p04_formula007.png)

Once all the passengers have been left, all the traps will explode and deal damage to those passengers who

are in the damage radius. There are infinite passengers left in the three-dimensional space so Hitass\_SY

![原题插图（PDF 第 4 页）](sysupc_warmup_2024_assets/C_p04_figure1.png)

does not want to collect data about them. So now you have to help Hitass\_SY calculate the total damage

taken by all the passengers left by spaceships.

## Input

![The first line contains three integers, n, m, R.(0 < n,m ≤ 1000 ; 0 < R ≤ 10000)](sysupc_warmup_2024_assets/C_p05_formula008.png)

![Then follows one line with n integers. The i-th integer represents B . i](sysupc_warmup_2024_assets/C_p05_formula009.png)

![Then follows n lines. The i-th line contains three integers X , Y , Z . i i i](sysupc_warmup_2024_assets/C_p05_formula010.png)

![Then follows m lines. The i-th line contains six integers x , y , z , a , b , c . (a2 + b2 + c2 > 0) i i i i i i i i i](sysupc_warmup_2024_assets/C_p05_formula011.png)

![The absolute value of X , Y , Z , x , y , z , a , b , c would not exceed 10000. i i i i i i i i i](sysupc_warmup_2024_assets/C_p05_formula012.png)

## Output

One integer, the total damage taken by all the passengers left by spaceships.

## Example

### 样例输入

```text
1 1 5000
1
0 0 0
0 0 0 1 0 0
```

### 样例输出

```text
10001
```
