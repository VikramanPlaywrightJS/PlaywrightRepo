
//if else


function launchBrowser(){
if(browserName === "chrome") {
console.log("Chrome Browser Launched");
}else {
console.log("Unsupported browser");
}
}


let browserName = "chrome";
launchBrowser();


/*function getBrowserUsingReturn(){
if(browser === "chrome") {
return "Supported browser"
}else {
return "Unsupported browser"
}
}
let browser = "firefox";
console.log(getBrowserUsingReturn());


//if else if --> multiple conditions


function getBrowserVersion(){
if (browser==='chrome'){
return 124;
}else if(browser==='edge'){
return 123;
}else if(browser==='safari'){
return 17.4;
}else if(browser==='firefox'){
return 119;
}else {
return "Unsupported browser";
}
}
browser = "chrome";
let browserFunc = getBrowserVersion();
console.log(browserFunc);*/


//switch case


/*function getBrowserVersionOptimized(){

switch (browser) {
case "chrome":
return 124;
case "edge":
return 123
case "safari":
return 17.4
case "firefox":
return 119
default:
return "Unsupported browser"

}
}


browser = "safari";
console.log(getBrowserVersionOptimized());*/


function runTests(){

switch (testType) {
case "smoke":
console.log('smoke');
break;
case "sanity":
console.log("sanity"); 
break;
case "regression":
console.log('regression')
break;
default:
console.log("smoke")
break;

}
}


testType = "sanity";
runTests();
