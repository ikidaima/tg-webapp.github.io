import React, { useEffect } from 'react';
import { useTelegram } from './entities/Telegram'
import './App.css';

function App() {
  const { Telegram } = useTelegram();

  useEffect(() => {
    Telegram.MainButton.text = 'Применить'
  }, [Telegram.MainButton]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ubic хакатон
        </p>
      </header>
    </div>
  );
}

export default App;
