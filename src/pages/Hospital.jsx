import React, { useEffect, useState } from "react";
import axios from "axios";
import * as H from "../styles/StyledHospital";
import { useNavigate } from "react-router-dom";

const Hospital = () => {
  const navigate = useNavigate();

  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  const goBack = () => navigate(-1);
  const goHome = () => navigate(`/home`);
  const goAppoint = () => navigate(`/appointment`);
  const goMy = () => navigate(`/my`);

  // 병원 상세 페이지로 이동
  const goDetail = (hospital) => {
    navigate(`/appointment/hospital/check`, { state: { hospital } });
  };

  const LoadingBox = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#F3F6FA",
        }}
      >
        <div
          style={{
            backgroundColor: "#022B63",
            padding: "32px 48px",
            borderRadius: "12px",
            color: "white",
            fontSize: "22px",
            fontWeight: "700",
            textAlign: "center",
            lineHeight: "1.4",
            fontFamily: "Gmarket Sans TTF",
          }}
        >
          예약 가능한 병원을
          <br />
          조회중입니다
        </div>
      </div>
    );
  };

  // 내 위치 기반 병원 검색
  useEffect(() => {
    getNearbyHospitals();
  }, []);

  const getNearbyHospitals = async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;

        const response = await axios.get(`http://133.186.132.40:8000/v1/hospitals?lat=${latitude}&lng=${longitude}&radius=10`);
        console.log("현재 위도:", latitude);
        console.log("현재 경도:", longitude);
        setHospitals(response.data.hospitals);
        setLoading(false);
        console.log(JSON.stringify(response.data, null, 2));
      });
    } catch (err) {
      console.error("병원 조회 실패:", err);
      setLoading(false);
    }
  };

  return (
    <H.Container>
      <H.Header>
        <H.Icons>
          <img id="back" src={`${process.env.PUBLIC_URL}/images/Back.svg`} alt="back" onClick={goBack} />
        </H.Icons>
        <H.Title>병원선택</H.Title>
      </H.Header>

      <H.Content>
        {loading ? (
          <LoadingBox />
        ) : (
          <>
            {hospitals.length === 0 && <div style={{ textAlign: "center", marginTop: "20px" }}>근처 병원이 없습니다.</div>}

            {hospitals.map((hospital) => (
              <H.Component key={hospital.id}>
                <H.C_title>{hospital.name}</H.C_title>
                <H.C_sub>
                  {hospital.departments && hospital.departments.length > 0
                    ? hospital.departments.length === 1
                      ? hospital.departments[0]
                      : `${hospital.departments[0]} 외 ${hospital.departments.length - 1}`
                    : "진료과 정보 없음"}
                </H.C_sub>

                <H.C_wrapper>
                  <H.C_inform>
                    <img src={`${process.env.PUBLIC_URL}/images/Clock.svg`} alt="clock" />
                    {hospital.distance} km
                  </H.C_inform>

                  <H.C_inform>
                    <img src={`${process.env.PUBLIC_URL}/images/Calendar.svg`} alt="loc" />
                    {hospital.address}
                  </H.C_inform>
                </H.C_wrapper>

                <H.Divider />

                <H.C_btn id="btn" onClick={() => goDetail(hospital)}>
                  예약하기
                </H.C_btn>
              </H.Component>
            ))}
          </>
        )}
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
