const express = require('express');
//create data store
const DataStore = require('nedb');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();
app.listen(3000, ()=> console.log('listening at 3000'));
app.use(express.static('public'));

//create database file locally
const database = new DataStore('database.db');
database.loadDatabase();
//database.insert({name:'momo', status:'swell'});
//database.insert({name:'momo', status:'noice'});

let createDate = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let dayIndex = createDate.getDay();
let monthIndex = createDate.getMonth();
let month = months[monthIndex]; 
let numMonth = createDate.getDate();
let day = days[dayIndex];
console.log("day " + day );
console.log("month" + month);

database.insert({day: `${day}`, month: `${month}`, numMonth: `${numMonth}`});
database.find({}, function(err, output){
    if(err){
        console.log("error");
    }
    let returnMonth = output[0].month;
    let returnDay = output[0].day;
    let returnNumMonth = output[0].numMonth;
    let returnDateData = returnMonth + " " + returnNumMonth;
    console.log(returnDateData + "rdd");
    
    console.log("day" + output[0].day + "month" + output[0].month + "numMonth" + output[0].numMonth);
});



app.get('/weather/:lat/:lon', async (request,response) => {
    const lat = request.params.lat;
    console.log(lat);
    const lon = request.params.lon;
    console.log(lon);
    const api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=eccb57ed88c64ba097cb36f1798a81f8`;
    
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
    
});

