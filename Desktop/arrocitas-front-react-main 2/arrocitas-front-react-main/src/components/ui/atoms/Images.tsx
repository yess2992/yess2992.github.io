interface Props {
  styles: string;
  route: string;
  alt: string;
}

function Images({ styles, route, alt }: Readonly<Props>) {
  return <img className={styles} src={route} alt={alt} />;
}

export default Images;
