import Link from "next/link";

interface Props {
  content: string;
  link: string;
  type: "primary" | "secondary";
}

const Button = ({ content, link, type }: Props) => {
  return (
    <Link href={link}>
      <button className={type + "-button"}>{content}</button>
    </Link>
  );
};

export default Button;
