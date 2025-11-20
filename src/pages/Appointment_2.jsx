import React from "react";
import * as A from "../styles/StyledAppointment2";
import { useNavigate } from "react-router-dom";

const Appointment_2 = () => {
  const navigate = useNavigate();

  const goHos = () => navigate(`/hospital`);
  const goHome = () => navigate(`/home`);
  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);

  return (
    <A.Container>
      <A.Header>
        <A.Icons>
          <img id="back" src={`${process.env.PUBLIC_URL}/images/Back.svg`} alt="back" onClick={goBack} />
        </A.Icons>
        <A.Title>예약선택</A.Title>
      </A.Header>

      <A.Content>
        <A.Component>
          <A.C_title>
            경북대학교병원
            <div id="sub">정형외과</div>
          </A.C_title>
          <A.Divider />
          <A.Info_wrapper>
            <A.Info>위치: 대구광역시 중구 동덕로 130</A.Info>
            <A.Info>예약 날짜: 9월 20일</A.Info>
            <A.Info>진료가능시간: 오전 10시 ~ 12시</A.Info>
          </A.Info_wrapper>
        </A.Component>
        <A.C_btn onClick={() => navigate(`/appointment/hospital/complete`)}>병원 예약하기</A.C_btn>
      </A.Content>

      <A.Nav>
        <A.Comp onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/images/home_b.svg`} alt="home" />
          <div>홈페이지</div>
        </A.Comp>
        <A.Comp>
          <img src={`${process.env.PUBLIC_URL}/images/search_b.svg`} alt="search" />
          <div>진단하기</div>
        </A.Comp>
        <A.Comp>
          <img src={`${process.env.PUBLIC_URL}/images/reser_c.svg`} alt="reservation" style={{ width: "28px", height: "28px" }} />
          <div>예약하기</div>
        </A.Comp>
        <A.Comp style={{ gap: "7px" }} onClick={goMy}>
          <img src={`${process.env.PUBLIC_URL}/images/info_b.svg`} alt="info" style={{ width: "21px", height: "21px" }} />
          <div>내 정보</div>
        </A.Comp>
      </A.Nav>
    </A.Container>
  );
};

export default Appointment_2;
