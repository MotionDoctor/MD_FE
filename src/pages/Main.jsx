import React from "react";
import * as M from "../styles/StyledMain";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const goAppoint = () => navigate(`/appointment`);
  const goDiag = () => navigate(`/diagnosis`);
  const goMy = () => navigate(`/my`);

  return (
    <M.Container>
      <M.Header>“아픈 곳이 있나요?”</M.Header>

      <M.Mention>
        손쉽게 내 증상을 확인하고
        <br />
        병원 예약까지 한 번에!
      </M.Mention>

      <M.Btn>
        <M.Det>
          <img
            src={`${process.env.PUBLIC_URL}/images/diagnosis.png`}
            alt="진단"
            id="diag"
          />
          <M.Text>
            <div id="title">진단</div>
            <div id="detail">
              증상에 맞는 정확한
              <br />
              진단을 받아보세요
            </div>
          </M.Text>
        </M.Det>
        <M.Go onClick={goDiag}>
          <div>진단 받기</div>
          <img src={`${process.env.PUBLIC_URL}/images/Go.svg`} alt="go" />
        </M.Go>
      </M.Btn>

      <M.Btn>
        <M.Det>
          <img
            src={`${process.env.PUBLIC_URL}/images/reservation.png`}
            alt="예약"
            id="reserv"
          />
          <M.Text>
            <div id="title">예약</div>
            <div id="detail">
              가까운 병원과 교통
              <br />
              편을 예약해보세요
            </div>
          </M.Text>
        </M.Det>
        <M.Go onClick={goAppoint}>
          <div>예약 하기</div>
          <img src={`${process.env.PUBLIC_URL}/images/Go.svg`} alt="go" />
        </M.Go>
      </M.Btn>

      <M.Nav>
        <M.Comp>
          <img src={`${process.env.PUBLIC_URL}/images/home_c.svg`} alt="home" />
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
        <M.Comp style={{ gap: "7px" }} onClick={goMy}>
          <img
            src={`${process.env.PUBLIC_URL}/images/info_b.svg`}
            alt="info"
            style={{ width: "21px", height: "21px" }}
          />
          <div>내 정보</div>
        </M.Comp>
      </M.Nav>
    </M.Container>
  );
};

export default Main;
