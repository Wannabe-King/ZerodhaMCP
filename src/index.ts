import { KiteConnect } from "kiteconnect";

const apiKey = "u3xtejmnm2t3zap4";
// const apiSecret = "50a8o1t3z9qhnoxkfq7lm4gksaqiqcvp";
// const requestToken = "1q3T7shYCmripFSX2WiHRkZAB8wXlCPa";

let accessToken = "Jn2j0WJJwA29jInRom5PphHMVvdArh3y";

const kc = new KiteConnect({ api_key: apiKey });

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
