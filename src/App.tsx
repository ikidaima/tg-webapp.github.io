import React, { useEffect } from 'react';
import { useTelegram } from './entities/Telegram'
import { Button, Stack } from '@mui/material';

function App() {
  const { Telegram } = useTelegram();

  useEffect(() => {
    Telegram.MainButton.text = 'Применить'
    Telegram.MainButton.show();
  }, [Telegram.MainButton]);

  return (
    <div className="App">
      <header className="App-header">
        <Stack>
          Ubic хакатон
          <Button variant="contained">Hello world</Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
