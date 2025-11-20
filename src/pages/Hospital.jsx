import React from "react";
import * as H from "../styles/StyledHospital";
import { useNavigate } from "react-router-dom";

const Hospital = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate(`/home`);
  const goAppoint = () => navigate(`/appointment`);
  const goMy = () => navigate(`/my`);
  const goDetail = () => navigate(`/appointment/hospital/check`);

  return (
    <H.Container>
      <H.Header>
        <H.Icons>
          <img id="back" src={`${process.env.PUBLIC_URL}/images/Back.svg`} alt="back" onClick={goBack} />
          <img id="back" src={`${process.env.PUBLIC_URL}/images/Back.svg`} alt="back" onClick={goBack} />
        </H.Icons>
        <H.Title>병원선택</H.Title>
      </H.Header>

      <H.Content>
        <H.Component>
          <H.C_title>경북대학교 병원</H.C_title>
          <H.C_sub>정형외과</H.C_sub>
          <H.C_wrapper>
            <H.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/Clock.svg`} alt="back" />
              9월 20일
            </H.C_inform>
            <H.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/Calendar.svg`} alt="back" />
              10:00 - 12:00 AM
            </H.C_inform>
          </H.C_wrapper>
          <H.Divider />
          <H.C_btn id="btn" onClick={goDetail}>
            예약하기
          </H.C_btn>
        </H.Component>

        <H.Component>
          <H.C_title>안동병원</H.C_title>
          <H.C_sub>재활의학과</H.C_sub>
          <H.C_wrapper>
            <H.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/Clock.svg`} alt="back" />
              9월 20일
            </H.C_inform>
            <H.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/Calendar.svg`} alt="back" />
              10:00 - 12:00 AM
            </H.C_inform>
          </H.C_wrapper>
          <H.Divider />
          <H.C_btn id="btn">예약하기</H.C_btn>
        </H.Component>

        <H.Component>
          <H.C_title>의성군보건소</H.C_title>
          <H.C_sub>가정의학과</H.C_sub>
          <H.C_wrapper>
            <H.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/Clock.svg`} alt="back" />
              9월 27일
            </H.C_inform>
            <H.C_inform>
              <img id="clock" src={`${process.env.PUBLIC_URL}/images/Calendar.svg`} alt="back" />
              9:00 - 12:00 AM
            </H.C_inform>
          </H.C_wrapper>
          <H.Divider />
          <H.C_btn id="btn">예약하기</H.C_btn>
        </H.Component>
      </H.Content>

      <H.Nav>
        <H.Comp onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/images/home_b.svg`} alt="home" />
          <div>홈페이지</div>
        </H.Comp>
        <H.Comp>
          <img src={`${process.env.PUBLIC_URL}/images/search_b.svg`} alt="search" />
          <div>진단하기</div>
        </H.Comp>
        <H.Comp onClick={goAppoint}>
          <img src={`${process.env.PUBLIC_URL}/images/reser_c.svg`} alt="reservation" style={{ width: "28px", height: "28px" }} />
          <div>예약하기</div>
        </H.Comp>
        <H.Comp style={{ gap: "7px" }} onClick={goMy}>
          <img src={`${process.env.PUBLIC_URL}/images/info_b.svg`} alt="info" style={{ width: "21px", height: "21px" }} />
          <div>내 정보</div>
        </H.Comp>
      </H.Nav>
    </H.Container>
  );
};

export default Hospital;
