<!--Author: Szczepan Barszczowski 2016-->
<!--Title: JS_Cyclic_Rotation-->

function solution(A,K){
	while(A.length && K>0){
	A.unshift(A.pop());
	K--
	}
	return A;
	}


console.log(solution([3, 8, 9, 7, 6],3));