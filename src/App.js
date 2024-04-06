import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {

  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/assets/img1.png`} />
      <img src={`${process.env.PUBLIC_URL}/assets/img2.png`} />
    </div>
  );
}

export default App;
