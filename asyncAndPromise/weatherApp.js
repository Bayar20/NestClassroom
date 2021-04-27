const axios = require('axios');
const chalk = require('chalk');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ACCESS_TOKEN = 'pk.eyJ1IjoibWFuYWdlcmJidHQiLCJhIjoiY2ttd3lhNWlrMGh6ejJxcGZ3OGd6anB5byJ9.Zb3Yo_OvSCTGgPaEyDi5tw'

const getMapBoxUrl = (location) => {
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${ACCESS_TOKEN}`
}

rl.question("Цаг агаарын мэдээ авах байршлийг оруулна уу: ", (location) => {
    const mapBoxUrl = getMapBoxUrl(location);
    axios.get(mapBoxUrl)
      .then(function (response) {
        // handle success
        let cities = response.data.features
        // console.log(response.data.features)
        if (cities.length === 0){
          console.log(chalk.green('Ийм нэртэй газар олдсонгүй. Дахин эхлэнэ үү.'))
          rl.close()
        } else if (cities.length === 1){
          const [lng, lat] = cities[0].center
          weatherShow(lat,lng)
          rl.close()
        } else {
          for (i = 0; i < cities.length; i++){
            console.log(chalk.yellow(i,'.'), chalk.green('Газрын нэр:'), chalk.yellow(cities[i].place_name.padStart(100)), chalk.green('Lat: '), chalk.yellow(cities[i].center[1].toString().padStart(10)), chalk.green('Long: '), chalk.yellow(cities[i].center[0]))
          }
          
          rl.question ('Зөв хаягийг сонгоно уу: ', (choice) => {
            choice = parseInt(choice);

            if (choice >= cities.length) {
              console.log(chalk.red('Та буруу утга оруулсан байна. Дахин эхлэнэ үү.'));
              rl.close()
            } else {
              const [lng, lat] = cities[choice].center;
              console.log(lng,lat)
              rl.close()
              weatherShow(lat, lng)
            }
          })
        }
      })
      .catch(function (error) {
        if(error.response == undefined){
          console.log(chalk.red('Алдаа: Мэдээлэл ирсэнгүй.'));
          rl.close()
        } else {
          console.log('MapBox руу хүсэлт явуулахад алдаа гарлаа');
          rl.close()
        }
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
    let precip = response.data.currently.precipProbability * 100;
    let hourly = response.data.hourly.summary;

    console.log(chalk.green('Яг одоо: '), chalk.yellow(temp), chalk.green('градус'),);
    console.log(chalk.green(`Цас бороо орох магадлал: `), chalk.yellow(precip,'%'));
    console.log(chalk.green('Цаг агаарын өнөөдрийн төлөв: '), chalk.yellow(hourly))
  })
  .catch(function (error) {
    // handle error
    console.log('DarkSky руу хүсэлт явуулахад алдаа гарлаа');
  })
  .then(function () {
    // always executed
  });

  

