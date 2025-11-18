import React from "react";
import * as H from "../styles/StyledHospital";
import { useNavigate } from "react-router-dom";

const Hospital = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate(`/home`);
  const goAppoint = () => navigate(`/appointment`);
  const goMy = () => navigate(`/my`);

  return (
    <H.Container>
      <H.Header>
        <H.Icons>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/back.svg`}
            alt="back"
            onClick={goBack}
          />
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
            <img
              src={`${process.env.PUBLIC_URL}/images/Hospital.svg`}
              alt="hospital"
            />
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

      <H.Nav>
        <H.Comp onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/images/home_b.svg`} alt="home" />
          <div>홈페이지</div>
        </H.Comp>
        <H.Comp>
          <img
            src={`${process.env.PUBLIC_URL}/images/search_b.svg`}
            alt="search"
          />
          <div>진단하기</div>
        </H.Comp>
        <H.Comp onClick={goAppoint}>
          <img
            src={`${process.env.PUBLIC_URL}/images/reser_c.svg`}
            alt="reservation"
            style={{ width: "28px", height: "28px" }}
          />
          <div>예약하기</div>
        </H.Comp>
        <H.Comp style={{ gap: "7px" }} onClick={goMy}>
          <img
            src={`${process.env.PUBLIC_URL}/images/info_b.svg`}
            alt="info"
            style={{ width: "21px", height: "21px" }}
          />
          <div>내 정보</div>
        </H.Comp>
      </H.Nav>
    </H.Container>
  );
};

export default Hospital;
