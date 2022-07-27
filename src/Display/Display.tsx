import React from 'react';
import s from './Display.module.css';
import {Button} from '../Buttons/Button';


type DisplayType = {
  count: number
  insCounter: () => void
  resetCounter: () => void
  startCount: number
  maxCount: number
}
export const Display = (props: DisplayType) => {

    return (
      <div className='wrapper'>
        <div className={s.displayCounter}>
          <div className={props.count === props.maxCount ? s.redEndCount : ''}>
            {props.count
            }</div>
        </div>
        <div className={s.buttonsContainer}>
          <Button
            name={'ins'}
            callBack={props.insCounter}
            disabled={props.count >= props.maxCount}
          />
          <Button
            name={'reset'}
            callBack={props.resetCounter}
            disabled={props.count === props.startCount}
          />
        </div>
      </div>
    )
      ;
  }
;

