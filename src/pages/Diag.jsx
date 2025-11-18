import React from "react";
import * as D from "../styles/StyledDiag";
import { useNavigate } from "react-router-dom";

const Diag = () => {
  const navigate = useNavigate();

  const goAppoint = () => navigate(`/appointment`);
  const goHome = () => navigate(`/home`);
  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);
  const goIng = () => navigate(`/diagnosis/ing`);

  return (
    <D.Container>
      <D.Header>
        <img
          src={`${process.env.PUBLIC_URL}/images/Back.svg`}
          alt="back"
          id="back"
          onClick={goBack}
        />
        <div id="detail">진단선택</div>
      </D.Header>

      <D.Btn>
        <img
          src={`${process.env.PUBLIC_URL}/images/shoulder.png`}
          alt="회전근개"
          id="img1"
        />
        <D.Det>
          <D.Text>
            <div id="name">회전근개 파열</div>
            <div id="detail">어깨를 들거나 옆으로 벌릴때 통증이 있어요</div>
          </D.Text>
          <D.Button onClick={goIng}>
            <div>진단 받기</div>
            <img src={`${process.env.PUBLIC_URL}/images/Go.svg`} alt="go" />
          </D.Button>
        </D.Det>
      </D.Btn>

      <D.Btn>
        <img
          src={`${process.env.PUBLIC_URL}/images/knee.png`}
          alt="회전근개"
          id="img1"
        />
        <D.Det>
          <D.Text>
            <div id="name">퇴행성 관절염</div>
            <div id="detail">
              무릎이 아프고 뻣뻣하며, 계단 오르내릴때 힘들어요
            </div>
          </D.Text>
          <D.Button onClick={goIng}>
            <div>진단 받기</div>
            <img src={`${process.env.PUBLIC_URL}/images/Go.svg`} alt="go" />
          </D.Button>
        </D.Det>
      </D.Btn>

      <D.Btn>
        <img
          src={`${process.env.PUBLIC_URL}/images/vert.png`}
          alt="회전근개"
          id="img1"
        />
        <D.Det>
          <D.Text>
            <div id="name">척추관 협착</div>
            <div id="detail">
              서 있거나 걸을때 다리가 저리고 아프며, 허리를 굽히면 증상이 잠깐
              완화돼요
            </div>
          </D.Text>
          <D.Button onClick={goIng}>
            <div>진단 받기</div>
            <img src={`${process.env.PUBLIC_URL}/images/Go.svg`} alt="go" />
          </D.Button>
        </D.Det>
      </D.Btn>

      <D.Btn>
        <img
          src={`${process.env.PUBLIC_URL}/images/lumbar.png`}
          alt="회전근개"
          id="img2"
        />
        <D.Det>
          <D.Text>
            <div id="name">요추 디스크 탈출증</div>
            <div id="detail">
              서 있거나 걸을때 다리가 저리고 아프며, 허리를 굽히면 증상이 잠깐
              완화돼요
            </div>
          </D.Text>
          <D.Button onClick={goIng}>
            <div>진단 받기</div>
            <img src={`${process.env.PUBLIC_URL}/images/Go.svg`} alt="go" />
          </D.Button>
        </D.Det>
      </D.Btn>

      <D.Nav>
        <D.Comp onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/images/home_b.svg`} alt="home" />
          <div>홈페이지</div>
        </D.Comp>
        <D.Comp>
          <img
            src={`${process.env.PUBLIC_URL}/images/search_c.svg`}
            alt="search"
          />
          <div>진단하기</div>
        </D.Comp>
        <D.Comp onClick={goAppoint}>
          <img
            src={`${process.env.PUBLIC_URL}/images/reser_b.svg`}
            alt="reservation"
            style={{ width: "28px", height: "28px" }}
          />
          <div>예약하기</div>
        </D.Comp>
        <D.Comp style={{ gap: "7px" }} onClick={goMy}>
          <img
            src={`${process.env.PUBLIC_URL}/images/info_b.svg`}
            alt="info"
            style={{ width: "21px", height: "21px" }}
          />
          <div>내 정보</div>
        </D.Comp>
      </D.Nav>
    </D.Container>
  );
};

export default Diag;
