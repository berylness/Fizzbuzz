$(document).ready(function() {

	document.write("Fizz Buzz Challenge")
	document.write("<br/><br/>");

var div = document.getElementById('results');

for(var i = 1; i <= 100; ++i) {

    //number is divisible by 3 and 5, display "fizzbuzz"
    if (i % 3 ==0 & i % 5 ==0) {
        document.write("fizzbuzz");
        document.write("<br/>");
    } 
    //number is divisible by 3, display "fizz"
    else if (i % 3 == 0) {
        document.write("fizz");
        document.write("<br/>");
    }
    //number is divisible by 5, display "buzz"
    else if (i % 5 == 0) {
        document.write("buzz")
        document.write("<br/>");
    } 
     //number is not divisible by 3 or 5, display given number 
    else {
        document.write(i);
        document.write("<br/>");
    }
}
});