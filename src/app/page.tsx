import { cookies, headers } from "next/headers";
import Link from "next/link";
import server from "./service/server";

async function getData() {
  const response = await server(
    `/ru/elan?category=cars&page=1&per_page=4&vip=1&sort=random`
  );
  return {
    info: await response.json(),
    status: response.status,
  };
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Link href="/test">Test</Link>
      <br />
      <br />
      <br />
      <br />
      {JSON.stringify(data.info)}
    </main>
  );
}
