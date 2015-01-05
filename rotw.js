var Colors = ['red', 'yellow', 'blue', 'purple', 'black' ],
	Counts = [0, 0, 0, 0, 0],
	Bag = [],
Cities = [[4, 'Boston', 'none'],
          [2, 'Providence', 'none'],
          [1, 'New Haven', 'none'],
          [5, 'New York', 'none'],
          [4, 'Philadelphia', 'none'],
          [1, 'Dover', 'none'],
          [1, 'Norfolk', 'none'],
          [2, 'Wilmington', 'none'],
          [4, 'Charleston', 'none'],
          [3, 'Savannah', 'none'],
          [2, 'Jacksonville', 'none'],
          [1, 'Columbia', 'none'],
          [2, 'Raleigh', 'none'],
          [3, 'Richmond', 'none'],
          [2, 'Washington D.C.', 'none'],
          [4, 'Baltimore', 'none'],
          [2, 'Albany', 'none'],
          [1, 'Buffalo', 'none'],
          [4, 'Pittsburgh', 'none'],
          [3, 'Wheeling', 'none'],
          [1, 'Knoxville', 'none'],
          [1, 'Chattanooga', 'none'],
          [4, 'Atlanta', 'none'],
          [1, 'Tallahassee', 'none'],
          [2, 'Mobile', 'none'],
          [1, 'Montgomery', 'none'],
          [1, 'Birmingham', 'none'],
          [3, 'Nashville', 'none'],
          [2, 'Lexington', 'none'],
          [2, 'Louisville', 'none'],
          [3, 'Cincinatti', 'none'],
          [1, 'Columbus', 'none'],
          [1, 'Cleveland', 'none'],
          [3, 'Toronto', 'none'],
          [3, 'Detroit', 'none'],
          [1, 'Toledo', 'none'],
          [1, 'Indianapolis', 'none'],
          [4, 'Chicago', 'none'],
          [2, 'Milwaukee', 'none'],
          [1, 'Rock Island', 'none'],
          [3, 'St. Louis', 'none'],
          [3, 'Memphis', 'none'],
          [1, 'Jackson', 'none'],
          [5, 'New Orleans', 'none'],
          [1, 'Shreveport', 'none'],
          [1, 'Little Rock', 'none'],
          [1, 'Dallas', 'none'],
          [1, 'Tulsa', 'none'],
          [1, 'Kansas City', 'none'],
          [1, 'Des Moines', 'none'],
          [1, 'Minneapolis', 'none'],
          [2, 'Duluth', 'none']];

function dispCities() {
	for (idx=0; idx<Cities.length; idx++) {
		id = Cities[idx][1];
		c = Cities[idx][0];
		string = Cities[idx][2];
		document.getElementById(id).innerHTML = string;
	}
}

function initCities() {
	var idx
	for (idx=0; idx<Cities.length; idx++) {
		id = Cities[idx][1];
		c = Cities[idx][0];
		string = '';
		for (j=0; j<c; j++) {
			color = pickCube();
			string = string + color + ' ';
		}
		Cities[idx][2] = string;;
	}
	dispCities();
}

function initBag() {
    var i;
    Bag = [];
	for (i=0; i<25; i++) {
		Bag.push( 0 );
		Bag.push( 1 );
		Bag.push( 2 );
		Bag.push( 3 );
		Bag.push( 4 );
	}
}

function countBag() {
	Counts = [0, 0, 0, 0, 0];

	for (i=0; i<Bag.length; i++) {
		Counts[Bag[i]]++;
	}
}

function dispBag() {
	countBag();
	document.getElementById('red').innerHTML = Counts[0]+'';
	document.getElementById('yellow').innerHTML = Counts[1]+'';
	document.getElementById('blue').innerHTML = Counts[2]+'';
	document.getElementById('purple').innerHTML = Counts[3]+'';
	document.getElementById('black').innerHTML = Counts[4]+'';

	document.getElementById('bag').innerHTML = Bag.length;
}

function pickCube(){
	cube=Math.floor(Math.random()*Bag.length);
	color = Colors[Bag[cube]];
	Bag.splice( cube, 1 );
	dispBag();
	document.getElementById('picked').innerHTML
		= cube+' out of '+Bag.length+' '+color;
	return( color );
}

function doBag(){
	initBag();
	dispBag();
}

function doColor( c ) {
	Bag.push( c );
	dispBag();
}

function doCities() {
	initCities();
	dispBag();
}

function setCookie() {
	Cookie = [ Bag, Cities ];
	document.cookie = JSON.stringify( Cookie );
}

function getCookie() {
	Cookie = JSON.parse( document.cookie );
	Cities = Cookie[1];
	dispCities();
	Bag = Cookie[0];
	dispBag();
}

$( document ).ready( function(){
	initBag();
});
