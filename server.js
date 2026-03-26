import { createServer } from "@modelcontextprotocol/sdk/server";

const server = createServer({
  tools: [
    {
      name: "hello",
      description: "Say hello",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string" }
        },
        required: ["name"]
      },
      execute: async ({ name }) => {
        return `Hello, ${name}!`;
      }
    }
  ]
});

const PORT = process.env.PORT || 3000;

// IMPORTANT for Railway
server.listen(PORT, "0.0.0.0");