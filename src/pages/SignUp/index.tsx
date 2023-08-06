import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate('/signin');
  };

  return (
    <>
      <input type="email" />
      <input type="password" />
      <button onClick={handleClickSignUp}>회원가입</button>
    </>
  );
}

export default SignUp;
