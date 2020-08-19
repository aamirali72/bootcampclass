import React, { useState } from 'react';
import NavBar from './Components/NavBar'
import InfoPanel from './Components/InfoPanel'
import FootNav from './Components/FootNav';

function App() {
  const screenConfig = useState(0);
  return (
    <>
      <NavBar />
      <InfoPanel currentScreen={screenConfig[0]} />
      <FootNav screenConfig={screenConfig} />
    </>
  );
}

export default App;
