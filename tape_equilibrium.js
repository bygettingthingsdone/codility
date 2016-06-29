<!--Author: Szczepan Barszczowski 2016-->
<!--Title: JS_Tape_Equilibrium-->


function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var leftSum = 0;
    var rightSum = 0;
    var n = A.length;
    var totalSum = 0;
    var equilibrium = 1000000;
    
    var getSum = function(total,sum){
    return (total + sum);
    }
    
    totalSum = A.reduceRight(getSum);
    
    if(n == 2){
    	return (Math.abs(A[0]-A[1]));
    }

    if(n == 1){
    	return (Math.abs(A[0]));
    }

    for(var p = 1; p<= n-1; p++){
 		leftSum += A[p-1];
 	 	rightSum = totalSum - leftSum;
 		currentMinus = Math.abs( leftSum - rightSum );
 		equilibrium = currentMinus < equilibrium ? currentMinus : equilibrium;
 		if( equilibrium === 0)
 			break;
    }
    return equilibrium;
}