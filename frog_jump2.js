<!--Author: Szczepan Barszczowski 2016-->
<!--Title: JS_Odd_Occurrences_In_Array-->

function solution(X,Y,D){
	var pom;
	if((Y-X) % D == 0){
		return (Y-X)/D;
		}
	pom = parseInt((Y-X)/D+1);
	}
