import React from "react";
import * as C from "../styles/StyledComplete";
import { useNavigate } from "react-router-dom";

const Complete_H = () => {
  const navigate = useNavigate();

  const goHome = () => navigate(`/home`);
  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);
  const goDiag = () => navigate(`/diagnosis`);

  return (
    <C.Container>
      <C.Header>
        <C.Icons>
          <img id="back" src={`${process.env.PUBLIC_URL}/images/Back.svg`} alt="back" onClick={goBack} />
        </C.Icons>
        <C.Title>예약선택</C.Title>
      </C.Header>

      <C.Content>
        <C.Component
          style={{
            alignItems: "center",
          }}
        >
          <C.C_title>예약이 완료되었습니다</C.C_title>
          <C.Info_wrapper
            style={{
              alignItems: "center",
            }}
          >
            <C.Info>경북대학교 병원</C.Info>
            <C.Info>9월 20일 오후 2시</C.Info>
            <C.Info>정형외과</C.Info>
          </C.Info_wrapper>
        </C.Component>
        <C.Component>
          <C.C_title>진료 전 안내사항</C.C_title>

          <C.Info_wrapper>
            <C.Info className="check">진료 30분 전 도착해주세요</C.Info>
            <C.Divider />
            <C.Info className="check">보험증을 지참해주세요</C.Info>
            <C.Divider />
            <C.Info className="check">복용 중인 약물 목록을 준비해주세요</C.Info>
          </C.Info_wrapper>
        </C.Component>
        <div style={{ marginTop: "25px" }}>
          <C.C_btn onClick={() => navigate(`/appointment/hospital`)}>다른 병원 예약하기</C.C_btn>
          <C.C_btn onClick={() => navigate(`/appointment/transport`)}>교통편 신청하기</C.C_btn>
        </div>
      </C.Content>

      <C.Nav>
        <C.Comp onClick={goHome}>
          <img src={`${process.env.PUBLIC_URL}/images/home_b.svg`} alt="home" />
          <div>홈페이지</div>
        </C.Comp>
        <C.Comp onClick={goDiag}>
          <img src={`${process.env.PUBLIC_URL}/images/search_b.svg`} alt="search" />
          <div>진단하기</div>
        </C.Comp>
        <C.Comp onClick={() => navigate(`/appointment`)}>
          <img src={`${process.env.PUBLIC_URL}/images/reser_c.svg`} alt="reservation" style={{ width: "28px", height: "28px" }} />
          <div>예약하기</div>
        </C.Comp>
        <C.Comp style={{ gap: "7px" }} onClick={goMy}>
          <img src={`${process.env.PUBLIC_URL}/images/info_b.svg`} alt="info" style={{ width: "21px", height: "21px" }} />
          <div>내 정보</div>
        </C.Comp>
      </C.Nav>
    </C.Container>
  );
};

export default Complete_H;
