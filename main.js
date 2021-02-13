
function checkPalindrome(inputString) {
	console.log(inputString.split(''));
	console.log(inputString.split('').reverse());
	console.log(inputString.split('').reverse().join(''));
}

function mult(input_one, input_two){

	return  Math.pow((input_one*input_two),2);
}

function even_or_odd(input_integer){
	var y;
	if(input_integer%2 == 0){
		return input_integer+" is an even number.";
	}
	else if(input_integer%2 == 1){
		return input_integer+" is an odd number.";
	}
	else{
		return input_integer+" is not an integer.";
	}
}

function integer_or_not(input_integer){
	if(input_integer<0){
		return input_integer+" is negative number.";
	}
	else if(input_integer>0){
		return input_integer+" is positive number";
	}
	else{
		return input_integer+" is 0."
	}
}

function centuryFromYear(year) {
    if(year%100 == 0){
        return year/100; 
    }
    else if(year%100 != 0){
        return Math.trunc(year/100)+1;
    }
}

let my_array = ["ab", "cd", "ef", "gh", "ijk", "lmn"];
let my_array_2 = [3, 6, 9 ,12, 15, 18, 21];


for(let i=0; i < my_array_2.length; i++){
	console.log("Before code: i = "+i+" element = "+my_array_2[i]);
	my_array_2[i] = my_array_2[i] * 2;
	console.log("After code, element = "+my_array_2[i]);
}

console.log(my_array_2);

for(let i=0; i < my_array.length; i++){
	if(my_array[i].length == 2,3){
		console.log(my_array[i]);

	}
}