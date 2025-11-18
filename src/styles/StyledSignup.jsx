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

export const Header = styled.div`
  display: flex;
  height: 60px;
  padding: 9px 6px;
  flex-direction: row;
  align-items: center;
  gap: 101px;
  flex-shrink: 0;
  align-self: stretch;
  background: #002159;

  img {
    width: 41px;
    height: 41px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }

  #detail {
    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-family: "Gmarket Sans TTF";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 89px; /* 342.308% */
  }
`;

export const Priv = styled.div`
  display: flex;
  width: 275px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-top: 88px;

  #input {
    display: flex;
    padding: 17px 10px;
    align-items: start;
    gap: 10px;
    align-self: stretch;
    border-radius: 15px;
    border: 1px solid #626262;
    background: #fff;
    color: black;
    text-align: left;
    font-family: "Gmarket Sans TTF";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.8px;
    outline: none;

    &:placeholder {
      color: #626262;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  width: 275px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 54px;

  #input {
    display: flex;
    padding: 17px 10px;
    align-items: start;
    gap: 10px;
    align-self: stretch;
    border-radius: 15px;
    border: 1px solid #626262;
    background: #fff;
    color: black;
    text-align: left;
    font-family: "Gmarket Sans TTF";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.8px;
    outline: none;

    &:placeholder {
      color: #626262;
    }
  }
`;

export const Btn = styled.div`
  display: flex;
  height: 53px;
  padding: 15px 19px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 295px;
  margin-top: 77px;
  border-radius: 10px;
  background: #002159;
  color: #fff;
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 22px */
`;
