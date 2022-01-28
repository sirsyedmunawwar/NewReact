import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Bollywood from './Bollywood/Bollywood';
import Hollywood from './Hollywood/Hollywood';
import Technology from './Technology/Technology';
import Food from './Food/Food';
import PageNotFound from './Components/PageNotFound';
import ScrollToTop from './Components/ScrollToTop';
import { BlogData } from './Components/ContextAPI';
import Post from './Components/Post';
import Sports from './Sports/Sports';



function App() {
  return (
    <BlogData>
      <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/bollywood" element={<Bollywood />}></Route>
            <Route path="/technology" element={<Technology />}></Route>
            <Route path="/hollywood" element={<Hollywood />}></Route>
            <Route path="/sports" element={<Sports/>}></Route>
            <Route path="/food" element={<Food />}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path='/post/:id' element={<Post />}/>
            <Route path='/*' element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
        
   
    </BlogData>
  );
}

export default App;




