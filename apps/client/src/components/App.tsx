import './app.css';
import jesi1 from "../assets/jesi1.png";
import jesi2 from "../assets/jesi2.png";

function App() {
  return (
    <div className='background-container'>
      <div className='container'>
        <h1 className='title'>Hello Jesi</h1>
        <img src={jesi1} alt='jesi love' className='jesi1' />
        <img src={jesi2} alt='jesi love' className='jesi2' />
      </div>
    </div>
  )
}

export default App