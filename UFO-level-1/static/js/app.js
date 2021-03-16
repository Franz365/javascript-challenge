// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the table body
var tbody = d3.select("tbody");

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

    // Clear all data from previous searches
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputDate = inputElement.property("value");

    filterdata=tableData.filter(filterValue => filterValue.datetime===inputDate);
    
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