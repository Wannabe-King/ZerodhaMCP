# This is a basic MCP server that help execute market orders on the zerodha platform using zerodha kite connect

I made this TypeScript-based server that integrates Zerodha's Kite Connect API with the Model Context Protocol (MCP). I have made it to explore the functionality of MCP servers.It enables AI agents to perform trading operations such as buying and selling stocks, as well as viewing the user's portfolio, through standardized tools exposed via MCP.

### Project Structure

```
├── index.ts          # Initializes the MCP server and defines tools
├── trade.ts          # Contains functions to interact with Zerodha's API
├── .env              # Environment variables for API credentials
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation

```

### What can this MCP server do

- Buy Stocks: Place buy orders on the NSE using Zerodha's Kite Connect API.

- Sell Stocks: Place sell orders on the NSE.

- View Portfolio: Retrieve and display current holdings.


### Steps for setup

1. Clone the repository

```
git clone https://github.com/yourusername/zerodha-mcp-trading-agent.git
cd zerodha-mcp-trading-agent
```

2. Install dependencies
```
npm install
```
3. Create a .env file and set secrets
```
apiKey=your_zerodha_api_key
accessToken=your_zerodha_access_token
```
4. Start server
```
npm run start
```

### License
This project is licensed under the MIT License.