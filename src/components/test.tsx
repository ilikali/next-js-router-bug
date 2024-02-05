"use client";

import { useRouter } from "next/navigation";

const Test = () => {
  const router = useRouter();
  return (
    <>
      <main>
        <button
          onClick={() => {
            router.push("/test");
          }}
        >
          Go to test
        </button>
      </main>
    </>
  );
};

export default Test;
