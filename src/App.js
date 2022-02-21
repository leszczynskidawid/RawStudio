
import './App.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';

import {BrowserRouter  as Router} from 'react-router-dom'





function App() {

 
 

  return (
  <Router>

      <div className="App">
      <header><Header/></header>
      <main >
      <section>{<Page/>}</section>
      </main>
   
   
      </div>



  </Router>



   
 
   
    
  );
}

export default App;
