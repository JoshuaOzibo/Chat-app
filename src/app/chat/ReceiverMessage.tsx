'use client'

const ReceiverMessage = () => {
  return (
    <div className="p-4 relative bg-amber-800 mt-46">
      <ul className="space-y-2 absolute mx-10 left-0">
        {['Hello', 'Hi', 'How are you doing?', 'How Far Guy'].map((msg, index) => (
          <li className='bg-red-500 rounded-bl-2xl rounded-r-2xl px-3 py-2 text-white flex' key={index}>
            {/* <strong>{msg.sender}:</strong>  */}
            {msg}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReceiverMessage
