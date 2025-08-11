import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  link: string;
  styles: string;
}

function ExternalLink({ children, link, styles }: Readonly<Props>) {
  return (
    <a className={styles} href={link} target="_blank">
      {children}
    </a>
  );
}

export default ExternalLink;
