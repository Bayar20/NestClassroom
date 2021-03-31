const axios = require('axios');
const chalk = require('chalk');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Цаг агаарын мэдээ авах байршлийг оруулна уу: ", (input) => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=pk.eyJ1IjoibWFuYWdlcmJidHQiLCJhIjoiY2ttd3lhNWlrMGh6ejJxcGZ3OGd6anB5byJ9.Zb3Yo_OvSCTGgPaEyDi5tw`)
      .then(function (response) {
        // handle success
        let cities = response.data.features 
        for (i = 0; i < cities.length; i++){
            console.log(`${chalk.yellow(i,'.')}`, `${chalk.green('Газрын нэр:')}`, `${chalk.yellow(cities[i].place_name)}`, `${chalk.green('Lat: ')}`, `${chalk.yellow(cities[i].center[1])}`, `${chalk.green('Long: ')}`, `${chalk.yellow(cities[i].center[0])}`)
        }

        rl.question ('Зөв хаягийг сонгоно уу: ', (choice) => {
           
           let latitude = cities[choice].center[1];
           let longitude = cities[choice].center[0];
           rl.close()
           weatherShow(latitude, longitude)
           
        })
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    
});



let weatherShow = (lat, long) => axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${lat},${long}`)
  .then(function (response) {
    // handle success
    let calcCelsius = (input) => {
        return Math.round((input - 32) * 5 / 9 * 100) / 100
    }

    let temp = `${calcCelsius(response.data.currently.temperature)}^C`;
    let precip = response.data.currently.precipProbability;
    console.log(chalk.green('Яг одоо: '), `${chalk.yellow(temp) }`, chalk.green('градус'),);
    console.log(chalk.green(`Цас бороо орох магадлал: `), `${chalk.yellow(precip)}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  

