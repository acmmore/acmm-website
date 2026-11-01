# B. Network

Input file: standard input
Output file:

Output file: s s t t a a n n d d a a r r d d i o n u p t u p t ut
Time limit: 1 second

Time limit: s1tsaencdoanrdd

Memory limit: 256 megabytes

Computer Networks is a very important course in computer science. Suppose there are two machines, A

![and B, that need to transmit data through a chain-like network formed by n − 1 routers. Specifically, when machine A wants to send data to machine B, it first sends the data to router 1, which then forwards](sysupc_final_2025_assets/B_p04_formula001.png)

when machine A wants to send data to machine B, it first sends the data to rounte−r 11, which then forwards

![it to router 2, router 2 forwards it to router 3, and so on, until router n − 1 finally forwards the data to machine B.](sysupc_final_2025_assets/B_p04_formula002.png)

machine B.

![Now, machine A needs to send K bits of data to machine B. It first divides the data into m groups, where the size of each group is , satisfying . These groups are pushed to router 1 in the order of](sysupc_final_2025_assets/B_p04_formula003.png)

![where the size of each group is l ,Ksatisfying Σl = K. These groups are pushed to router 1 in thme order of i i . The push rate of machine A is bit/s, the push rate of router 1 is bit/s, ..., and the push](sysupc_final_2025_assets/B_p04_formula004.png)

![l ,l ,...,l . The push rate of mlaichine A is r Σlbii=t/sK, the push rate of router 1 is r bit/s, ..., and the push 1 2 m 0 1 rate of router is bit/s. The routers forward data in units of groups. When a router receives bits](sysupc_final_2025_assets/B_p04_formula005.png)

![lr1a,tle2,o.f..r,olmuter n−1 is r bit/s. The routerrs0forward data in units of groups. Whre1n a router receives bits n−1 from a group, it waits until all bits of that group have arrived before starting to push the group to the](sysupc_final_2025_assets/B_p04_formula006.png)

from a group,nit−w1aitsrnu−n1til all bits of that group have arrived before starting to push the group to the

next router. The forwarding strategy of the routers is first-come-first-served. While a router is forwarding

data from one group, data from other groups is stored in the router’s buffer, waiting to be forwarded.

Assume that once a router or machine pushes a bit, the bit immediately arrives at the next router or

machine. The question is: starting from the time when machine A pushes the first bit, at what time will

![machine B completely receive all K bits of data sent by machine A?](sysupc_final_2025_assets/B_p04_formula007.png)

## Input

![The first line contains three positive integers n(1 ≤ n ≤ 105),m(1 ≤ m ≤ 3 × 105),K(1 ≤ K ≤ 3 × 105), which represent that the communication between machine A and machine B passes through routers,](sysupc_final_2025_assets/B_p04_formula008.png)

![which represent that the communication betwene(n1 m≤anch≤in1e0A)a,nmd(1m≤achmin≤e B3 ×pa1s0ses),tKhr(o1u≤ghK n− ≤ 1 3r×ou1t0ers), machine A divides the data to be transmitted to B into groups, and the total number of bits of data](sysupc_final_2025_assets/B_p04_formula009.png)

![machine A divides the data to be transmitted to B into m groups, and the total number onf b−it1s of data that machine A wishes to transmit to B is , respectively.](sysupc_final_2025_assets/B_p04_formula010.png)

![that machine A wishes to transmit to B is K, respectivelmy.](sysupc_final_2025_assets/B_p04_formula011.png)

![The second line contains n positive integers. The first integer is r (1 ≤ r ≤ 109), representing the push 0 0 rate (in bit/s) of machine A. The following integers are 9 , where the -th integer](sysupc_final_2025_assets/B_p04_formula012.png)

![rate (in bit/s) of machinenA. The following n − 1 integers are r r ( 0 1 (1 ≤ ≤ r r0 ≤ ≤ 1 1 0 09) ), where the i-th integer i i represents the push rate (in bit/s) of the -th router.](sysupc_final_2025_assets/B_p04_formula013.png)

![represents the push rate (in bit/s) of the i-thnro−ut1er.](sysupc_final_2025_assets/B_p04_formula014.png)

![The third line contains m positive integers. The i-th integer is l (1 ≤ l ≤ K), representing the number of i i bits in the -th group. It is guaranteed that .](sysupc_final_2025_assets/B_p04_formula015.png)

![bits in the i-th group. Imt is guaranteed that Σl = i K. i](sysupc_final_2025_assets/B_p04_formula016.png)

## Output

A real number, in seconds, representing the time from when machine A pushes the first bit until machine

![B completely receives the entire K bits of data that machine A intends to transmit to B. Suppose your answer is and the standard answer is . If either |Your nswer−Answer| or](sysupc_final_2025_assets/B_p04_formula017.png)

![answer is Y our nswer and theKstandard answer is Answer. If either |YourAnswer−Answer| ≤ 10−9 or A Answer |Y our nswer − Answer| ≤ 10−9 is satisfied, then your answer is considered correct. A](sysupc_final_2025_assets/B_p04_formula018.png)

## Example

### 样例输入

```text
2 2 3
2 1
1 2
```

### 样例输出

```text
3.500000000000000
```

## Note

![The data link is: A → Router 1 → B, where the push rate of A is 2 bit/s, and the push rate of Router 1 is 1 bit/s.](sysupc_final_2025_assets/B_p04_formula019.png)

is 1 bit/s.

A intends to transmit 3 bits of data to B. Before sending, A divides the data into two groups, with lengths

of 1 bit and 2 bits, respectively. A first pushes the group of length 1, followed by the group of length 2.

![The second group is completely pushed to Router 1 after waiting for 1+2 = 1.5 seconds. Since the first 2 group completely arrives at Router 1 after waiting for 1 = 0.5 seconds (i.e., the time for A to push it), 2 and Router 1 takes 1 = 1 second to completely push out the first group after fully receiving it, the second 1 group arrives at Router 1 exactly when the first group is completely pushed out from Router 1. Thus,](sysupc_final_2025_assets/B_p05_formula020.png)

the second group does not need to queue at Router 1 and can be pushed out immediately. Therefore, the

![answer is 2+1 + 2 = 3.5 seconds. 2 1](sysupc_final_2025_assets/B_p05_formula021.png)
