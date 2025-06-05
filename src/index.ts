import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { placeOrder, getProfile, getPortfolio } from "./trade";

// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

server.tool(
  "buy-stock",
  "Buys stock on zerodha exchange",
  {
    symbol: z.string(),
    quantity: z.number(),
  },
  async ({ symbol, quantity }) => {
    placeOrder(symbol, quantity, "BUY");
    return {
      content: [{ type: "text", text: "Stock has been bought" }],
    };
  }
);

server.tool(
  "sell-stock",
  "Sells stock on zerodha exchange",
  {
    symbol: z.string(),
    quantity: z.number(),
  },
  async ({ symbol, quantity }) => {
    placeOrder(symbol, quantity, "SELL");
    return {
      content: [{ type: "text", text: "Stock has been sold" }],
    };
  }
);

server.tool("see-portfolio", "See all the holding", {}, async () => {
  const portfolio = await getPortfolio();
  return {
    content: [{ type: "text", text: portfolio }],
  };
});

const transport = new StdioServerTransport();
server.connect(transport);
