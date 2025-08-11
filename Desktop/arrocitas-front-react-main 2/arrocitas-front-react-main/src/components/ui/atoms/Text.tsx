import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  styles: string;
}

function Text({ children, styles }: Readonly<Props>) {
  return <p className={styles}>{children}</p>;
}

export default Text;
