var people = 0;

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}


function peopleClick(number){
    people = prettify(people + number);
	
    document.getElementById("people").innerHTML = people;
	
};
var musics = document.getElementById("grandre.mp3"); 
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
    var portcost = Math.floor(200 * Math.pow(1.25,ports));     //works out the cost of this cursor
    if(people >= portcost){                                   //checks that the player can afford the cursor
        ports = ports + 1;                                   //increases number of tents
    	people = people - portcost;                          //removes the people spent
        document.getElementById('ports').innerHTML = ports;  //updates the number of tents for the user
        document.getElementById('people').innerHTML = people;  //updates the number of people for the user
    };
    var nextCost = Math.floor(200 * Math.pow(1.25,ports));       //works out the cost of the next cursor
    document.getElementById('portcost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function buybanks(){
    var bankcost = Math.floor(5000 * Math.pow(1.3,banks));     //works out the cost of this cursor
    if(people >= bankcost){                                   //checks that the player can afford the cursor
        banks = banks + 1;                                   //increases number of tents
    	people = people - bankcost;                          //removes the people spent
        document.getElementById('banks').innerHTML = banks;  //updates the number of tents for the user
        document.getElementById('people').innerHTML = people;  //updates the number of people for the user
    };
	if(banks == 1){document.getElementById('pop').style.display='block';
	document.getElementById('pop').style.display='block';
	
	}
    var nextCost = Math.floor(5000 * Math.pow(1.3,banks));       //works out the cost of the next cursor
    document.getElementById('bankcost').innerHTML = nextCost;  //updates the cursor cost for the user
};


window.setInterval(function(){
	
	peopleClick(tents);
	peopleClick(ports * 3);
	peopleClick(banks * 15);
}, 1000);



