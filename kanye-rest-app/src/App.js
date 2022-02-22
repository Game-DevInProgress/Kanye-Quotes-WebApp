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
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28cropped%29.jpg/800px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28cropped%29.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Dq9YN4tToQ-Jx3eEm6OWXoix9SWswpqqnQ&usqp=CAU",
  "https://media.pitchfork.com/photos/61fd7992e3ad59e4733c1a2b/2:1/w_2560%2Cc_limit/Kanye-West-Netflix.png",
  "https://e3.365dm.com/20/04/2048x1152/skynews-kanye-west_4976547.jpg",
  "https://www.thesun.co.uk/wp-content/uploads/2016/06/kanyewest_mobile_top.jpg?strip=all&w=750&h=352&crop=1",
  "https://hollywoodlife.com/wp-content/uploads/2021/11/Kanye-needs-to-be-back-home-ftr.jpg",
  "https://i.guim.co.uk/img/media/850a981f5821f5e25ef09b159f97500bda770c25/1031_351_2956_1773/master/2956.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=8fcdc3dbc65726b9f008755598e46c13"
]

const App = () => {

  const [quotes,setQuotes] = useState([]);

  useEffect(()=>{
    getQuote();
  },[]);

  async function getImage(){
    let number = Math.random() * (images.length-1);
    console.log(number.toFixed(0));
    return(images[number.toFixed(0)]);
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
      <h1>Wise Words of Kanye</h1>
      <div className="quotes">
        {quotes.map(kanye =>(
          <Quote saying={kanye.quote} image={kanye.image}/>
        ))}
      </div>
      <h1>Long Live Kanye</h1>
    </div>
  );
  
}

export default App;
