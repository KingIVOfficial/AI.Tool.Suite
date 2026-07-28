export const validatePayload = (
  schema: Record<string, string>,
  payload: Record<string, any>
): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  for (const key in schema) {
    if (!(key in payload)) {
      errors.push(`Missing required field: ${key}`);
      continue;
    }

    const expectedType = schema[key];
    const actualType = typeof payload[key];

    if (actualType !== expectedType) {
      errors.push(
        `Invalid type for ${key}: expected ${expectedType}, got ${actualType}`
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};
