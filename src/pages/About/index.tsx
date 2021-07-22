import { InputNumber } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import useAsyncFunction from '../../hooks/useAsyncFunction';

export function About() {
  const [value, setValue] = useState<number>();

  // const [state, callback] = useAsyncFunction(async (val: number) => {
  //   await axios.get(`api/todos/${val}`);

  //   console.log('fetch', val);
  // }, []);

  // useEffect(() => {
  //   console.log('useEffect', value);
  //   value && callback(value);
  // }, [value]);

  const [state, callback] = useAsyncFunction(async () => {
    await axios.get(`api/todos/${value}`);

    console.log('fetch', value);
  }, [value]);

  useEffect(() => {
    console.log('useEffect', value);
    value && callback();
  }, [callback]);

  console.log('render', value);

  return (
    <div style={{ margin: '100px' }}>
      <InputNumber value={value} onChange={val => setValue(val)} />
      <a>{Math.random()}</a>
      <p>{`${state.loading}`}</p>
    </div>
  );
}
