import './App.css';

import React , {useState}from 'react'
import Heading from './components/Heading'
import NumberGrid from './components/NumberGrid';
import Theme from './components/Theme';
import Footer from './components/Footer';

const App = () => {
  const [Mode, setMode] = useState("Light");
  const toggleMode = () => {
    if (Mode === "Light") {
      setMode("Dark");
      document.body.style.backgroundColor = "rgba(5, 5, 5, 0.799)";
      
    } else {
      setMode("Light");
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.141)";
    }
  };
  return (
    <div className='container-fluid screen'>
      <div className='container'>
        <div className='theme d-flex pt-3 mb-0 justify-content-end'>
          <Theme mode={Mode} toggleMode={toggleMode}/>
        </div>
        <div className='row'>
          <Heading title="Calculator"  mode={Mode} />

        </div>
        <div className='row'>
          <NumberGrid mode={Mode}/>
        </div>
      </div>
      <div className='footer  bottom-0 d-flex justify-content-center'>

    <Footer mode={Mode}/>
      </div>
    </div>
  )
}

export default App


