import { Button } from 'antd';
import React from 'react';
import { decrement, increment } from 'state-container/slices/counter';

import { useAppDispatch, useAppSelector } from 'state-container/hooks';

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
