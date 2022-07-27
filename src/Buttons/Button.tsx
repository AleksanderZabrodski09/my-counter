import React from 'react';
import s from './Button.module.css';


type ButtonType = {
  name: string
  callBack: () => void
  disabled: boolean
}
export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    props.callBack()
  }
  return (
    <div>
      <button
        className={s.button}
        onClick={onClickHandler}
        disabled={props.disabled}
      >
        {props.name}</button>
    </div>
  );
};


