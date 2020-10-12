import React from 'react';
import './Chat.css';

function Contact() {
  const name = 'Morris Obrien';
  const online = true;
  const statoffline = <span className='status-offline'>offline</span>;
  const statonline = <span className='status-online'>online</span>;

  return (
    <div className='Contact'>
      <img
        className='avatar'
        src='https://randomuser.me/api/portraits/men/81.jpg '
        alt='contact'
      />
      <div className='status'>
        <div className='name'>{name}</div>
        <div className=' contact '></div>
        <div className='status'>{online ? statonline : statoffline}</div>
      </div>
    </div>
  );
}

export default Contact;
