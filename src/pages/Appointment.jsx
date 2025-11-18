import React from "react";
import * as R from "../styles/StyledAppointment";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();

  const goHos = () => navigate(`/hospital`);
  const goHome = () => navigate(`/home`);
  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);

  return (
    <R.Container>
      <R.Header>
        <R.Icons>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Back.svg`}
            alt="back"
            onClick={goBack}
          />
        </R.Icons>
        <R.Title>예약선택</R.Title>
      </R.Header>

      <R.Content>
        <R.Component>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div id="title">병원예약</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Hospital.svg`}
              alt="hospital"
            />
          </div>

          <div id="btn" onClick={goHos}>
            예약하기
          </div>
        </R.Component>
        <R.Component>
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
        </R.Component>
      </R.Content>

      <R.Nav>
        <R.Comp onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/images/home_b.svg`} alt="home" />
          <div>홈페이지</div>
        </R.Comp>
        <R.Comp>
          <img
            src={`${process.env.PUBLIC_URL}/images/search_b.svg`}
            alt="search"
          />
          <div>진단하기</div>
        </R.Comp>
        <R.Comp>
          <img
            src={`${process.env.PUBLIC_URL}/images/reser_c.svg`}
            alt="reservation"
            style={{ width: "28px", height: "28px" }}
          />
          <div>예약하기</div>
        </R.Comp>
        <R.Comp style={{ gap: "7px" }} onClick={goMy}>
          <img
            src={`${process.env.PUBLIC_URL}/images/info_b.svg`}
            alt="info"
            style={{ width: "21px", height: "21px" }}
          />
          <div>내 정보</div>
        </R.Comp>
      </R.Nav>
    </R.Container>
  );
};

export default Appointment;
