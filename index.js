const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();
app.listen(3000, ()=> console.log('listening at 3000'));
app.use(express.static('public'));


app.get('/weather/:lat/:lon', async (request,response) => {
    const lat = request.params.lat;
    console.log(lat);
    const lon = request.params.lon;
    console.log(lon);
    const api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=eccb57ed88c64ba097cb36f1798a81f8`;
    
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
    
});

