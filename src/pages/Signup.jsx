import React from "react";
import * as S from "../styles/StyledSignup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const goSignup = () => navigate(`/home`);
  const goBack = () => navigate(-1);

  return (
    <S.Container>
      <S.Header>
        <img
          src={`${process.env.PUBLIC_URL}/images/Back.svg`}
          alt="back"
          id="back"
          onClick={goBack}
        />
        <div id="detail">회원가입</div>
      </S.Header>
      <S.Priv>
        <input id="input" type="name" placeholder="이름" />
        <input id="input" type="birth" placeholder="생년월일 ex)19990101" />
        <input id="input" type="phonenumber" placeholder="전화번호" />
      </S.Priv>
      <S.Input>
        <input id="input" type="id" placeholder="아이디" />
        <input id="input" type="password" placeholder="비밀번호" />
      </S.Input>
      <S.Btn onClick={goSignup}>가입하기</S.Btn>
    </S.Container>
  );
};

export default Signup;
