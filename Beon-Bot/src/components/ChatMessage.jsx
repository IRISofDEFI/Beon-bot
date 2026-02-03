
import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'


    function ChatMessage({message, sender}){
          // const message = props.message;
          // const sender = props.sender;
          // const {message, sender} = props; // destructuring assignment that does the same thing as above two lines it just looks cleaner. Also we can do it directly in the function parameters as shown above. 
          // all this are called props destructuring. there are optional and equivalent ways to do the same thing.
        
          /*
          if (sender === "robot") {
            return (
              <div>
                <img src="robot.png" alt="robot image" width="50" />
                {message}
              </div>
            );
          } */

          return (
            <div className={ 
                sender === "user" 
                ? "chat-message-user" 
                : "chat-message-robot"
              }>
                {sender === "robot" && 
                    (<img src={RobotProfileImage}
                        alt="robot image"
                        className="chat-message-profile"
                    />
                    )}
                    <div className="chat-message-text">
                      {message}
                    </div>   
                
                {sender === "user" && 
                  (<img src={UserProfileImage} 
                  alt="user image" 
                  className="chat-message-profile"
                />
                )}
            </div>
          );
        }
        export {ChatMessage};