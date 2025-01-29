export {};

declare global {
  interface CustomJwtSessionClaims {
    userid?: {
      userId?: string;
    };
  }
}
