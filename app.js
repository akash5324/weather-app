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