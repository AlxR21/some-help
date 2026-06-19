import { auth } from "~/server/auth";

export default async function TestPage() {
  const session = await auth();

  console.log("SESSION:", session);

  return (
    <pre>
      {JSON.stringify(session, null, 2)}
    </pre>
  );
}