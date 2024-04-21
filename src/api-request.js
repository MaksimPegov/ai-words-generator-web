export const generateWordsRequest = async (topic) => {
  const response = await fetch(
    'http://192.168.92.130:5001/generate',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topic: topic })
    }
  )
  const data = await response.json()

  if (response.status === 400){
    throw new Error('Invalid request! Please read the instructions and try again.')
  }

  if (!response.ok) {
    throw new Error('Something went wrong! Please try again later.')
  }

  return data
};