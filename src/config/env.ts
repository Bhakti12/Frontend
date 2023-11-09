import * as dotenv from "dotenv";

dotenv.config();

export const config = {
    PORT : "http://localhost:3000",
    frontendPort : "http://localhost:4200",
    Database : "mongodb://0.0.0.0:27017/Ticket-Reservation",
    ACCESS_TOKEN_KEY : "wK0zTOsxIZ2is6AmjKGoy0k05wRFqg34fomHL0pBIoF90OhWSyJeYue0UXiKdrabp9eZI1lQWL3FbWPa8S26FVuAWOEzeJMCOXN6",
    REFRESH_TOKEN_KEY : "Gwj8a1YiKRYSzNSgGtlmP8JLxfj7ajf1rbb9eUd4bIQsBF7817qQYluRrck0yWSurfAVFMYjvMeNvGOMedm74iPPvY6JCjymenKd",
    ACCESS_TOKEN_EXPIRES_IN : "1800s",
    REFRESH_TOKEN_EXPIRES_IN : "365d",
    KEY : "6f57895a29c16698e8a64203c00f16fc",
    IV : "354cf22af484919f"
}