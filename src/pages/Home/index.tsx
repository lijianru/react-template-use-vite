import { Button, Table } from 'antd';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUsers } from 'pages/Home/action';
import React from 'react';
import banana from 'images/banana.jpg';
import { useMountEffect } from '@react-hookz/web';

export default function Home() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.users.loading);
  const users = useAppSelector(state => state.users.users);

  useMountEffect(() => {
    dispatch(getUsers());
  });

  return (
    <div>
      <Button onClick={() => dispatch(getUsers())}>Home</Button>
      <Table columns={columns} dataSource={users} loading={loading} rowKey={({ id }) => id} />
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-8">
        <div className="flex-shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <img src={banana} />
    </div>
  );
}
