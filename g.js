// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI("AIzaSyCkl99N0WdJMusNL_BgZHLYkIo5IC_P2qc");

// async function run() {

//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//   const prompt = " to convert  cpp to asm"

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

//  run();

const axios = require('axios');


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
  
    const response = await axios.request(options);
	console.log(response.data);
return response.data;}

a('who am i?')