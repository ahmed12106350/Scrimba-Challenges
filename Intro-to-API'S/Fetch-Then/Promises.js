
/*
const myPromise= new Promise((resolve,reject)=>
setTimeout(() => {
    resolve("data recieved")
    
}, 2000))

myPromise.then(result => {
    console.log(result)
})*/
async function myPromise(){
    const result = await new Promise((resolve,reject)=>
    resolve("Dat has been recieved successfully"))

    setTimeout(() => console.log(result),2000)
}
myPromise()

try {
    async function fetchDog()
    {
        const response = await fetch("https://api.scrimba.com/dog.ceo/api/breeds/image/random")
        const data = await response.json()
        console.log(data)
    }
}
catch(err){
    console.log()
}
finally{
    console.log("its a responsove website")
}