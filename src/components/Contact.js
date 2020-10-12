import React from 'react';
import './Chat.css';

function Contact() {
  const name = 'Morris Obrien';
  const online = <span className='status-online'> </span>;
  const offline = <span className='status-offline'></span>;

  return (
    <div className='Contact '>
      <img
        className=' Contact avatar'
        src='https://randomuser.me/api/portraits/men/81.jpg '
        alt='contact'
      />
      <div className='Contact name'>
        <p className='status'>
          <h4>{name}</h4>

          {online ? 'online' : 'offline!'}
        </p>
      </div>
    </div>
  );
}

export default Contact;
