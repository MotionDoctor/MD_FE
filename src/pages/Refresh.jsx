import axios from "axios";

export const refreshAccessToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");

  if (!refresh_token) {
    console.warn("리프레시 토큰이 없습니다.");
    return null;
  }

  try {
    const response = await axios.post(
      "http://133.186.132.40:8000/v1/auth/token/refresh",
      {
        refresh_token,
      }
    );

    const {
      access_token,
      refresh_token: new_refresh_token,
      token_type,
    } = response.data;

    // 새 토큰들 저장
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", new_refresh_token);
    localStorage.setItem("token_type", token_type);

    console.log("토큰 갱신 성공");
    return access_token; // 필요 시 반환
  } catch (error) {
    console.error("토큰 갱신 실패:", error);
    // 예: 로그아웃 처리
    localStorage.clear();
    return null;
  }
};
