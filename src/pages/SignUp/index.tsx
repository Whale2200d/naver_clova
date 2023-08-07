import { useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleClickSignUp = () => {
    navigate('/signin');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isEmailValid = email.includes('@');
    setIsEmailValid(isEmailValid);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const isPasswordValid = password.length >= 8;
    setIsPasswordValid(isPasswordValid);
  };
  return (
    <S.Container>
      <S.Input
        type="email"
        // value={email}
        onChange={handleEmailChange}
        placeholder="이메일을 입력하세요."
      />
      {!isEmailValid && (
        <S.Span>이메일 형식이 틀렸습니다. @를 넣어주세요.</S.Span>
      )}
      <S.Input
        type="password"
        // value={password}
        onChange={handlePasswordChange}
        placeholder="비밀번호를 입력하세요."
      />
      {!isPasswordValid && (
        <S.Span>비밀번호 형식이 틀렸습니다. 8자리 이상 입력해주세요.</S.Span>
      )}
      <S.Button onClick={handleClickSignUp}>가입하기</S.Button>
    </S.Container>
  );
}

export default SignUp;
