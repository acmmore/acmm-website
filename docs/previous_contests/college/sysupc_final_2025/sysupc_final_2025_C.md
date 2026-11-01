# C. Arc Path

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1.5 seconds

Time limit: s1.t5ansedcaornddso

Memory limit: 256 megabytes

![There are n circles on a plane. The i-th circle has a center at (x ,y ) and a radius of r . These n circles i i i are pairwise non-intersecting, but they may be tangent (including internally or externally). There are two](sysupc_final_2025_assets/C_p06_formula001.png)

are pairwisne non-intersecting, but theiy may be tangent (includin(xgi,inytie)rnally or externalrlyi ). Therenare two

![points S and T located on the arcs of these circles. Student A starts at point S and can only travel along the circular arcs. Each circle has a parameter , which represents the time per unit length of traveling](sysupc_final_2025_assets/C_p06_formula002.png)

![the circSular aTrcs. Each circle has a parameter v , wShtiucdhernetprAesents the time per unit length of traveling i along the arc of that circle. The goal is to find the minimum total time for to travel from point](sysupc_final_2025_assets/C_p06_formula003.png)

along the arc of that circle. The goal is to find thvie minimum total time for Student A to travel from point
to point along the circular arcs.

![S to point T along the circular arcs.](sysupc_final_2025_assets/C_p06_formula004.png)

## Input

![The first line contains five integers: n(1 ≤ n ≤ 104),S ,S ,T ,T (|S |,|S |,|T |,|T | ≤ 109). Here, n x y x y x y x y denotes the number of circles on the plane, represents the coordinates of the initial position of](sysupc_final_2025_assets/C_p06_formula005.png)

![denotes the number of circles on the pnla(1ne≤, (S n , ≤ S 1 ) 0re)p,rSexs,eSntys,Tthx,eTcyo(o|Srdxi|n,|aStye|s,|oTfxt|h,|eTiyn|it≤ial1p0os)ition S onf x y , and denotes the coordinates of the target destination .](sysupc_final_2025_assets/C_p06_formula006.png)

![Student A, and (T ,T ) denotes the coordin(Satxe,sSoy)f the target destination T. x y](sysupc_final_2025_assets/C_p06_formula007.png)

![The next n lines each contain four positive integers x ,y ,r ,v (|x |,|y | ≤ 109,1 ≤ r ≤ 108,0 ≤ v ≤ 105), i i i i i i i i representing the parameters of the -th circle: the center coordinates are , the radius is , and the](sysupc_final_2025_assets/C_p06_formula008.png)

![representinng the parameters of the i-th circle: the cxeni,tyeri,croi,ovrid(i|nxai|t,e|syia|r≤e ( 1 x 0 , , y 1 ) ≤, trhie≤ra1d0iu,s0is≤ r v,ia≤nd10th)e i i i cost per unit length of traveling along the arc of this circle is .](sysupc_final_2025_assets/C_p06_formula009.png)

![cost per unit length of traveling aloing the arc of this circle is v . i](sysupc_final_2025_assets/C_p06_formula010.png)

![The data guarantees that points S and T are located on the arcs of two (possibly distinct) circles, no two circles intersect (they may be tangent, either internally or externally), and no two circles are entirely](sysupc_final_2025_assets/C_p06_formula011.png)

two circles intersect (they may be StangentT, either internally or externally), and no two circles are entirely

coincident (i.e., there are no two circles with identical center coordinates and equal radius).

## Output

Output a single line containing a real number, which represents the minimum total cost for Student A
to travel from point to point . If it is impossible to reach the destination, output .

![to travel from point S to point T. If it is impossible to reach the destination, output −1.](sysupc_final_2025_assets/C_p06_formula012.png)

The correctness of your answer is judged as follows:

![If your determination of whether the destination is reachable (i.e., outputting −1 or a real number) differs from the standard answer, your answer is considered wrong.](sysupc_final_2025_assets/C_p06_formula013.png)

from the standard answer, your answer is considered wrong.

![If your determination matches the standard answer (both output −1 or both output a real number), and assuming your output is and the standard answer is , your answer is considered](sysupc_final_2025_assets/C_p06_formula014.png)

![assuming your output is Y our nswer and the standard answer−is1 Answer, your answer is considered A correct if it satisfies either:|YourAnswer−Answer| ≤ 10−6 or |Y our nswer − Answer| ≤ 10−6. Answer+1 A](sysupc_final_2025_assets/C_p06_formula015.png)

## Examples

### 样例输入

```text
3 0 1 3 0
1 1 1 1
3 1 1 2
4 1 4 3
```

### 样例输出

```text
6.283185307179586
```

### 样例输入

```text
3 -10 0 0 0
0 0 10 2
0 0 8 3
0 4 4 5
```

### 样例输出

```text
-1
```

## Note

As shown in the example figure above, Circle 1 is denoted by the lowercase letter a, Circle 2 by b, and

![Circle 3 by c. One possible path achieving the minimum cost to travel from point S to point T is marked by the red path.](sysupc_final_2025_assets/C_p07_formula016.png)

by the red path.

![原题插图（PDF 第 7 页）](sysupc_final_2025_assets/C_p07_figure1.png)
