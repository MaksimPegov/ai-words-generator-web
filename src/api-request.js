export const generateWordsRequest = async (topic) => {
  
  const apiUrl = process.env.API_URL;
  console.log(apiUrl)
  const response = await fetch(
    'http://localhost:1001/generate',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': ''
      },
      body: JSON.stringify({ topic: topic })
    }
  )
  const data = await response.json()

  if (response.status === 400){
    throw new Error(data)
  }

  if (!response.ok) {
    throw new Error('Something went wrong! Please try again later.')
  }

  return data
};