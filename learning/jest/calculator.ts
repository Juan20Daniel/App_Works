export const generateOrderNumber = (): string => {
  const timestamp = Date.now();

  return `ORDER-${timestamp}`;
};