import React,{useEffect, useState} from "react";
import './App.css';

const App = () => {

  const [quotes,setQuotes] = useState([]);

  useEffect(()=>{
    getQuote();
  },[])

  const getQuote = async () => {
    let quoteList = [];
    for(let i =0;i<10;i++){
      const response = await fetch("https://api.kanye.rest");
      const data = await response.json();
      quoteList[i] = data.quote;
    }
    console.log(quotes);
    setQuotes(quoteList);
    
  }
  return (
    <div className="App">
      {quotes.map(quote => (
        <p>"{quote}"</p>
      ))}
    </div>
  );
  
}

export default App;
