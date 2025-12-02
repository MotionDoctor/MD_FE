import React, { useState } from "react";
import * as S from "../styles/StyledSignup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  // 상태 관리
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const goSignup = async () => {
    try {
      const response = await axios.post(
        "http://133.186.132.40:8000/v1/auth/register",
        {
          email,
          password,
          nickname,
        }
      );

      const { access_token, refresh_token } = response.data;

      // 로컬스토리지에 저장
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      console.log("회원가입 성공:", response.data);
      navigate("/home");
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다.");
    }
  };

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
        <input
          id="input"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="input"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </S.Priv>
      <S.Input>
        <input
          id="input"
          type="text"
          placeholder="사용자 닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input id="input" type="name" placeholder="이름" />
      </S.Input>
      <S.Btn onClick={goSignup}>가입하기</S.Btn>
    </S.Container>
  );
};

export default Signup;
