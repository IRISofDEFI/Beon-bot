import { useState } from "react";
import { Chatbot } from 'supersimpledev' 
import './ChatInput.css'

function ChatInput({chatMessages, setChatMessages}){
        const [inputText, setInputText] = useState(""); // we are creating a state variable to hold the input text. the second element is a function that allows us to update the state variable.

        function saveInputText(event){
         setInputText(event.target.value); // this gets the value of the input field whenever there is a change in it. event here 
        }

        function sendMessage(){
            const newChatMessages = [
                ...chatMessages,
                        {
                        message: inputText,
                        sender: "user",
                        id: crypto.randomUUID(),
                        },
            ]
        
            setChatMessages(newChatMessages)

                const response = Chatbot.getResponse(inputText);
                setChatMessages([
                        ...newChatMessages,
                        {
                        message: response,
                        sender: "robot",
                        id: crypto.randomUUID(),
                        },
                    ])
                    
                    setInputText("");
        } 
        
            return (
            <div className="chat-input-container">
                <input 
                    placeholder="Send a message to iris" 
                    size="30"
                    onChange={saveInputText}
                    className="chat-input"
                    value={inputText} // the value change the text inside the iinput.
                    />
                <button
                onClick={sendMessage}
                className="send-button"
                >Send</button>
            </div>
            );
        }
export  {ChatInput };