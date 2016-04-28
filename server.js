//dependencies for each module used
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var dotenv = require('dotenv');
var pg = require('pg');
var app = express();

var testData = require('./public/js/reference.json');
//var delphiSample = require('./sampleServer.json');

//client id and client secret here, taken from .env (which you need to create)
dotenv.load();

//connect to database
var conString = process.env.DATABASE_CONNECTION_URL;

//Configures the Template engine
app.engine('html', handlebars({ defaultLayout: 'layout', extname: '.html' }));
app.set("view engine", "html");
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat',
                  saveUninitialized: true,
                  resave: true}));

//set environment ports and start application
app.set('port', process.env.PORT || 3000);

//routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/delphidata', function (req, res) {
  // TODO
  // Connect to the DELPHI Database and return the proper information
  // that will be displayed on the D3 visualization
  // Table: Smoking Prevalance in Adults
  // Task: In the year 2003, retrieve the total number of respondents
  // for each gender. 
  // Display that data using D3 with gender on the x-axis and 
  // total respondents on the y-axis.


  //connect to DELPHI Database
  var pg = require('pg');


  var conString = process.env.DATABASE_CONNECTION_URL;

  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);

    }
    /* has to change th query: Query: In the year 2003, retrieve the 
    total number of respondents for each gender from the Smoking 
    Prevalence in Adults table from 1984-2013. */
    /*cdph_smoking_prevalence_in_adults_1984_2013*/
    client.query('SELECT "Geography", "2010 Total MVC Injury No.", "2011 Total MVC Injury No.", "2010 Total MVC Injury Rate", "2011 Total MVC Injury Rate" FROM cogs121_16_raw.hhsa_total_injuries_due_to_motor_vehicle_crashes_2010_2011 AS tableData',
        function(err, result) {
            if(err) {
            return console.error('error running query', err);
            }
            //console.log(result);

            var rawData = result.rows;
            var renderData = {"name": "flare", "children" : []};

            var renderRootItem  = {"name": "flare", "children" : []};

            for(i = 0; i < rawData.length; i++){
                // var renderDataItem = {};
                // renderDataItem["name"] = rawData[i].Geography;

                //var data2010 = rawData[i]["2010 Total MVC Injury No."];
                //var data2011 = rawData[i]["2011 Total MVC Injury No."];

                //renderDataItem["size"] = (data2010 + data2011)/2.0;
                //renderRootItem["children"].push(renderDataItem);


                var renderDataInjuryRate = {};
                renderDataInjuryRate["name"] = rawData[i].Geography;

                var injuryRate2010 = parseInt(rawData[i]["2010 Total MVC Injury Rate"]);
                var injuryRate2011 = parseInt(rawData[i]["2011 Total MVC Injury Rate"]);

                renderDataInjuryRate["size"] = (injuryRate2010 + injuryRate2011)/2.0;
                //console.log( rawData[i].Geography + " renderDataInjuryRate['size'] =" + (injuryRate2010 + injuryRate2011)/2.0);

                if(!isNaN(renderDataInjuryRate["size"])){
                    //console.log(rawData[i].Geography + " " +  renderDataInjuryRate["size"]);
                    renderRootItem["children"].push(renderDataInjuryRate);
                }
            }

            renderData["children"].push(renderRootItem);

            //console.log(renderData);

            res.json(renderData);

            // client.query('SELECT "Region Number", "Area" FROM cogs121_16_raw.hhsa_san_diego_demographics_county_population_2012 AS regionArea',
            //     function(err, resultArea) {
            //         if(err) {
            //             return console.error('error running query', err);
            //         }
            //         console.log(resultArea);
            //
            //         var areaNames = {};
            //         var rawData_areas = resultArea.rows;
            //
            //         for(i = 0; i < rawData_areas.length; i++){
            //
            //             areaNames["area"] = rawData_areas[i].Area;
            //         }
            //
            //         for(i = 0; i < rawData_areas.length; i++){
            //             for(j = 0; j < rawData_areas.length; j++){
            //                 if(areaNames[i])
            //             }
            //         }
            //     }
            // );

            client.end();
            //return { delphidata: result };
        });
  });

  return { delphidata: "No data present." }
});



http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
