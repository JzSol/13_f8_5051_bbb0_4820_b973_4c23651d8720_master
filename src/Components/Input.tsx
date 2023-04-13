import { Dispatch, SetStateAction, useState } from 'react';
import './Input.scss';

interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}

export const Input: React.FC<Props> = ({ input, setInput, setIsClicked }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  input.length === 0 && setInput('Type your email address here…');

  const handleClick = () => {
    if (emailRegex.test(input)) {
      setIsClicked(true);
    }
  };

  return (
    <form>
      <input
        type='text'
        name='email'
        placeholder={input}
        className='emailinput'
        onChange={handleChange}></input>
      <div className='inputrect'></div>
      <button className='arrow' onClick={handleClick}></button>
    </form>
  );
};
