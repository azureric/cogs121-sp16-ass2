// (function(d3) {
//   "use strict";

//   var data = [
//     { name: "Lolita's", rating: 7.5 },
//     { name: "Lucha Libre", rating: 8 },
//     { name: "Puesto", rating: 9.5 },
//     { name: "Rubio's", rating: 4 },
//     { name: "Taco Bell", rating: 3 },
//     { name: "Taco Stand", rating: 8.5 },
//     { name: "Taco's, El Gordo", rating: 9 },
//     { name: "Oscar's", rating: 9 },
//     { name: "Rigoberto's", rating: 6 },
//     { name: "Galaxy Taco", rating: 6.5 },
//   ];

//   // Defining the margins and chart size
//   // See margin conventions for more information
//   var margin = {top: 20, right: 10, bottom: 100, left: 40},
//       width = 960 - margin.right - margin.left,
//       height = 500 - margin.top - margin.bottom;

//   var innerWidth  = width  - margin.left - margin.right;
//   var innerHeight = height - margin.top  - margin.bottom;

//   // TODO: Input the proper values for the scales
//   var xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0);
//   var yScale = d3.scale.linear().range([height, 0]);

//   // Define the chart
//   var chart = d3
//       .select(".chart")
//       .append("svg")
//       .attr("width", width + margin.right + margin.left)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", "translate(" +  margin.left + "," + margin.right + ")");

//   // Render the chart
//   xScale.domain(data.map(function (d){ return d.name; }));

//   // TODO: Fix the yScale domain to scale with any ratings range
//   yScale.domain([0, d3.max(data, function(d) { return d.rating; })]);

//   // Note all these values are hard coded numbers
//   // TODO:
//   // 1. Consume the taco data
//   // 2. Update the x, y, width, and height attributes to appropriate reflect this


//   // Orient the x and y axis
//   var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
//   var yAxis = d3.svg.axis().scale(yScale).orient("left");

//   // TODO: Append X axis
//   chart
//       .append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis)
//       .selectAll("text")
//       .attr("y", 0)
//       .attr("x", -7)
//       .attr("transform", "rotate(-45)")
//       .style("text-anchor", "end");



//   // TODO: Append Y axis
//   chart.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)


//   // chart
//   //     .selectAll(".bar")
//   //     .data([10, 20, 30, 40])
//   //     .enter().append("rect")
//   //     .attr("class", "bar")
//   //     .attr("x", function(d, i) { return i*100; })
//   //     .attr("width", 100)
//   //     .attr("y", function(d) { return d*10; })
//   //     .attr("height", function(d) { return innerWidth - d; });
//   chart
//       .selectAll(".bar")
//       .data(data)
//       .enter().append("rect")
//       .attr("class", "bar")
//       .attr("x", function(d) { return xScale(d.name); })
//       .attr("width", 70)
//       .attr("y", function(d) { return yScale(d.rating); })
//       .attr("height", function(d) { return height - yScale(d.rating); });



//   // ASSIGNMENT PART 1B
//   // Grab the delphi data from the server
//   d3.json("/delphidata", function(err, data) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("Data", data);

//     showDelphiData(data);
//   });

// })(d3);






// function showDelphiData(data){

//   // Defining the margins and chart size
//   // See margin conventions for more information
//   var margin = {top: 20, right: 10, bottom: 100, left: 70},
//       width = 960 - margin.right - margin.left,
//       height = 500 - margin.top - margin.bottom;

//   var innerWidth  = width  - margin.left - margin.right;
//   var innerHeight = height - margin.top  - margin.bottom;

//   // TODO: Input the proper values for the scales
//   var xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0);
//   var yScale = d3.scale.linear().range([height, 0]);

//   d3.select(".chart").append("h1").text("Gender vs. Total Respondents");

//   // Define the chart
//   var chart = d3
//       .select(".chart")
//       .append("svg")
//       .attr("width", width + margin.right + margin.left)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", "translate(" +  margin.left + "," + margin.right + ")");


//   // Render the chart
//   xScale.domain(data.map(function (d){ return d.gender; }));

//   // TODO: Fix the yScale domain to scale with any ratings range
//   yScale.domain([0, d3.max(data, function(d) { return d.number_of_respondents; })]);

//   // Note all these values are hard coded numbers
//   // TODO:
//   // 1. Consume the taco data
//   // 2. Update the x, y, width, and height attributes to appropriate reflect this


//   // Orient the x and y axis
//   var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
//   var yAxis = d3.svg.axis().scale(yScale).orient("left");

//   // TODO: Append X axis
//   chart
//       .append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis)
//       .selectAll("text")
//       .attr("y", 0)
//       .attr("x", -7)
//       .attr("transform", "rotate(-45)")
//       .style("text-anchor", "end");



//   // TODO: Append Y axis
//   chart.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)


//   // chart
//   //     .selectAll(".bar")
//   //     .data([10, 20, 30, 40])
//   //     .enter().append("rect")
//   //     .attr("class", "bar")
//   //     .attr("x", function(d, i) { return i*100; })
//   //     .attr("width", 100)
//   //     .attr("y", function(d) { return d*10; })
//   //     .attr("height", function(d) { return innerWidth - d; });
//   chart
//       .selectAll(".bar")
//       .data(data)
//       .enter().append("rect")
//       .attr("class", "bar")
//       .attr("x", function(d) { return xScale(d.gender); })
//       .attr("width", function(d) { return (width/3 - 30);})
//       .attr("y", function(d) { return yScale(d.number_of_respondents); })
//       .attr("height", function(d) { return height - yScale(d.number_of_respondents); });
// }