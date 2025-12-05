import React from "react";
import * as A from "../styles/StyledAppointment";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();

  const goHos = () => navigate(`hospital`);
  const goHome = () => navigate(`/home`);
  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);
  const goTransport = () => navigate(`/appointment/transport`);
  const goDiag = () => navigate(`/diagnosis`);

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <A.C_title id="title">병원예약</A.C_title>
            <img src={`${process.env.PUBLIC_URL}/images/Hospital.svg`} alt="hospital" />
          </div>

          <A.C_btn id="btn" onClick={goHos}>
            예약하기
          </A.C_btn>
        </A.Component>

        <A.Component>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <A.C_title id="title">교통예약</A.C_title>
            <img src={`${process.env.PUBLIC_URL}/images/Bus.svg`} alt="bus" />
          </div>

          <A.C_btn id="btn" onClick={goTransport}>
            예약하기
          </A.C_btn>
        </A.Component>
      </A.Content>

      <A.Nav>
        <A.Comp onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/images/home_b.svg`} alt="home" />
          <div>홈페이지</div>
        </A.Comp>
        <A.Comp onClick={goDiag}>
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

export default Appointment;
