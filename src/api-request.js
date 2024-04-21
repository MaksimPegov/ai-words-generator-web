export const generateWordsRequest = async (topic) => {
  const response = await fetch(
    'https://steady-firefly-grand.ngrok-free.app/generate',
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