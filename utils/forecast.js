const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/d6b808d53d15862635af4826e78d4175/'+latitude+','+longitude+'?units=si'

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect with the server.',undefined)
        }else if(body.error){
            callback('Unable to find the location',undefined)
        }else{
            callback(undefined,body.daily.data[0].summary+' It is currently '+body.currently.temperature+' degrees out. There is a '+body.currently.precipProbability+'% chance of rain.')
        }
    
    })


}

module.exports=forecast