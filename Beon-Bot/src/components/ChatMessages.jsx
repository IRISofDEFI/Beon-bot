
import React, { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css';

function ChatMessages ({chatMessages}){
                const chatMessageRef = useRef(null);

            useEffect(() => {
              const containerElem = chatMessageRef.current; // we are accessing the current value of the ref using the current property.
                if (containerElem) {
                containerElem.scrollTop = containerElem.scrollHeight;
                }
            }, [chatMessages]);
            
                return (
                <div className="chat-messages-container" 
                  ref={chatMessageRef}>
                    {chatMessages.map( (chatMessage) => {
                      return (
                            <ChatMessage 
                              message={chatMessage.message} 
                              sender={chatMessage.sender} 
                              key={chatMessage.id} // remember we use the curly braces to embed javascript expressions inside jsx, and because we want to save the result of this code as a key. 
                              // and the key is a special prop in react that helps it identify which items have changed, are added, or are removed.
                            />
                          );
                        })}
              </div>
                );
        };
            
export  { ChatMessages };


