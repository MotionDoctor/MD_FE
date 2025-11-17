import React from "react";
import * as R from "../styles/StyledAppointment";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();

  return (
    <R.Container>
      <R.Header>
        <R.Icons>
          <img id="back" src={`${process.env.PUBLIC_URL}/images/back.svg`} alt="back" onClick={() => navigate("/MainPage")} />
        </R.Icons>
        <R.Title>예약선택</R.Title>
      </R.Header>

      <R.Content>
        <R.Component>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <div id="title">병원예약</div>
            <img src={`${process.env.PUBLIC_URL}/images/Hospital.svg`} alt="hospital" />
          </div>

          <div id="btn">예약하기</div>
        </R.Component>
        <R.Component>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <div id="title">교통예약</div>
            <img src={`${process.env.PUBLIC_URL}/images/Bus.svg`} alt="bus" />
          </div>

          <div id="btn">예약하기</div>
        </R.Component>
      </R.Content>
    </R.Container>
  );
};

export default Appointment;
