import { createServer } from "@modelcontextprotocol/sdk";

const server = createServer({
  tools: [
    {
      name: "hello",
      description: "Say hello",
      parameters: {
        type: "object",
        properties: { name: { type: "string" } },
        required: ["name"]
      },
      execute: async ({ name }) => {
        return `Hello, ${name}!`;
      }
    }
  ]
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, "0.0.0.0", () => {
  console.log("MCP server running on port", PORT);
});