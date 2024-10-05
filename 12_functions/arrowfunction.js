// This keyword and arrow function in js 


//this --> this keyword is used for current context ko refer karne liye   jiski abhi baat kar raha hai 
// this.username means ki abhi current context mai jo username hai vo use karo 
const user = {
    username: "rishabh",
    price:999,
    welcomemessage: function(){
        console.log(`${this.username},welcome to wesbite`)
    }
}
user.welcomemessage() //rishabh,welcome to wesbite
user.username = "sam"
user.welcomemessage() //sam,welcome to website 

//ye sam waali line isliye aa payi kyuki humne this keyword use kiya tha isliye isna current context ko liya 