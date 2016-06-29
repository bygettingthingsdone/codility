<!--Author: Szczepan Barszczowski 2016-->
<!--Title: JS_Perm_Missing_Element-->


function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var n = A.length;
    var sum = (n+1)*(n+2)/2;

    for( i = 0; i < n; i++ ){
        sum -= A[i];
    }
    return sum;
}