import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/SpeechToText');
  };

  const handleClickSignUp = () => {
    navigate('/SignUp');
  };

  return (
    <div>
      <input type="email" />
      <input type="password" />
      <button onClick={handleClickSignIn}>로그인</button>
      <button onClick={handleClickSignUp}>회원가입</button>
    </div>
  );
}

export default SignIn;
