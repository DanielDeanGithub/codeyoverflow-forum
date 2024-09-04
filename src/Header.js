import React from 'react';

const Header = ({profileImg, username}) => {
  return (
    <>  
        <h1>{username}</h1>
        <img src={profileImg} />
    </>
  )
}