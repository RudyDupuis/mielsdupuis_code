import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useScreenSizeDetect } from "@/helpers/useScreenSizeDetect";

const Nav = () => {
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  useScreenSizeDetect(setIsSmallScreen, 600);

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
            {isSmallScreen ? "Acheter" : "Acheter mon miel"}
          </Link>
        </li>
        <li
          className={
            router.pathname === "/mes-miels-du-poitou-charentes" ? "active" : ""
          }
        >
          <Link href="/mes-miels-du-poitou-charentes">
            {isSmallScreen ? "Miels" : "Découvrir mes miels"}
          </Link>
        </li>
        <li className={router.pathname === "/me-contacter" ? "active" : ""}>
          <Link href="/me-contacter">
            {isSmallScreen ? "Contacter" : "Me contacter"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
