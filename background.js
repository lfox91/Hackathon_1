
// console.log($);
// $.getScript("options.js");


var acceptedSitesObject= {url: jsonURLObj }; //object > array > objects


function timer(){
	//check time
	//stop timer
	console.log(userInputTime);
};

function openContents(){
	//should also be callled in timer when time reqiurements are met.
};

function acceptedURL(){ //end timer if it is recognized site

	
	console.log(acceptedSitesObject);
	console.log(userInputTime);
	var o = {frameId:0};


	chrome.webNavigation.onBeforeNavigate.addListener(function(o){
		
		//run openContents...
	}, acceptedSitesObject);
	

};


setInterval(acceptedURL, 500);

