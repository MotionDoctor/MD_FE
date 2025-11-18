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
