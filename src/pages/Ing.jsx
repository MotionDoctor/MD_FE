import React, { useEffect } from "react";
import * as I from "../styles/StyledIng";
import { useNavigate } from "react-router-dom";

const Ing = () => {
  const navigate = useNavigate();

  const goAppoint = () => navigate(`/appointment`);
  const goHome = () => navigate(`/home`);
  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);
  const goDiag = () => navigate(`/diagnosis`);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/diagnosis/result`);
    }, 4000); // 4초

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <I.Container>
      <I.Header>
        <img
          src={`${process.env.PUBLIC_URL}/images/Back.svg`}
          alt="back"
          id="back"
          onClick={goBack}
        />
        <div id="detail">진단중</div>
      </I.Header>

      <I.Title>회전근개 파열</I.Title>

      <I.Img></I.Img>

      <I.Box>
        <div>
          1. 어깨를 수평으로 올리세요.
          <br />
          2. 서서히 위로 올리세요
          <br />
          3. 어깨에 통증이 있으면 멈추세요
        </div>
      </I.Box>

      <I.Nav>
        <I.Comp onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/images/home_b.svg`} alt="home" />
          <div>홈페이지</div>
        </I.Comp>
        <I.Comp onClick={goDiag}>
          <img
            src={`${process.env.PUBLIC_URL}/images/search_c.svg`}
            alt="search"
          />
          <div>진단하기</div>
        </I.Comp>
        <I.Comp onClick={goAppoint}>
          <img
            src={`${process.env.PUBLIC_URL}/images/reser_b.svg`}
            alt="reservation"
            style={{ width: "28px", height: "28px" }}
          />
          <div>예약하기</div>
        </I.Comp>
        <I.Comp style={{ gap: "7px" }} onClick={goMy}>
          <img
            src={`${process.env.PUBLIC_URL}/images/info_b.svg`}
            alt="info"
            style={{ width: "21px", height: "21px" }}
          />
          <div>내 정보</div>
        </I.Comp>
      </I.Nav>
    </I.Container>
  );
};

export default Ing;
