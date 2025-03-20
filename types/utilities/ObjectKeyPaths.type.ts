type GenNode<K extends number | string, IsRoot extends boolean> = IsRoot extends true
  ? `${K}`
  : `.${K}` | (K extends number ? `.[${K}]` | `[${K}]` : never);

export type ObjectKeyPaths<
  T extends object,
  IsRoot extends boolean = true,
  K extends keyof T = keyof T
> = K extends number | string
  ?
      | GenNode<K, IsRoot>
      | (T[K] extends object ? `${GenNode<K, IsRoot>}${ObjectKeyPaths<T[K], false>}` : never)
  : never;
