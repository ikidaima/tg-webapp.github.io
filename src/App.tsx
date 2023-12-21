import React, { useEffect } from 'react';
import { useTelegram } from './entities/Telegram'
import { Header } from './features/Header';
import { Container } from './shared/ui/Container';
import { Post } from './entities/Post';

function App() {
  const { Telegram } = useTelegram();

  useEffect(() => {
    Telegram.MainButton.text = 'Применить'
    Telegram.MainButton.show();
  }, [Telegram.MainButton]);

  return (
    <div className="relative">
      <Header/>
      <Container>
       <Post/>
      </Container>
    </div>
  );
}

export default App;
