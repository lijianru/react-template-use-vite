import { Button } from 'antd';
import React from 'react';
import { decrement, increment } from 'slice/counterSlice';

import { useAppDispatch, useAppSelector } from '../../store';

export function Counter() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
}
