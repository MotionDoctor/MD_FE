import React, { useState } from "react";
import * as R from "../styles/StyledResult";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

  const goAppoint = () => navigate(`/appointment`);
  const goHome = () => navigate(`/home`);
  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);
  const goDiag = () => navigate(`/dianosis`);

  const [open, setOpen] = useState(false);

  const toggleMore = () => {
    setOpen(!open);
  };

  return (
    <R.Container>
      <R.Header>
        <img
          src={`${process.env.PUBLIC_URL}/images/Back.svg`}
          alt="back"
          id="back"
          onClick={goBack}
        />
        <div id="detail">진단결과</div>
      </R.Header>

      <R.Box
        style={{
          height: open ? "auto" : "200px",
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
      >
        <R.Side>
          <img src={`${process.env.PUBLIC_URL}/images/no.png`} alt="no" />
          <R.Up>
            <div id="need">주의 필요</div>
            <div id="result">회전근 파열 의심</div>
          </R.Up>
        </R.Side>

        <R.More onClick={toggleMore}>
          {open ? "닫기 🔼" : "결과 더 알아보기 🔽"}
        </R.More>

        {open && (
          <R.Summary>
            <li>어깨 수평 동작 시 제한이 확인되었습니다.</li>
            <li>위로 올리는 동작에서 통증이 감지되었습니다.</li>
            <li>회전근 파열 가능성이 있어 전문의 진료를 권장합니다.</li>
          </R.Summary>
        )}
      </R.Box>

      <R.Btn onClick={goAppoint}>병원 예약하기</R.Btn>
      <R.Btn onClick={goDiag}>다시 진단하기</R.Btn>

      <R.Nav>
        <R.Comp onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/images/home_b.svg`} alt="home" />
          <div>홈페이지</div>
        </R.Comp>
        <R.Comp onClick={goDiag}>
          <img
            src={`${process.env.PUBLIC_URL}/images/search_c.svg`}
            alt="search"
          />
          <div>진단하기</div>
        </R.Comp>
        <R.Comp onClick={goAppoint}>
          <img
            src={`${process.env.PUBLIC_URL}/images/reser_b.svg`}
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

export default Result;
