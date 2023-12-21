import React, { useEffect } from 'react';
import { useTelegram } from './entities/Telegram'

function App() {
  const { Telegram } = useTelegram();

  useEffect(() => {
    Telegram.MainButton.text = 'Применить'
    Telegram.MainButton.show();
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
