const axios = require('axios');
const express=require('express')
const app =  express();
const fs = require('fs');

const bodyParser = require('body-parser');

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(express.static(__dirname));


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


// Route for handling GET request to the root path
app.get('/', (req, res) => {

  fs.readFile(__dirname + '/index.html', 'utf8', (err, html) => {
    if (err) {
        console.error('Error reading HTML file:', err);
        res.status(500).send('Internal Server Error');
        return;
    }
    res.send(html); // Send the HTML file as response
});
  // res.sendFile("./index.html");
  // res.end();
});

// Route for handling POST request to the root path
app.post('/', async(req, res) => {
  const userInput = String(req.body.userInput);
console.log(userInput);
  var x= await a(userInput);
x= 
  res.send(`<p> '${String(x.text)}'</p>`);
});

app.listen(3000,()=>{
  console.log("listening");
})