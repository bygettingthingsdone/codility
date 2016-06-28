<!--Author: Szczepan Barszczowski 2016-->
<!--Title: JS_Odd_Occurrences_In_Array-->

function solution(A){
	var helper;
	for(var i = 0; i < A.length; i++){
		helper ^= A[i];
	}
	return helper;
	}


console.log(solution([3, 8, 9, 7, 6]));