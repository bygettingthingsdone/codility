<!--Author: Szczepan Barszczowski 2016-->
<!--Title: JS_Frog_Jump-->

function solution(X,Y,D){
		count=0;
		while(X<Y){
			X+=D;
		count++;
	}
	return count;
		}

