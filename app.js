console.log('welcome to weather App');
console.log('use these commands to use the functionality of weather app:');
console.log('1. To Add address: node app.js -a "your address or zip code" or node app.js --address "your address or zip code");                                                                                  
console.log('------------------------------------------------');
console.log('starting app....');


const yargs=require('yargs');

const geocode=require('./geocode/geocode.js');

const weather=require('./weatherdata/weather.js');

const argv= yargs
.options({

	a:{
		demand:true,
		alias: 'address',
		describe:'address for weather app',
		string:true
}

})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{


		if(errorMessage)
		{
			console.log(errorMessage);
		}
		else
		{
			console.log(`Address:${JSON.stringify(results.Address)}`);

			weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherresults)=>{

			if(errorMessage)
			{
				console.log(errorMessage);
			}
			else
			{
				console.log(JSON.stringify(weatherresults,undefined,4));
			}

});

}

});
