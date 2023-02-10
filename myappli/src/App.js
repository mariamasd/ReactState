import photo from './moi.webp';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [fullName, setFullName] = useState("Mariama diallo");
  const [bio, setBio] = useState("bio-informaticienne et dev fullstack.");
  const [proffession, setProffession] = useState("developpeur fullstack.");
  const [show, setShow] = useState(false);
 const styleButton={textAligne:"center",bagroundColor:'red'};
  return (
    <div style={styleButton} >
      {
        show && (
          <div className='container'>
            <h1>{fullName}</h1>
            <p>{proffession}</p>
            <img src={photo} alt='image' />
            <p>{bio}</p>
          </div>
        )

      }

      <button  onClick={() => setShow(!show)}>
        {show ? "cacher le Profil" : "Mon Profil"}
      </button>
    </div>
  );
};

export default App;



