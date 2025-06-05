import { KiteConnect } from "kiteconnect";
import dotenv from "dotenv";

dotenv.config();

let api_key = process.env.apiKey ?? "";
let accessToken = process.env.accessToken ?? "";

const kc = new KiteConnect({ api_key: api_key });

console.log(kc.getLoginURL());
kc.setAccessToken(accessToken);

export async function placeOrder(
  tradingsymbol: string,
  quantity: number,
  type: "BUY" | "SELL"
) {
  try {
    const profile = await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol,
      transaction_type: type,
      quantity,
      product: "CNC",
      order_type: "MARKET",
    });
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}

export async function getProfile() {
  try {
    const profile = await kc.getProfile();
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}

export async function getPortfolio() {
  const holdings = await kc.getPositions();
  let allHoldings = "";
  holdings.net.map((holding) => {
    allHoldings += `stock: ${holding.tradingsymbol} qty: ${holding.quantity} current-price: ${holding.last_price}`;
  });
  return allHoldings;
}
