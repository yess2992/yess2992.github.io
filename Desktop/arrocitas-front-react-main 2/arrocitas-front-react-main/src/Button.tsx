import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  callback: () => unknown;
}

export function Button({ children, callback }: Readonly<Props>) {
  return <button onClick={() => callback()}>{children}</button>;
}
