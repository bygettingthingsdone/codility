<!--Author: Szczepan Barszczowski 2016-->
<!--Title: JS_Binary_Gap-->

function solution(N){
	var binary_integer = (N >>> 0).toString(2);
	var splited_binary = binary_integer.split("1");
	console.log(splited_binary);

	var max=0;
	var current=0;
	var hel=0;

	for(var i = 0, length1 = splited_binary.length; i < length1; i++){
			if (splited_binary[i]=='') {
				continue;
			}
			else if(splited_binary[i] != '' ){
				 hel = splited_binary[i];
				current = hel.length;
				 if (current>(max)) {
				 	max=current;
				 }
				}
			}
			console.log(max);
	return max;
	}





solution(15);
