import { ReactNode } from "react";

interface Props {
  title: string;
  content: ReactNode;
  anchor?: string;
}

const Section = ({ title, content, anchor }: Props) => {
  return (
    <section className="section" id={anchor ? anchor : ""}>
      <h2>{title}</h2>
      {content}
    </section>
  );
};

export default Section;
