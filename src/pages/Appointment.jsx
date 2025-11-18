import React from "react";
import * as A from "../styles/StyledAppointment";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();

  const goHos = () => navigate(`/hospital`);
  const goHome = () => navigate(`/home`);
  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);

  return (
    <A.Container>
      <A.Header>
        <A.Icons>
          <img id="back" src={`${process.env.PUBLIC_URL}/images/back.svg`} alt="back" onClick={() => navigate("/MainPage")} />
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

          <A.C_btn id="btn">예약하기</A.C_btn>
        </A.Component>
      </A.Content>
    </A.Container>
  );
};

export default Appointment;
