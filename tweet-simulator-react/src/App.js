import React, {useEffect, useState}from 'react';
import Header from "./Components/Header";
import SendTweet from "./Components/SendTweet";
import ModalContainer from "./Components/ModalContainer";
import { Container, Snackbar } from "@material-ui/core";
import { TWEETS_STORAGE } from './Utils/constant';
import ListTweet from "./Components/ListTweet";


function App() {


  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  })

  const [allTweets, setAllTweets] = useState([]);

  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(()=>{
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE)
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false);
  }, [reloadTweets]);

  const deleteTweet= (index)=>{
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets))
    setReloadTweets(true);
  }

  return (
    <div className="App">
     <Container className="tweets-simulator" maxWidth={false}>
       <Header/>
       <SendTweet setToastProps={setToastProps} allTweets={allTweets}/>
       <ListTweet allTweets={allTweets} deleteTweet={deleteTweet}/>

       <Snackbar 
       anchorOrigin={{
         vertical: "top",
         horizontal: "right"
       }}
       open={toastProps.open}
       autoHideDuration={1000}
       message={<span id="message-id">{toastProps.text}</span>} />


     </Container>
    </div>
  );
}

export default App;
