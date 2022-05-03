import React, {useState}from 'react';
import Header from "./Components/Header";
import SendTweet from "./Components/SendTweet";
import ModalContainer from "./Components/ModalContainer";
import { Container, Snackbar } from "@material-ui/core";


function App() {

  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  })

  return (
    <div className="App">
     <Container className="tweets-simulator" maxWidth={false}>
       <Header/>
       <SendTweet setToastProps={setToastProps}/>

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
