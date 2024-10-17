//note - interview --> promise se koi request kari aur vaha se error agya 404  to vo  resolve mai aayega ya reject mai --> to vo response mai hi milega


//how fetch works ?-->check screenshot.png







fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
console.log(data);

})
.catch((error)=>{
console.log(error);

})

