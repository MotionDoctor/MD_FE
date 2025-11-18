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
  padding-bottom: 135px;
`;

export const Header = styled.div`
  display: flex;
  height: 60px;
  padding: 9px 6px;
  flex-direction: row;
  align-items: center;
  gap: 112px;
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

export const Me = styled.div`
  display: flex;
  width: 243px;
  padding: 35px 56px;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 5.039px 30.233px 50.388px 0 rgba(90, 117, 167, 0.04);
  margin-top: 60px;

  img {
    width: 33.333px;
    height: 33.333px;
  }

  div {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Tit = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 293px;
  text-align: left;
  margin-top: 50px;
  margin-bottom: 8px;
`;

export const Record = styled.div`
  display: flex;
  padding: 15px 11px;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 293px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 5.039px 30.233px 50.388px 0 rgba(90, 117, 167, 0.04);
  margin-top: 20px;
  justify-content: center;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;

  #date {
    color: #8696bb;
    font-family: "Gmarket Sans TTF";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
  }

  #title {
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
  }
`;

export const Status = styled.div`
  display: flex;
  padding: 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: rgba(99, 180, 255, 0.1);
  width: 61px;
  color: #4894fe;
  font-family: "Gmarket Sans TTF";
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 11px */
  width: 115px;
`;

export const Reserv = styled.div`
  display: flex;
  padding: 20px 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 293px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 5.039px 30.233px 50.388px 0 rgba(90, 117, 167, 0.04);
  margin-top: 20px;
`;

export const Hos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: start;

  #name {
    color: #000;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
  }

  #class {
    text-align: left;
    color: #8696bb;
    font-family: "Gmarket Sans TTF";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: start;

  #date {
    color: #8696bb;
    font-family: "Gmarket Sans TTF";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
  }

  #time {
    color: #8696bb;
    font-family: "Gmarket Sans TTF";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
  }
`;

export const History = styled.div`
  display: flex;
  padding: 16px 30px;
  flex-direction: row;
  align-items: center;
  gap: 47px;
  width: 293px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 5.039px 30.233px 50.388px 0 rgba(90, 117, 167, 0.04);
`;

export const Traffic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: start;

  #bus {
    color: #000;
    text-align: left;
    font-family: "Gmarket Sans TTF";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #loca {
    color: #8696bb;
    font-family: "Gmarket Sans TTF";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
  }
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
