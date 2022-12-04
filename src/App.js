import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Output from './components/Output';
import Control from './components/Control';

const App = () => {
  return (
    <>
      <div className="container mx-auto my-5">
        <Header />
        <Output />
        <Control />
      </div>
    </>
  );
}

export default App;
