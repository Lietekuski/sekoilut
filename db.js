import { Client } from "https://deno.land/x/postgres/mod.ts";

// Set up PostgreSQL client connection
const client = new Client({
    user: "admin",
    database: "booking_system",
    hostname: "localhost",
    password: "admin",
    port: 5432,
});

await client.connect();

export default client;
