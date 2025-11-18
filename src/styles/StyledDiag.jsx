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
  height: 60px;
  padding: 9px 6px;
  flex-direction: row;
  align-items: center;
  gap: 101px;
  flex-shrink: 0;
  align-self: stretch;
  background: #002159;
  margin-bottom: 22px;

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

export const Btn = styled.div`
  margin-top: 40px;
  display: flex;
  height: 220px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 333px;
  height: 180px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 4.251px 25.503px 42.505px 0 rgba(90, 117, 167, 0.04);

  #img1 {
    width: 140px;
    height: 140px;
    aspect-ratio: 1/1;
  }

  #img2 {
    width: 130px;
    height: 130px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }
`;

export const Det = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 145px;
  justify-content: space-between;
  height: 140px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  #name {
    color: #002159;
    font-family: "Gmarket Sans TTF";
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
  }

  #detail {
    color: #002159;
    font-family: "Gmarket Sans TTF";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    text-align: left;
  }
`;

export const Button = styled.div`
  width: 145px;
  display: flex;
  height: 34px;
  padding: 10px 28px;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
  background: #002159;

  div {
    color: #fff;
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    margin-top: 2px;
  }

  img {
    width: 21px;
    height: 9.5px;
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
