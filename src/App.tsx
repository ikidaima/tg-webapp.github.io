import React, { useEffect } from 'react';
import { useTelegram } from './entities/Telegram'
import { Button } from '@nextui-org/react';

function App() {
  const { Telegram } = useTelegram();

  useEffect(() => {
    Telegram.MainButton.text = 'Применить'
    Telegram.MainButton.show();
  }, [Telegram.MainButton]);

  return (
    <div className="App">
      <header className="App-header">
          Ubic хакатон
          <Button color='secondary'>Hello world</Button>
      </header>
    </div>
  );
}

export default App;
