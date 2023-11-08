import * as dotenv from "dotenv";

dotenv.config();

export const config = {
    PORT : process.env.apiURLPort,
    frontendPort : process.env.frontendPort
}