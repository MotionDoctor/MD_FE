import React from "react";
import * as L from "../styles/StyledLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goLogin = () => navigate(`/home`);
  const goSignup = () => navigate(`/signup`);

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
        <input id="id" type="id" placeholder="아이디" />
        <input id="id" type="password" placeholder="비밀번호" />
      </L.Input>
      <L.Button>
        <L.Login onClick={goLogin}>로그인</L.Login>
        <L.Signup onClick={goSignup}>가입하기</L.Signup>
      </L.Button>
    </L.Container>
  );
};

export default Login;
