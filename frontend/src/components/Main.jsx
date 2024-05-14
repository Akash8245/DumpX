import React, { useState } from 'react';
import axios from 'axios';

export default function Main() {
  const [mytext, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
     .post('http://127.0.0.1:5000/post', {
        text: mytext,
      })
      .then(() => {
        setText(''); 
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='h-[100vh] text-white shadow-lg'>
      <form onSubmit={handleSubmit} method='POST' className='fixed bottom-0 flex bg-black w-[100%] z-10'>
        <textarea
          type='text'
          spellCheck='false'
          value={mytext} 
          className='bg-transparent outline-none border-[2px] border-white w-[70%] m-5 md:ml-[12%] p-2 rounded-[15px]'
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit' className='p-2 hover:text-[red] font-bold duration-200'>
          Send
        </button>
      </form>
    </div>
  );
}
