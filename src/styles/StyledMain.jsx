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
  padding-bottom: 130px;
`;

export const Header = styled.div`
  display: flex;
  height: 88px;
  padding: 0 63px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: #002159;
  color: #fff;
  leading-trim: both;
  text-edge: cap;
  font-family: "Gmarket Sans TTF";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 89px; /* 296.667% */
`;

export const Mention = styled.div`
  color: #002159;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: "Gmarket Sans TTF";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; /* 132% */
  margin-top: 50px;
  margin-bottom: 11px;
`;

export const Btn = styled.div`
  display: flex;
  width: 289px;
  padding: 16px 20px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 4.251px 25.503px 42.505px 0 rgba(90, 117, 167, 0.04);
  margin-top: 64px;
`;

export const Det = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
  height: 87px;

  #diag {
    width: 87px;
    height: 87px;
    aspect-ratio: 1/1;
  }

  #reserv {
    width: 70px;
    height: 105px;
    aspect-ratio: 2/3;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 8px;

  #title {
    color: #002159;
    font-family: "Gmarket Sans TTF";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
  }

  #detail {
    color: #002159;
    font-family: "Gmarket Sans TTF";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }
`;

export const Go = styled.div`
  display: flex;
  padding: 13px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 249px;
  height: 42px;
  border-radius: 10px;
  background: #002159;

  div {
    color: #fff;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px; /* 305.556% */
    margin-top: 2px;
  }

  img {
    margin-left: 4px;
    width: 27px;
    height: 13px;
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
