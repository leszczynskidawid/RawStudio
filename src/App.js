
import './App.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';






function App() {

 
 

  return (
    <div className="App">
      <header>{<Header/>} </header>
      <main >
<Categories/>
      </main>
   
   
      </div>

   
    
  );
}

export default App;
