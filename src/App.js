
import Body from './Components/Body';
import MainPage from './Components/MainPage';
import {BrowserRouter, Route, Routes} from 'react-router'
import PlayList from './Components/PlayList';
import Video from './Components/Video';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import Products from './Components/Products';
import Orders from './Components/Orders';
import Item from './Components/Item';
import Countdown from './Components/Countdown';

function App() {
  return (
    <Provider store={AppStore}>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Body/>}>
        <Route index element={<MainPage />} />
          <Route path='/playlist' element={<PlayList/>}/>
          <Route path='/video' element={<Video/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/items' element={<Item/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
