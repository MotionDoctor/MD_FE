import React from "react";
import * as H from "../styles/StyledHospital";
import { useNavigate } from "react-router-dom";

const Hospital = () => {
  const navigate = useNavigate();

  return (
    <H.Container>
      <H.Header>
        <H.Icons>
          <img id="back" src={`${process.env.PUBLIC_URL}/images/back.svg`} alt="back" onClick={() => navigate("/MainPage")} />
        </H.Icons>
        <H.Title>병원선택</H.Title>
      </H.Header>

      <H.Content>
        <H.Component>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div id="title">병원예약</div>
            <img src={`${process.env.PUBLIC_URL}/images/Hospital.svg`} alt="hospital" />
          </div>

          <div id="btn">예약하기</div>
        </H.Component>

        <H.Component>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div id="title">교통예약</div>
            <img src={`${process.env.PUBLIC_URL}/images/Bus.svg`} alt="bus" />
          </div>

          <div id="btn">예약하기</div>
        </H.Component>
      </H.Content>
    </H.Container>
  );
};

export default Hospital;
