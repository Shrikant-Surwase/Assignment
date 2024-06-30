import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useDispatch, useSelector } from "react-redux";
import {authActions} from '../store'
export default function Header() {
  const isLogin = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div id='navbar'>
       
        <ul id='nav-list'>
           {
            isLogin && <>
             
            <li className='list-item' onClick={()=>{dispatch(authActions.logout())}}><Link to='/'>logout</Link></li>
            </>
           }
           {
            !isLogin && <>
            <li className='list-item'><Link to='/login'>Login</Link></li>
            <li className='list-item'><Link to='/signup'>signup</Link></li>
            </>
           }
        </ul>
    </div>
  )
}
