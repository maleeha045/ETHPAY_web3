
import {Navbar, Welcome, Footer, Services, Transactions, Loader} from './components';

import './App.css'
const App = ()=> {

  return (
    <div className="app">
      <div className='gradient-bg-welcome'>
   
       <Navbar />
       <Welcome />
      </div>
      <Services />
    
      <Transactions />
      
      <Footer />
    </div>
  )
}

export default App
