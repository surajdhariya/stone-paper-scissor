# stone-paper-scissor
stone-paper-scissor using java script
import java.util.Scanner;
public class JavaExample {
   public static void main(String[] args)
   {
	//Two variables to hold two input binary numbers	 
	long b1, b2;
	int i = 0, carry = 0;

	//This is to hold the output binary number
	int[] sum = new int[10];

	//To read the input binary numbers entered by user
	Scanner scanner = new Scanner(System.in);

	//getting first binary number from user
	System.out.print("Enter first binary number: ");
	b1 = scanner.nextLong();
	//getting second binary number from user
	System.out.print("Enter second binary number: ");
	b2 = scanner.nextLong();

	//closing scanner after use to avoid memory leak
	scanner.close();
	while (b1 != 0 || b2 != 0) 
	{
		sum[i++] = (int)((b1 % 10 + b2 % 10 + carry) % 2);
		carry = (int)((b1 % 10 + b2 % 10 + carry) / 2);
		b1 = b1 / 10;
		b2 = b2 / 10;
	}
	if (carry != 0) {
		sum[i++] = carry;
	}
	--i;
	System.out.print("Output: ");
	while (i >= 0) {
		System.out.print(sum[i--]);
	}
	System.out.print("\n");  
   }
}






car



#include<stdio.h>;

#include<graphics.h>;

#include<conio.h>;

#include<dos.h>;

int main()

{

int gd=DETECT,gm;

int i,maxx,midy;
initgraph(&gd,&gm,"C:\\TURBOC3\\BGI");

maxx=getmaxx();

midy=getmaxy()/2;

for(i=0;maxx-150;i=i+5)

{

cleardevice();

line(0,midy+37,maxx,midy+37);

setcolor(YELLOW);

setfillstyle(SOLID_FILL,RED);

line(i,midy+23,i,midy);

line(i,midy,40+i,midy-20);

line(40+i,midy-20,80+i,midy-20);

line(80+i,midy-20,100+i,midy);

line(100+i,midy,120+i,midy);

line(120+i,midy,120+i,midy+23);

line(0+i,midy+23,18+i,midy+23);

arc(30+i,midy+23,0,180,12);

line(42+i,midy+23,78+i,midy+23);

arc(90+i,midy+23,0,180,12);

line(102+i,midy+23,120+i,midy+23);

line(28+i,midy,43+i,midy-15);

line(43+i,midy-15,57+i,midy-15);

line(57+i,midy-15,57+i,midy);

line(57+i,midy,28+i,midy);

line(62+i,midy-15,77+i,midy-15);

line(77+i,midy-15,92+i,midy);

line(92+i,midy,62+i,midy);

line(62+i,midy,62+i,midy-15);

floodfill(5+i,midy+22,YELLOW);

setcolor(BLUE);

setfillstyle(SOLID_FILL,DARKGRAY);

circle(30+i,midy+25,9);

circle(90+i,midy+25,9);

floodfill(30+i,midy+25,BLUE);

floodfill(90+i,midy+25,BLUE);

/*Add delay of 0.1 milli seconds*/

delay(100);

if(i==485)

i=0;

else if(kbhit())

break;

}

getch();

closegraph();

return 0;

}


