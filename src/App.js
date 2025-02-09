
import Body from './Components/Body';
import MainPage from './Components/MainPage';
import {BrowserRouter, Route, Routes} from 'react-router'
import PlayList from './Components/PlayList';
import Video from './Components/Video';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Body/>}>
        <Route index element={<MainPage />} />
          <Route path='/playlist' element={<PlayList/>}/>
          <Route path='/video' element={<Video/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
