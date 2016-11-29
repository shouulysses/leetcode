
function uniquePaths(m, n) {
    if(m === 1 || n === 1){
        return 1
    }else{
        m--;
        n--;
	    return factorial(m + n) / (factorial(m) * factorial(n));
    }
}

function factorial(x) {
   	return x == 1 ? 1 : x*factorial(x-1);
}
