import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {

  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/assets/img1.png`} style={{height: "300px", width: "1200px"}} />
      <img src={`${process.env.PUBLIC_URL}/assets/img2.png`} style={{height: "300px", width: "1200px"}} />
    </div>
  );
}

export default App;
