import dotenv from "dotenv";
dotenv.config();

export const {
  BOT_TOKEN,
  FIREBASE_KEY,
  HTTP_CLIENT,
  WSS_ENDPOINT,
  BOT_USERNAME,
  TONCLIENT_ENDPOINT,
  EXPLORER_URL,
  DEX_URL,
  TONCLIENT_API_KEY,
  GECKO_API,
  TRENDING_TOKENS_API,
  TRENDING_MSG,
  TRENDING_AUTH_KEY,
  TRENDING_BOT_USERNAME,
  TRENDING_CHANNEL_ID,
  TON_API_KEY,
  PORT,
  COINGECKO_API_KEY,
  MAIN_ADDRESS,
  TRENDING_PRICES,
  AD_PRICES,
  TOKEN_DATA_URL,
  ENCRYPTION_KEY,
  CHANNEL_ID,
  RPC_ENDPOINT,
  HELIS_API_KEY,
  WEBHOOK_URL,
  TRENDING_MSG,
} = process.env;

export const TRENDING_BOT_TOKENS: string[] = JSON.parse(
  process.env.TRENDING_BOT_TOKENS || "[]"
);
