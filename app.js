/*
 * 	3G Speed Calculator
 *	Developed by AbsoluteDouble
 *	GitHub: https://github.com/jake-cryptic/3g-speed
 * 	Website: https://absolutedouble.co.uk/
*/

if (!window.location.host.includes("absolutedouble.co.uk")){
	console.log("\n3G Theoretical Throughput Calculator");
	console.log("Developed by AbsoluteDouble");
	console.log("Website: https://absolutedouble.co.uk");
	console.log("Github: https://github.com/jake-cryptic/3g-speed");
}

// For more info on the LAA band, see here: https://en.wikipedia.org/wiki/LTE_in_unlicensed_spectrum

// Fallback for jQuery
if (!window.jQuery){
	var j = document.createElement("script");
	j.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
	j.type = "text/javascript";
	document.head.append(j);
}

let s3g = {
	
	app:{
		init:function() {
			
		}
	}
	
};