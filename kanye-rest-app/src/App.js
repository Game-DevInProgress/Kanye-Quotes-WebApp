import React,{useEffect, useState} from "react";
import Quote from "./Quote";
import './App.css';

const images = [
  "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_42/3513498/211019-ye-kanye-west-mb-1112.JPG",
  "https://www.gannett-cdn.com/presto/2021/08/06/USAT/aea3c900-0159-4fd0-947e-6ad8d4e3d79e-AP_Music_Kanye_West.jpg?crop=2999,1687,x1,y0&width=2999&height=1687&format=pjpg&auto=webp",
  "https://pagesix.com/wp-content/uploads/sites/3/2021/10/kanye-name-change.jpg?quality=80&strip=all&w=618&h=410&crop=1",
  "https://www.gannett-cdn.com/presto/2020/06/07/USAT/99b83fac-f9e2-469c-9be1-39ce22f6caba-25426.jpg",
  "https://static.independent.co.uk/2021/12/16/11/newFile-9.jpg?quality=75&width=1200&auto=webp",
  "https://e3.365dm.com/21/08/2048x1152/2372108290423928107_5494583.jpg",
  "https://www.hellomagazine.com/imagenes/celebrities/20210825120425/kanye-west-legally-changes-name-ye/0-581-941/kanyewest-t.jpg",
  "https://i.pinimg.com/originals/df/25/96/df2596b086219446585c8c78e6a94a75.jpg",
  "https://www.mandatory.com/assets/uploads/2022/02/GettyImages-1366439992-e1644795337767.jpg"
]

const App = () => {

  const [quotes,setQuotes] = useState([]);

  useEffect(()=>{
    getQuote();
  },[]);

  async function getImage(){
    let number = Math.random() * images.length;
    console.log(number.toFixed(0)-1);
    return(images[number.toFixed(0)-1]);
  }

  const getQuote = async () => {
    let quoteList = [];
    
    for(let i =0;i<10;i++){
      let quotePackage = {};
      const response = await fetch("https://api.kanye.rest");
      const data = await response.json();
      const image = await getImage();
      quotePackage["quote"] = data.quote;
      quotePackage["image"] = image;
      quoteList[i] = quotePackage;
    }
    console.log(quoteList);
    setQuotes(quoteList);
    
  }
  return (
    <div className="App">
      {quotes.map(kanye =>(
        <Quote saying={kanye.quote} image={kanye.image}/>
      ))}
    </div>
  );
  
}

export default App;
