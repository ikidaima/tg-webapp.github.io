import React, { FC } from 'react';

interface Props {
  children?: React.ReactNode;
}

export const Container: FC<Props> = function Container({children}) {
  return (
    <div className='p-4 pt-7'>
      {children }
    </div>
  )
};
