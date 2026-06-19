import { auth } from "~/server/auth";

export default async function TestTenantPage() {
  const session = await auth();

  if (!session?.user) {
    return <div>Not signed in</div>;
  }

  const tenantId = session.user.id;

  console.log("Tenant:", tenantId);

  return (
    <div>
      <h1>Tenant Test</h1>
      <p>{tenantId}</p>
    </div>
  );
}