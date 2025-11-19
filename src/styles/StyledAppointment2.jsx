import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 393px;
  min-width: 320px;
  flex-shrink: 0;
  overflow: visible;
  align-items: center;
  background: #eef2f7;
`;

export const Header = styled.div`
  display: flex;
  height: 60px;
  padding: 9px 6px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  align-self: stretch;
  background: #002159;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  color: #fff;
  leading-trim: both;
  text-edge: cap;
  font-family: "Gmarket Sans TTF";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 89px; /* 342.308% */
`;

export const Icons = styled.div`
  display: flex;
  position: absolute;
  gap: 20px;
  align-items: center;
  left: 10px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 70px;
`;

export const Component = styled.div`
  display: flex;
  width: 283px;
  padding: 35px 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 5.039px 30.233px 50.388px 0 rgba(90, 117, 167, 0.04);
`;

export const C_title = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  #sub {
    color: #8696bb;
    font-family: "Gmarket Sans TTF";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const C_btn = styled.div`
  display: flex;
  width: 283px;
  height: 64px;
  padding: 15px 74px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: rgba(99, 180, 255, 0.1);

  color: #4894fe;
  font-family: "Gmarket Sans TTF";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 24.2px */
`;

export const Info_wrapper = styled.div``;

export const Info = styled.div`
  color: #000;
  font-family: "Gmarket Sans TTF";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #f5f5f5;
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
