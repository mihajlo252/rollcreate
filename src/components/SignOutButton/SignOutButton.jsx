import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/user';

export const SignOutButton = () => {

  const navigate = useNavigate()

	const dispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(logout());
		localStorage.removeItem("sb-ginityejycllnrdlmmue-auth-token");
		navigate("/")
	};

  return (
    <button className="btn btn-outline bg-neutral text-neutral-content" onClick={handleSignOut}>Sign Out</button>
  )
}
