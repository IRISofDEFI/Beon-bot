import { useState } from 'react'
import { ChatInput } from './components/ChatInput' 
import {ChatMessages}  from './components/ChatMessages'
import './App.css'




function App (){
          const [chatMessages, setChatMessages] = useState([
                    { message: "Hello BEON Chatbot",
                      sender: "user",
                      id: "id1"},
                    { message: "How are you Iris?", 
                      sender: "robot",
                      id: "id2"},
                    { message: "Tell me a above BEON!", 
                        sender: "user",
                        id: "id3"},
                    { message: "BEONS is a blockchain authentication platform, for brands suffer with conterfieit products",
                      sender: "robot", 
                      id: "id4"},
            ]);
            //const [chatMessages, setChatMessages] = array;
           //const chatMessages = array[0];
            //const setChatMessages = array[1]; this is known as array destructuring. we are extracting the two elements of the array returned by useState into two separate variables.
            // this is just to make react aware that this component has state. but we are not using the state variable here.

                
              return(
              <div className="chatbot-app">
                <ChatMessages 
                    chatMessages={chatMessages}
                />
                <ChatInput 
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                />
                </div>
        );
      }

export default App
