import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import { BlogData } from './ContextAPI';



function App() {
  return (
    <BlogData>
      <div className="App">
        <Router>
         
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            
          </Routes>
        </Router>
      </div>
    </BlogData>
  );
}

export default App;




