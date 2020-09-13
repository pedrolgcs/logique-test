import React from 'react';

// styles
import GlobalStyle from './styles/global';

// pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SignUp />
    </>
  );
};

export default App;
