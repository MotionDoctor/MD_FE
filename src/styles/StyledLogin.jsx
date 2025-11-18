import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100dvh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 393px;
  flex-shrink: 0;
  align-items: center;
  background: #eef2f7;
  padding-bottom: 150px;
`;

export const Det = styled.div`
  width: 100%;
  align-items: start;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  padding: 0 49px;
  gap: 32px;

  #img {
    width: 65px;
    height: 65px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    border-radius: 51px;
  }

  #detail {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
  }
`;

export const Input = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: 100%;
  align-items: center;

  #id {
    width: 275px;
    display: flex;
    padding: 17px 10px;
    align-items: start;
    text-align: left;
    gap: 10px;
    border-radius: 15px;
    border: 1px solid #626262;
    background: #fff;
    font-family: "Gmarket Sans TTF";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.8px;
    color: black;
    outline: none;

    &:placeholder {
      color: #626262;
    }
  }
`;

export const Button = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
`;

export const Login = styled.div`
  display: flex;
  height: 53px;
  padding: 15px 19px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #002159;
  color: #fff;
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 22px */
  width: 295px;
`;

export const Signup = styled.div`
  display: flex;
  height: 53px;
  padding: 15px 19px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #fff;
  color: #002159;
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 22px */
  width: 295px;
`;
