async function getData() {
  const response = await fetch(
    `https://api.bakoo.az/v2/ru/filter?time=${Date.now()}`
  );
  return {
    info: await response.json(),
    status: response.status,
  };
}

export default async function Home() {
  const data = await getData();

  return <main>{JSON.stringify(data.info)}</main>;
}
