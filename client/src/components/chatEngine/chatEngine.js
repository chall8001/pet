import React from 'react';
import { ChatEngine } from "react-chat-engine"

function chatEngine() {
    return (
        <div>
            <ChatEngine
                projectID='f442428e-dd63-478f-8b79-29db3d12c329'
                userName='Mario'
                userSecret='Samurai2002!'
                height='100vh'
            />
        </div>
    )
}

export default chatEngine