import { useState } from 'react';

export const useTelegram = () => {
  const [Telegram] = useState(window.Telegram.WebApp);

  return { Telegram };
};