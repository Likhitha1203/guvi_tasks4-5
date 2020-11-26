//ARRAY METHODS

// Get all the countries from Asia continent using Filter function
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload= function(){
	var data = JSON.parse(this.response);
	var AsianCountries = data.filter(item => item.region=="Asia")
    console.log(AsianCountries)
}


// Get all the countries with population of less than 2 lacs using Filter function
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload= function(){
	var data = JSON.parse(this.response);
	var population = data.filter(item => item.population<200000)
    console.log(population)
}


// Print the following details name, capital, flag using forEach function
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload= function(){
	var data = JSON.parse(this.response);
    data.forEach((i) => {
console.log(i["name"])
console.log(i["capital"])
console.log(i["flag"])})
}
// Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload= function(){
	var data = JSON.parse(this.response);
	var population = data.filter(item => item.population)
var population_sum = population.reduce((result,item) => {return result + item.population},0)
console.log(population_sum)
}


// Print the total population of countries in Asia continent using reduce and filter function
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload= function(){
	var data = JSON.parse(this.response);
	var AsianCountries = data.filter(item => item.region=="Asia")
    var population = AsianCountries.filter(item => item.population)
var population_sum = population.reduce((result,item) => {return result + item.population},0)
console.log(population_sum)
}


// Print the country which use US Dollars as currency.
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload= function(){
	var data = JSON.parse(this.response);
var USDollarCountries = data.filter((i) => {return i.currencies[0]["code"] == "USD"})
console.log(USDollarCountries)
}


// Add error handling to the xml http request code
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload= function(){
	var data = JSON.parse(this.response);
var USDollarCountries = data.filter((i) => {return i.currencies[0]["code"] == "USD"})
console.log(USDollarCountries)
	try
	{
		if(USDollarCountries.length == 14)
		{
			throw new ReferenceError('Filtering US Dollar Countries are correct')
		}
	}
	catch(error) 
	{
		alert(error.message)
	}
}