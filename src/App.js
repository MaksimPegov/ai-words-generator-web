import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import './App.css';
import { useState } from 'react';
import { generateWordsRequest } from './api-request';

function App() {
  const [words, setWords] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  }

  const generateWords = async () => {
    setError('')
    setLoading(true)
    setWords([])
    try {
      const data = await generateWordsRequest(input)
      console.log(data)
      setWords(data)
      setError('')
      setLoading(false)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
    setInput('')
  }
  
  return (
    <div className="App">
      <div className='TitleContainer'>
        <h1 
          className='Title AI'
        >
          AI
        </h1>
        <Typography 
          className='Title' 
          variant="button" 
          display="block" 
          gutterBottom
        >
          words generator
        </Typography>
      </div>

      <div className='DescriptionContainer'>
        <h3 className='DescTitle'>How to use:</h3>
        <p className='Description'>
          <b>1.</b> Enter your request in the text field below.<br/>
          <b>2.</b> Specify the number of words you want to generate. <b>{"(Up to 10 is allowed)"}</b><br/>
          <b>3.</b> Indicate the topic of the words you want to generate.<br/>
        </p>
          <p className='Attention'><b>Attention:</b> Grammatical errors may occur due to the nature of the AI model..</p>
        <p className='Description Example'>Example: "Name me 5 flowers in spanish language"</p>
      </div>

      <form onSubmit={generateWords}>
      <div className='InputContainer'>
        <TextField 
          className="Input" 
          id="outlined-basic" 
          label="Enter your prompt here!" 
          variant="outlined" 
          autoComplete="off"
          value={input}
          onChange={inputChangeHandler}
          type='text'
        />

        <Button 
          className="Button" 
          variant="contained"
          disabled={input.length === 0 || loading}
          onClick={generateWords}
          type='submit'
        >
          generate
        </Button>
      </div>
      </form>

      <div className='WordsContainer'>
        {!loading && words && words.length > 0 ? words.map((word, index) => (
          <Typography 
            key={index}
            className='Word' 
            variant="button" 
            display="block" 
            gutterBottom>
            {word}
          </Typography>
        ))
        :
        loading ?
        <div className='Loading'>
            <Typography 
              className='LoadingText' 
              variant="button" 
              display="block" 
              gutterBottom>
              Loading...
            </Typography>
            <CircularProgress className='Progress'/>
          </div>
          : null
        }
      </div>

      {
        error ?
        <Alert className='Alert' severity="error">{error}</Alert>
        : null
      }
    </div>
  );
}

export default App;
