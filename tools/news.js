const request = require('request')
const news = (callback)=>{
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-01-19&sortBy=publishedAt&apiKey=51389acf026b4b08bfedfbed0bdbab8f'
request({url,json:true},(error,data)=>{

    if(error){
       callback('error ',undefined)
    }
    else if(data.body.data){
      callback('Dontfind news',undefined)
    }
    else{
       callback(undefined, data.body.articles)
    }

})
}


module.exports = news