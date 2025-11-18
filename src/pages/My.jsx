import React from "react";
import * as M from "../styles/StyledMy";
import { useNavigate } from "react-router-dom";

const My = () => {
  const navigate = useNavigate();

  const goAppoint = () => navigate(`/appointment`);
  const goHome = () => navigate(`/home`);
  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);
  const goDiag = () => navigate(`/diagnosis`);

  return (
    <M.Container>
      <M.Header>
        <img
          src={`${process.env.PUBLIC_URL}/images/Back.svg`}
          alt="back"
          id="back"
          onClick={goBack}
        />
        <div id="detail">내 정보</div>
      </M.Header>

      <M.Me>
        <img src={`${process.env.PUBLIC_URL}/images/my.svg`} alt="prof" />
        <div>김수현</div>
      </M.Me>

      <M.Tit>진단 기록</M.Tit>
      <M.Record>
        <M.Text>
          <div id="date">2025.4.11</div>
          <div id="title">회전근개 파열</div>
        </M.Text>
        <M.Status>대면진료 필요</M.Status>
      </M.Record>
      <M.Record>
        <M.Text>
          <div id="date">2025.9.20</div>
          <div id="title">퇴행성 관절염</div>
        </M.Text>
        <M.Status>정상 범위</M.Status>
      </M.Record>

      <M.Tit>병원 예약 내역</M.Tit>
      <M.Reserv>
        <M.Hos>
          <div id="name">경북대학교 병원</div>
          <div id="class">정형외과</div>
        </M.Hos>
        <M.Date>
          <div id="date">2025.9.25</div>
          <div id="time">오전 10시</div>
        </M.Date>
      </M.Reserv>

      <M.Tit>교통편 예약 내역</M.Tit>
      <M.History>
        <M.Traffic>
          <div id="bus">무료 셔틀버스</div>
          <div id="loca">
            출발지: 장정리 경로원
            <br />
            목적지: 경북대학교
          </div>
        </M.Traffic>
        <M.Date>
          <div id="date">2025.9.25</div>
          <div id="time">오전 8시</div>
        </M.Date>
      </M.History>

      <M.Nav>
        <M.Comp onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/images/home_b.svg`} alt="home" />
          <div>홈페이지</div>
        </M.Comp>
        <M.Comp onClick={goDiag}>
          <img
            src={`${process.env.PUBLIC_URL}/images/search_b.svg`}
            alt="search"
          />
          <div>진단하기</div>
        </M.Comp>
        <M.Comp onClick={goAppoint}>
          <img
            src={`${process.env.PUBLIC_URL}/images/reser_b.svg`}
            alt="reservation"
            style={{ width: "28px", height: "28px" }}
          />
          <div>예약하기</div>
        </M.Comp>
        <M.Comp style={{ gap: "7px" }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/info_c.svg`}
            alt="info"
            style={{ width: "21px", height: "21px" }}
          />
          <div>내 정보</div>
        </M.Comp>
      </M.Nav>
    </M.Container>
  );
};

export default My;
