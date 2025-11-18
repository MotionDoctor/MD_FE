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
  gap: 108px;
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

export const Title = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 55px;
  width: 323px;
  text-align: left;
`;

export const Img = styled.div`
  margin-top: 35px;
  height: 339px;
  width: 323px;
  aspect-ratio: 323/339;
  background-color: #232323;
`;

export const Box = styled.div`
  margin-top: 50px;
  display: flex;
  padding: 21px;
  justify-content: center;
  align-items: center;
  width: 323px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 5.039px 30.233px 50.388px 0 rgba(90, 117, 167, 0.04);

  div {
    color: #000;
    font-family: "Gmarket Sans TTF";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 200% */
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
