import React from "react";
import * as T from "../styles/StyledComplete";
import { useNavigate } from "react-router-dom";

const Complete_T = () => {
  const navigate = useNavigate();

  const goAppoint = () => navigate(`/appointment`);
  const goHome = () => navigate(`/home`);
  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);
  const goDiag = () => navigate(`/diagnosis`);

  return (
    <T.Container>
      <T.Header>
        <T.Icons>
          <img id="back" src={`${process.env.PUBLIC_URL}/images/Back.svg`} alt="back" onClick={goBack} />
        </T.Icons>
        <T.Title>예약선택</T.Title>
      </T.Header>

      <T.Content>
        <T.Component>
          <T.C_title>교통편 정보</T.C_title>

          <T.Info_wrapper>
            <T.InfoRow>
              <T.InfoLeft>• 교통편</T.InfoLeft>
              <T.InfoRight>셔틀버스</T.InfoRight>
            </T.InfoRow>
            <T.Divider />

            <T.InfoRow>
              <T.InfoLeft>• 비용</T.InfoLeft>
              <T.InfoRight>무료</T.InfoRight>
            </T.InfoRow>
            <T.Divider />

            <T.InfoRow>
              <T.InfoLeft>• 소요시간</T.InfoLeft>
              <T.InfoRight>45분</T.InfoRight>
            </T.InfoRow>
            <T.Divider />

            <T.InfoRow>
              <T.InfoLeft>• 운행시간</T.InfoLeft>
              <T.InfoRight>오전 8시, 오후 12시</T.InfoRight>
            </T.InfoRow>
          </T.Info_wrapper>
        </T.Component>

        <div style={{ display: "flex", gap: "14px", marginTop: "90px" }}>
          <T.btn1 onClick={() => navigate(`/appointment/hospital`)}>병원 예약하기</T.btn1>
          <T.btn2 onClick={goMy}>신청확정</T.btn2>
        </div>
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

export default Complete_T;
