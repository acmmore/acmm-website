# J. Abyssal Echoes

Time limit: 1 second

Memory limit: 256 megabytes

我们并排坐在深深的海底，看着波澜的海浪把阳光

切碎。

—佚名

你醒来，丝缕光线透过沉沉的海水，游曳在你和她的身边。

迷茫地起身，一只章鱼惊慌地从她的手上跃起，舞动着长长的腕足，消失在了深海里。“啊！真是的... 你把它吓跑

了... ” 她直勾勾地盯着你，落寞地说，“我们在聊很重要的事情呢”。

什么呀，这样的，“我听到了哦，是在说我的坏话吧。”

一瞬，偌大的海床只剩下了深海的回响。终于，她抿着唇，咯咯地笑起来，“你又不知道它的频率，你怎么知道呢？”

![深海里的生物们，都有着自己的频率。它们说出的所有话，都会异或上一个频率常数。假设章鱼的频率是 x，人鱼](sysuNovice_warmup_2024_assets/J_p15_formula001.png)

![的频率是 y，为了传输消息 t，他们要说三句话：](sysuNovice_warmup_2024_assets/J_p15_formula002.png)

![1. 章鱼对人鱼说出：x ⊕ t](sysuNovice_warmup_2024_assets/J_p15_formula003.png)

![2. 人鱼对章鱼说出：y ⊕ x ⊕ t](sysuNovice_warmup_2024_assets/J_p15_formula004.png)

![3. 章鱼对人鱼说出：y ⊕ t](sysuNovice_warmup_2024_assets/J_p15_formula005.png)

![现在人鱼就能够知道 t 究竟是什么了。](sysuNovice_warmup_2024_assets/J_p15_formula006.png)

![作为原人类的你，当然知道这一些知识。刚刚，你也偷听到了 x ⊕ t、y ⊕ x ⊕ t 和 y ⊕ t 。你决心告诉人鱼小姐 x、](sysuNovice_warmup_2024_assets/J_p15_formula007.png)

![y 和 t，来证明你有读心术。](sysuNovice_warmup_2024_assets/J_p15_formula008.png)

但是，你已经很久很久没有算过数了。“你能帮我算一算吗？” 你对着趴在肩上的小海星问道。

![请你给小海星写一个程序，让它按照程序，帮忙计算 x、y 和 t。](sysuNovice_warmup_2024_assets/J_p15_formula009.png)

## Input

![输入数据分为多组数据。第一行输入一个整数 T，代表数据组数。](sysuNovice_warmup_2024_assets/J_p16_formula010.png)

![接下来 T 组数据，每组数据输入一行，含三个整数，代表 x ⊕ t、y ⊕ x ⊕ t 和 y ⊕ t。](sysuNovice_warmup_2024_assets/J_p16_formula011.png)

## Output

![对于每一组数据，输出三个整数，x、y 和 t。](sysuNovice_warmup_2024_assets/J_p16_formula012.png)

## Example

### 样例输入

```text
3
203 0 79
135 0 22
15 0 115
```

### 样例输出

```text
79 203 132
22 135 145
115 15 124
```

## Note

![输入数据满足：0 ≤ x,y,t < 264。](sysuNovice_warmup_2024_assets/J_p16_formula013.png)

![其中 ⊕ 表示按位异或，x ⊕ y 即在二进制下，x 与 y 按对应位进行异或。异或的运算规则为相同为 0 ，不同为 1 。](sysuNovice_warmup_2024_assets/J_p16_formula014.png)

![例如 3 ⊕ 6 =  0011  ⊕  0110  =  0101  = 5 ，在 C/C++/Python 语言中用脱字符实现。例如 2 2](sysuNovice_warmup_2024_assets/J_p16_formula015.png)

1 a^b

注意，由于数据较大，你需要使用 unsigned long long。在 linux 下使用 C 语言的你需要使用%llu 输入整数：

1 unsigned long long a ;

2 scanf (”%llu ” , &a) ;
