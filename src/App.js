
import './App.css';
 
import Header from './components/Header';
import Main from './components/Main';
import {Form, Route, Routes} from "react-router-dom";
import Cart from './components/Cart';
import Footer from './components/Footer'
import ContactForm from './components/ContactForm';

function App() {
 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  path='/' element={<Main />}/>
        <Route  path='/cart' element={<Cart />}/>
        <Route  path='/ContactForm' element={<ContactForm />}/>
        
      </Routes>
       
      <Footer />
     
    </div>
  );
}

export default App;
