var people = 0;
var musics = document.getElementById("grandre.mp3"); 

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}


function peopleClick(number){
    people = prettify(people + number);
	
    document.getElementById("people").innerHTML = people;
	
};


var tents = 0;
var ports = 0;
var banks = 0;
function buytents(){
    var tentcost = Math.floor(20 * Math.pow(1.15,tents));     //works out the cost of this cursor
    if(people >= tentcost){                                   //checks that the player can afford the cursor
        tents = tents + 1;                                   //increases number of tents
    	people = people - tentcost;                          //removes the people spent
        document.getElementById('tents').innerHTML = tents;  //updates the number of tents for the user
        document.getElementById('people').innerHTML = people;  //updates the number of people for the user
    };
    var nextCost = Math.floor(20 * Math.pow(1.15,tents));       //works out the cost of the next cursor
    document.getElementById('tentcost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function buyports(){
    var portcost = Math.floor(200 * Math.pow(1.25,ports));     
    if(people >= portcost){                                   
        ports = ports + 1;                                   
    	people = people - portcost;                          
        document.getElementById('ports').innerHTML = ports;  
        document.getElementById('people').innerHTML = people;  
    };
    var nextCost = Math.floor(200 * Math.pow(1.25,ports));       
    document.getElementById('portcost').innerHTML = nextCost;  
};

function buybanks(){
    var bankcost = Math.floor(5000 * Math.pow(1.3,banks));     
    if(people >= bankcost){                                   
        banks = banks + 1;                                   
    	people = people - bankcost;                          
        document.getElementById('banks').innerHTML = banks;  
        document.getElementById('people').innerHTML = people;  
    };
	if(banks == 1){document.getElementById('pop').style.display='block';
	document.getElementById('pop').style.display='block';
	
	}
    var nextCost = Math.floor(5000 * Math.pow(1.3,banks));       
    document.getElementById('bankcost').innerHTML = nextCost;  
};


window.setInterval(function(){
	
	peopleClick(tents * levelamount * power);
	peopleClick(ports * 3 * power);
	peopleClick(banks * 15 * power);
}, 1000);


// UPGRADES 


var levelamount = 1;
function marketupgrade(){
    var marketupgradecost = 200                                        //works out the cost of this cursor
    if(people >= marketupgradecost){                                   //checks that the player can afford the cursor
        levelamount = levelamount + .2;                                   //increases number of tents
    	people = people - marketupgradecost;       		//removes the people spent
        document.getElementById('people').innerHTML = people;  //updates the number of people for the user
        document.getElementById("upgrademarket").style.display="none";	// gets rid of the button
		document.getElementById("marketupgradepara").style.display="none";	// gets rid of the button text
    };

};

// POWER Events

window.setInterval(timefunction, 180000);	
function timefunction(){   
    if(Math.random() * 100 < 50){
	document.getElementById("eventsdiv").style.display="block";
	}
	else if (Math.random() * 100 > 50){
	document.getElementById("eventsdiv2").style.display="block";	
	}
	
}

// POWER Events 1	
var power = 1;

  var eventcost = 2000 
function yeschoice(){
	if(people >= eventcost){                                   //checks that the player can afford the cursor
		people = people - eventcost;                          //removes the people spent
		document.getElementById("eventsdiv").style.display="none"
	if(Math.random() * 100 < 40) {
		power = power + 1; 
		document.getElementById('power').innerHTML = power;
		};
	};
} 
function nochoice(){
	if(Math.random() * 100 < 50){
	 if(power >= 2){       
		power = power - 1; 
		document.getElementById('power').innerHTML = power;
	};};
	 document.getElementById("eventsdiv").style.display="none";
}

// POWER Events 2 Sultan


function yeschoice2(){

	if(Math.random() * 100 < 30) {
		power = power + 4; 
		document.getElementById('power').innerHTML = power;
		};
		
		document.getElementById("eventsdiv2").style.display="none"
	}
 


