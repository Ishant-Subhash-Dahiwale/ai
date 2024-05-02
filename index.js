const axios = require('axios');
const express=require('express')
const app =  express();
// const fs = require('fs');

// const bodyParser = require('body-parser');

// // Middleware to parse URL-encoded bodies
// app.use(bodyParser.urlencoded({ extended: false }));

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());
// app.use(express.static(__dirname));


const options = {
  method: 'POST',
  url: 'https://chat-gtp-free.p.rapidapi.com/v1/chat/completions',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '80335c2c36mshcbaa43bbcca4d24p1e1e5ejsn65f9ee36117d',
    'X-RapidAPI-Host': 'chat-gtp-free.p.rapidapi.com'
  },
  data: {
    chatId: '92d97036-3e25-442b-9a25-096ab45b0525',
    messages: [
      {
        role: 'system',
        content: 'You are a virtual assistant. Your name is Karen and you would like to be a designeeer.'
      }
    ]
  }
};
console.log("response.data");
a =  async(m)=>{  
  options.data.messages.push({role:"user",content:`${m}`});
    const response = await axios.request(options);
	console.log(response.data);
  options.data.messages.pop();
return response.data;}

var x = "";
// Route for handling GET request to the root path
// app.get('/', async(req, res) => {
//   const userInput = String(req.query.userInput);
// console.log(userInput);
//   x= await a(userInput);
//   res.send(`<p>'${String(x.text)}'<p>`);


//   res.end();
// });
let userInput = '';

app.get('/query',async (req,res)=>{
  userInput = req.query.user
  console.log(userInput);
  x= await a(userInput);
  res.send(`<p>'${String(x.text)}'<p>`);
  userInput = String(req.query.user);
  res.end();

})
// app.get('/')

    

// Route for handling POST request to the root path


app.listen(3001,()=>{
  console.log("listening");
})