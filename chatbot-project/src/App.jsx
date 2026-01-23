import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

   function App(){

//lifted state up to App component from ChatMessages component
           const [chatMessages, setChatMessages]=useState(
            [{message:"hello chatbot",
              sender:"user",
              id:"id1"
              },
                  {message:"Hello! How can I help you?",
                  sender:"robot",
                  id:"id2"
                },
                  {message:"can you get me today's date?" ,sender:"user"
                  ,id:"id3"

                  },
                  {message:"Today is January 21" ,sender:"robot"
                    ,id:"id4"
                  },
                  
                  
              ]


          ); 
            
          //array destructuring
          //const [chatMessages, setChatMessages]=array;

               // const chatMessages= array[0];
              //  const setChatMessages=array[1];

        
/*
        const chatMessageComponents=  chatMessages.map(
            (chatMessage)=>{
                return(
                     <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                     />);

            }
         );

*/
           
          return     (
            <div className="app-container">
                
          
            {
              <ChatMessages
                  chatMessages={chatMessages}
              />  

            }

              <ChatInput 
               chatMessages={chatMessages}
               setChatMessages={setChatMessages}
            />
            </div>
    );
            
        }
   

export default App
