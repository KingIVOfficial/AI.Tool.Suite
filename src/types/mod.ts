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
