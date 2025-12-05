import React, { useState, useEffect } from "react";
import * as D from "../styles/StyledDiag";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Diag = () => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);

  const goAppoint = () => navigate(`/appointment`);
  const goHome = () => navigate(`/home`);
  const goBack = () => navigate(-1);
  const goMy = () => navigate(`/my`);
  const goIng = () => navigate(`/diagnosis/ing`);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await axios.get(
          "http://133.186.132.40:8000/v1/diagnosis/templates"
        );
        const filtered = res.data.templates.filter((item) => item.id <= 4);
        setTemplates(filtered);
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };
    fetchTemplates();
  }, []);

  // 아이콘에 맞게 이미지 파일명을 설정하는 함수
  const getImageFile = (icon) => {
    switch (icon) {
      case "shoulder":
        return "shoulder.png";
      case "joint":
        return "knee.png";
      case "spine":
        return "vert.png";
      case "back":
        return "lumbar.png";
      default:
        return "default.png";
    }
  };

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

      {templates.map((item) => (
        <D.Btn key={item.id}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${getImageFile(item.icon)}`}
            alt={item.name}
            id="img1"
          />
          <D.Det>
            <D.Text>
              <div id="name">{item.name}</div>
              <div id="detail">{item.description}</div>
            </D.Text>
            <D.Button onClick={goIng}>
              <div>진단 받기</div>
              <img src={`${process.env.PUBLIC_URL}/images/Go.svg`} alt="go" />
            </D.Button>
          </D.Det>
        </D.Btn>
      ))}

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
