import React from 'react'
import { useSelector } from 'react-redux';
import Layout from './components/Layout';
import { RootState } from './redux/store';

export default function App() {

  const users = useSelector((state: RootState) => state.users.usersList);
  console.log(users)
  // if(users.length === 0) {
  //   return <div>NO USER FOUND</div>
  // }
  return (
    <div>
      <Layout/>
    </div>
  )
}
