import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Nav = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="le logo de MielsDupuis"
          width={81}
          height={32}
        />
      </Link>
      <ul>
        <li
          className={router.pathname === "/ou-acheter-mon-miel" ? "active" : ""}
        >
          <Link href="/ou-acheter-mon-miel">
            {isMobile ? "Acheter" : "Acheter mon miel"}
          </Link>
        </li>
        <li
          className={
            router.pathname === "/mes-miels-du-poitou-charentes" ? "active" : ""
          }
        >
          <Link href="/mes-miels-du-poitou-charentes">
            {isMobile ? "Miels" : "Découvrir mes miels"}
          </Link>
        </li>
        <li className={router.pathname === "/me-contacter" ? "active" : ""}>
          <Link href="/me-contacter">
            {isMobile ? "Contacter" : "Me contacter"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
