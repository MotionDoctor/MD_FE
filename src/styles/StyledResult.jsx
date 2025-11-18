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

export const Box = styled.div`
  display: flex;
  width: 363px;
  height: 200px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 5.039px 30.233px 50.388px 0 rgba(90, 117, 167, 0.04);
  margin-top: 100px;
  margin-bottom: 56px;
`;

export const Side = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  img {
    width: 120px;
    height: 120px;
    aspect-ratio: 1/1;
  }
`;

export const Up = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  text-align: center;

  #need {
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #result {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const More = styled.div`
  display: flex;
  margin-top: 8px;
  color: #000;
  text-align: center;
  font-family: "Gmarket Sans TTF";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 115.771%; /* 34.731px */
`;

export const Summary = styled.div`
  width: 363px;
  padding: 20px 20px;
  background-color: #fff;
  align-items: center;
  display: flex;
  flex-direction: column;

  li {
    margin-left: 8px;
    width: 303px;
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 170%;
    letter-spacing: 0.3px;
  }
`;

export const Btn = styled.div`
  display: flex;
  height: 64px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  width: 283px;
  margin-top: 30px;
  color: #4894fe;
  font-family: "Gmarket Sans TTF";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  border-radius: 10px;
  background: rgba(99, 180, 255, 0.1);
`;

export const Nav = styled.div`
  display: flex;
  width: 393px;
  height: 65px;
  padding: 10px 43px;
  flex-direction: row;
  gap: 10px;
  background: #fff;
  justify-content: space-between;
  align-items: end;
  position: fixed;
  bottom: 0;
  margin-left: 0;
  z-index: 1000; /* 다른 요소 위에 보이도록 */
`;

export const Comp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  img {
    width: 29px;
    height: 29px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }

  div {
    color: #002159;
    font-family: "Gmarket Sans TTF";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
  }
`;
