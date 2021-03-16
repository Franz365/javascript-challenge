// from data.js
var tableData = data;

// Select the table body
var tbody=d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Iterate through the data and create rows and cells, and log out the 
tableData.forEach(function(ufodata){
    console.log(ufodata);
    var row=tbody.append("tr");
    Object.entries(ufodata).forEach(function([key, value]){
        var cell=row.append("td");
        cell.text(value);
    });
});

// Create event handlers
button.on("click",runenter);
button.on("submit",runenter);

// Complete the event handler function for the form
function runenter(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the value property
    var inputDate=d3.select("#datetime").property("value");
    var inputCity=d3.select("#city").property("value");
    var inputState=d3.select("#state").property("value");
    var inputCountry=d3.select("#country").property("value");
    var inputShape=d3.select("#shape").property("value");
    var filterdata=tableData;
    if (inputDate) {
        filterdata=tableData.filter(filterValue => filterValue.datetime===inputDate);
    }
    if (inputCity) {
        filterdata=filterdata.filter(filterValue => filterValue.city===inputCity);
    }
    if (inputState) {
        filterdata=filterdata.filter(filterValue => filterValue.state===inputState);
    }
    if (inputCountry) {
        filterdata=filterdata.filter(filterValue => filterValue.country===inputCountry);
    }
    if (inputShape) {
        filterdata=filterdata.filter(filterValue => filterValue.shape===inputShape);
    }

   //remove anything from the list
   tbody.html("");

   // log the filtered values
   console.log(filterdata);

   // append filtered values to the list
   filterdata.forEach(function(ufodata){
       console.log(ufodata);
       var row=tbody.append("tr");
       Object.entries(ufodata).forEach(function([key, value]){
           var cell=row.append("td");
           cell.text(value);
        });

    });

};
