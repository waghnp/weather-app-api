const request=require('request')
const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')

const address=process.argv[2]

// console.log("Input From Console "+process.argv)
// console.log("Input From Console "+process.argv[0])
// console.log("Input From Console "+process.argv[1])
// console.log("Input From Console "+process.argv[2])

if(!address){
    console.log("Please provide an address")
}else{
    geocode(address,(error,{latitude,longitude,location})=>{
        if(error){
            return console.log(error)
        }
        forecast(latitude,longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
          })
    })
}






