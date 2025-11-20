import React from "react";
import * as T from "../styles/StyledHospital";
import { useNavigate } from "react-router-dom";

const Transport = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate(`/home`);
  const goAppoint = () => navigate(`/appointment`);
  const goMy = () => navigate(`/my`);
  const goDiag = () => navigate(`/diagnosis`);
  const goComplete = () => navigate(`complete`);

  return (
    <T.Container>
      <T.Header>
        <T.Icons>
          <img id="back" src={`${process.env.PUBLIC_URL}/images/Back.svg`} alt="back" onClick={goBack} />
        </T.Icons>
        <T.Title>교통편선택</T.Title>
      </T.Header>

      <T.Content>
        <T.Destination>
          <T.C_title>목적지: 경북대병원</T.C_title>
          현재 위치에서 25km
        </T.Destination>
        <T.Component>
          <T.C_title>무료 셔틀버스</T.C_title>
          <T.C_sub>소요시간: 약 45분</T.C_sub>
          <T.C_wrapper>
            <T.C_inform>운행시간</T.C_inform>
            <T.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/Clock.svg`} alt="clock" />
              오전 8시, 오후 1시 출발
            </T.C_inform>
          </T.C_wrapper>
          <T.Divider />
          <T.C_btn id="btn" onClick={goComplete}>
            예약하기
          </T.C_btn>
        </T.Component>

        <T.Component>
          <T.C_title>자원봉사 동행</T.C_title>
          <T.C_sub>소요시간: 약 1시간(시외버스)</T.C_sub>
          <T.C_wrapper>
            <T.C_inform>운행시간</T.C_inform>
            <T.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/Clock.svg`} alt="clock" />
              예약 후 담당자와 연락
            </T.C_inform>
          </T.C_wrapper>
          <T.Divider />
          <T.C_btn id="btn" onClick={goComplete}>
            예약하기
          </T.C_btn>
        </T.Component>
      </T.Content>

      <T.Nav>
        <T.Comp onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/images/home_b.svg`} alt="home" />
          <div>홈페이지</div>
        </T.Comp>
        <T.Comp onClick={goDiag}>
          <img src={`${process.env.PUBLIC_URL}/images/search_b.svg`} alt="search" />
          <div>진단하기</div>
        </T.Comp>
        <T.Comp onClick={goAppoint}>
          <img src={`${process.env.PUBLIC_URL}/images/reser_c.svg`} alt="reservation" style={{ width: "28px", height: "28px" }} />
          <div>예약하기</div>
        </T.Comp>
        <T.Comp style={{ gap: "7px" }} onClick={goMy}>
          <img src={`${process.env.PUBLIC_URL}/images/info_b.svg`} alt="info" style={{ width: "21px", height: "21px" }} />
          <div>내 정보</div>
        </T.Comp>
      </T.Nav>
    </T.Container>
  );
};

export default Transport;
