const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyCkl99N0WdJMusNL_BgZHLYkIo5IC_P2qc");

async function run(prompt) {

  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // const prompt = "who are you?"
  // const result = await model.sendMessage(prompt);

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text.toString();
}



const axios = require('axios');
const express=require('express')
const app =  express();
console.log("response.data");
// a =  async(m)=>{  
//   options.data.messages.push({role:"user",content:`${m}`});
//     const response = await axios.request(options);
// 	console.log(response.data);
//   options.data.messages.pop();
// return response.data;}

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
  x= await run(userInput);
  res.send(`<p>'${String(x)}'<p>`);
  // userInput = String(req.query.user);
  res.end();

})
// app.get('/')

    

// Route for handling POST request to the root path


app.listen(3001,()=>{
  console.log("listening");
})