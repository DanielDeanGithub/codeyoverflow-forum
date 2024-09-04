import React from 'react';
import Header from './Header';
import Body from './Body';

const Card = (props) => {
    const { profileImg, username, comment } = props.commentObject;
    return (
      <div>
        <Header profileImg={profileImg} username={username}/>
        <Body comment={comment}/>
      </div>
    )
  }
  
  export default Card