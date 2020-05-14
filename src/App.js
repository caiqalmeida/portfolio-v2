import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  function handleSidebarActive() {
    setSidebarActive(!sidebarActive);
  }

  return (
    <BrowserRouter>
      <Header handleSidebar={() => handleSidebarActive()} />
      <Sidebar
        sidebarActive={sidebarActive}
        handleSidebar={() => handleSidebarActive()}
      />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
