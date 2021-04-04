import './App.css';
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection'
import Offer from './components/Offer'
import Community from './components/Community'
import Blog from './components/Blog'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
       <Navbar/>
       <FirstSection/>
       <Offer/> 
       <Community/>
       <Blog/>
       <Footer/>
    </div>
  );
}

export default App;
