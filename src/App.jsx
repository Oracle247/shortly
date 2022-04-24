import './App.css';
import InputComponent from './InputComponent';
import { useSelector } from 'react-redux';
import LinkComponent from './LinkComponent';

function App() {

  const links = useSelector((state) => state.links.value);


  return (
    <div className="App">
      <h2>Shorten your links</h2>
      <InputComponent />
      <LinkComponent />
    </div>
  );
}

export default App
