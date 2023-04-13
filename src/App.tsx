import { useState } from 'react';

import btn from './btn';

import './App.scss';
import { Footer } from './Components/Footer';
import { Main } from './Components/Main';

export const App = () => {
  const [isclicked, setIsClicked] = useState(false);

  return (
    <>
      <div className='background'></div>

      <div className='infopage'>
        <header className='header'>
          <div className='logo' />
          {btn.map((btnname) => (
            <button key={btnname.id} className='button'>
              {btnname.title}
            </button>
          ))}
        </header>

        <Main setIsClicked={setIsClicked} />
        <Footer />
      </div>
    </>
  );
};
