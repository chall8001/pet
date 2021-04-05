import React from "react";
import { ChatEngine } from "react-chat-engine";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"

function CustomChatEngine() {

  const { user } = useAuth0();

  localStorage.setItem('username', user.nickname)
  localStorage.setItem('password', user.nickname)


  axios.post(
    'https://api.chatengine.io/projects/people/',
    { 'username': user.nickname, 'secret': user.nickname },
    { headers: { 'Private-Key': '587b4bba-e4f2-41ab-ba93-2f2a3d2cee7b' } }
  )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))

 


  let config = {
    method: 'POST',
    url: 'https://api.chatengine.io/chats/14047/people/',
    headers: {
      'Project-ID': 'f442428e-dd63-478f-8b79-29db3d12c329',
      'User-Name': 'Mario',
      'User-Secret': 'Samurai2002!'
    },
    data: { 'username': user.nickname }
  }

  axios(config)
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error))







  return (
    <div>
      <ChatEngine
        projectID="f442428e-dd63-478f-8b79-29db3d12c329"
        userName={localStorage?.getItem('username')}
        userSecret={localStorage?.getItem('password')}
        height="100vh"
      />
    </div>
  );
}

export default CustomChatEngine;
