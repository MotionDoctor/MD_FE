import React, { useState } from "react";
import * as L from "../styles/StyledLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const goSignup = () => navigate(`/signup`);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://133.186.132.40:8000/v1/auth/login",
        {
          email,
          password,
        }
      );

      const { access_token, refresh_token, token_type } = response.data;

      // 토큰을 로컬스토리지에 저장
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("token_type", token_type);

      console.log("로그인 성공");

      navigate("/home"); // 로그인 성공 후 홈으로 이동
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("이메일 또는 비밀번호를 확인하세요.");
    }
  };

  return (
    <L.Container>
      <L.Det>
        <img
          src={`${process.env.PUBLIC_URL}/images/Logo.png`}
          alt="logo"
          id="img"
        />
        <div id="detail">
          5분 AI 모션검사로 내 위치와 <br />
          가까운 병원 예약·이동까지 한 번에
        </div>
      </L.Det>
      <L.Input>
        <input
          id="id"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="id"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </L.Input>
      <L.Button>
        <L.Login onClick={handleLogin}>로그인</L.Login>
        <L.Signup onClick={goSignup}>가입하기</L.Signup>
      </L.Button>
    </L.Container>
  );
};

export default Login;
