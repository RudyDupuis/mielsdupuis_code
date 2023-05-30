import { ReactNode } from "react";

interface Props {
  title?: string;
  content: ReactNode;
  anchor?: string;
  classN?: string;
}

const Section = ({ title, content, anchor, classN }: Props) => {
  return (
    <section className={"section " + classN} id={anchor ? anchor : ""}>
      {title && <h2>{title}</h2>}
      {content}
    </section>
  );
};

export default Section;
