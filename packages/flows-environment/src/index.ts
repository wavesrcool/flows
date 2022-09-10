import { writeFileSync } from "fs";

const data = `FLOWS_LOCAL_PORT=
FLOWS_LOCAL_CORS_ORIGIN=
FLOWS_LOCAL_ROUTES_UNSECURED=
FLOWS_GLOBAL_SECRET_ENCRYPTION=
FLOWS_GLOBAL_SECRET_HASH=
FLOWS_GLOBAL_SECRET_JWT=
FLOWS_GLOBAL_POSTGRES_URL=
FLOWS_GLOBAL_X_FLOWS_CREDENTIAL=
FLOWS_GLOBAL_MAILGUN_KEY=
FLOWS_LOCAL_MAIL_DOMAIN=
FLOWS_LOCAL_INSTANCE_JURISDICTION=`;

const main = () => {
  console.log(`[flows-environment]: Writing environment configuration.`);
  writeFileSync(".env.example", data);
  console.log(`[flows-environment]: Complete.`);
};

export default main;
