import { cookies, headers } from "next/headers";
import Link from "next/link";

async function getData() {
  const cookiesConcent = cookies();
  const headersContent = headers();
  const response = await fetch(
    `https://api.bakoo.az/v2/ru/az/folders?brand=bmw&model=x5&page=1&per_page=20&time=${Date.now()}`
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
