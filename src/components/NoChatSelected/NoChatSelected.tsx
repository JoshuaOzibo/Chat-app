import React from 'react'

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-500">
      <img 
        src="/chat-placeholder.png" 
        alt="No chat selected" 
        className="w-64 h-64 opacity-50"
      />
      <h1 className="text-2xl font-semibold mt-4">Select a chat to start messaging</h1>
      <p className="text-sm mt-2">Choose from your existing conversations or start a new one</p>
    </div>
  )
}

export default NoChatSelected
