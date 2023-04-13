import { Dispatch, SetStateAction, useState } from 'react';
import { Input } from './Input';

interface Props {
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}

export const Main: React.FC<Props> = ({ setIsClicked }) => {
  const [input, setInput] = useState('Type your email address here…');

  return (
    <main className='main'>
      <h1 className='newsletter'>Subscribe to newsletter</h1>
      <div className='info'>
        Subscribe to our newsletter and get 10% discount on pineapple glasses.
      </div>

      <Input input={input} setInput={setInput} setIsClicked={setIsClicked} />

      <div className='Tos'>
        <input type='checkbox' className='checkbox'></input>
        <label className='text'>
          I agree to <a className='terms'>terms of service</a>
        </label>
      </div>
    </main>
  );
};
