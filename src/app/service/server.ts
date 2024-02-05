import { cookies, headers } from "next/headers";

const server = async (url: string, options?: any) => {
  let token = cookies()?.get("token");
  let defaultOptions: RequestInit = {
    cache: "reload",
  };

  if (options) defaultOptions = { ...options };
  const cookieTrick = headers().get("set-cookie");
  const tokenRegex = /token=([^;,]+)/;
  const match = cookieTrick?.match(tokenRegex);
  if (match && match[1] && !token) {
    const tokenValue = match[1];
    token = {
      name: "token",
      value: tokenValue,
    };
  }

  if (token && token.value)
    defaultOptions = {
      ...defaultOptions,
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    };

  const response = await fetch(
    `https://api.bakoo.az/v2${url}&time=${Date.now()}`,
    defaultOptions
  );

  return response;
};

export default server;
