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
  
  // Convert data object to a query string
  const queryString = new URLSearchParams(options.data).toString();
  const query = new URLSearchParams(options.headers).toString();
  
  // Append query string to the base URL
  const fullUrl = options.url +query+ '?' + queryString;
  
  console.log(fullUrl);