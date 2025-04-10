/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_C3Q9deqXigwL@ep-flat-king-a85xo7ug-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
};
