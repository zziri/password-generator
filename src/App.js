import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Output from './components/Output';
import Control from './components/Control';
import { useEffect, useState } from 'react';

const generateRandomString = (num) => {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const createPassword = (length) => {
  return generateRandomString(length);
}

const App = () => {
  const [rangeValue, setRangeValue] = useState(20);
  const [password, setPassword] = useState('');

  useEffect(() => {
    setPassword(createPassword(rangeValue));
  }, [rangeValue]);

  const handleRefresh = (event) => {
    event.preventDefault();
    setPassword(createPassword(rangeValue));
  }

  const handleRange = (event) => {
    event.preventDefault();
    setRangeValue(event.target.value);
  }

  return (
    <>
      <div className="container mx-auto my-5">
        <Header />
        <Output
          password={password}
          handleRefresh={handleRefresh}
        />
        <Control
          rangeValue={rangeValue}
          handleRange={handleRange}
          handleRefresh={handleRefresh}
        />
      </div>
    </>
  );
}

export default App;
