import { auth } from "~/server/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    return <div>Not authenticated</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{session.user.email}</p>
      <p>{session.user.id}</p>
    </div>
  );
}