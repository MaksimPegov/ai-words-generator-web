export const generateWordsRequest = async (topic) => {

  const response = await fetch(
    'http://words-generator-api/generate',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
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