import { stripeWebhookHandler } from "./routes/stripeWebhook.ts";

export type ToolDefinition = {
  id: string;
  name: string;
  description: string;
  category: string;
  inputs: Record<string, any>;
  outputs: Record<string, any>;
};

export type ToolExecutionRequest = {
  toolId: string;
  payload: Record<string, any>;
};

export type ToolExecutionResponse = {
  success: boolean;
  result?: any;
  error?: string;
};

// --- SERVER SETUP ---
import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req: Request) => {
  const url = new URL(req.url);

  // --- STRIPE WEBHOOK ROUTE ---
  if (req.method === "POST" && url.pathname === "/api/webhooks/stripe") {
    return stripeWebhookHandler(req);
  }

  // --- DEFAULT RESPONSE (placeholder) ---
  return new Response(
    JSON.stringify({ message: "AI Tool Suite backend is running." }),
    { headers: { "Content-Type": "application/json" } }
  );
});
