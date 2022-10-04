import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Page from './pages/Page';
import { pages } from './pages';
import styled from 'styled-components';

import { useState } from 'react';

function App() {

  const [page, setPage] = useState("about");

  return (
    <MainApp className="App" page={page}>
      <Sidebar page={page} onChange={setPage}/>
      <Page page={page} current={pages[page]} setPage={setPage}/>
    </MainApp>
  );
}
//                                   ['about', 'projects'].includes(page)
const MainApp = styled.div`
  background-size: 150%;
  background-position-x: ${({page}) => page === 'about' || page === 'projects' ? 'left' : 'right'};
  background-position-y: ${({page}) => page === 'about' || page === 'skills' ? 'top' : 'bottom'};
  transition: 1s;
  transition-property: background-position;
`

export default App;
