export type LiteralUnion<T extends U, U = string> = T | (Record<never, never> & U);
