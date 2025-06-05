import { KiteConnect } from "kiteconnect";
import dotenv from "dotenv";

dotenv.config();

let api_key = process.env.apiKey ?? "";
let accessToken = process.env.accessToken ?? "";

const kc = new KiteConnect({ api_key: api_key });

console.log(kc.getLoginURL());

async function init() {
  try {
    await generateSession();
    await getProfile();
  } catch (err) {
    console.error(err);
  }
}

async function generateSession() {
  try {
    // const response = await kc.generateSession(requestToken, apiSecret);
    // console.log(response.access_token);
    kc.setAccessToken(accessToken);
    // console.log("Session generated:", response);
  } catch (err) {
    console.error("Error generating session:", err);
  }
}

async function getProfile() {
  try {
    const profile = await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol: "HDFCBANK",
      transaction_type: "BUY",
      quantity: 1,
      product: "CNC",
      order_type: "MARKET",
    });
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
// Initialize the API calls
init();
