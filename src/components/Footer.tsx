import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <Link href="/mentions-legales" className="mentions-legales">
          Mentions légales
        </Link>{" "}
        <div className="links__social-networks">
          <Link href="https://www.facebook.com/MielsDupuis" target="_blank">
            <svg
              width="32"
              height="32"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.6429 0.465332H4.35714C3.33416 0.465332 2.35309 0.871709 1.62973 1.59506C0.906376 2.31842 0.5 3.2995 0.5 4.32247L0.5 32.6082C0.5 33.6312 0.906376 34.6122 1.62973 35.3356C2.35309 36.059 3.33416 36.4653 4.35714 36.4653H15.3862V24.2261H10.3237V18.4653H15.3862V14.0746C15.3862 9.08042 18.3594 6.32176 22.9132 6.32176C25.0941 6.32176 27.3746 6.71069 27.3746 6.71069V11.6125H24.8619C22.3861 11.6125 21.6138 13.1489 21.6138 14.7247V18.4653H27.1408L26.2569 24.2261H21.6138V36.4653H32.6429C33.6658 36.4653 34.6469 36.059 35.3703 35.3356C36.0936 34.6122 36.5 33.6312 36.5 32.6082V4.32247C36.5 3.2995 36.0936 2.31842 35.3703 1.59506C34.6469 0.871709 33.6658 0.465332 32.6429 0.465332Z"
                fill="#1A1400"
              />
            </svg>
          </Link>
          <Link href="https://www.instagram.com/mielsdupuis/" target="_blank">
            <svg
              width="32"
              height="32"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.504 9.23539C13.3962 9.23539 9.27613 13.3563 9.27613 18.4653C9.27613 23.5743 13.3962 27.6953 18.504 27.6953C23.6119 27.6953 27.7319 23.5743 27.7319 18.4653C27.7319 13.3563 23.6119 9.23539 18.504 9.23539ZM18.504 24.466C15.2032 24.466 12.5047 21.7749 12.5047 18.4653C12.5047 15.1557 15.1951 12.4647 18.504 12.4647C21.8129 12.4647 24.5033 15.1557 24.5033 18.4653C24.5033 21.7749 21.8049 24.466 18.504 24.466ZM30.2617 8.85783C30.2617 10.0548 29.298 11.0107 28.1094 11.0107C26.9127 11.0107 25.957 10.0467 25.957 8.85783C25.957 7.66895 26.9207 6.70498 28.1094 6.70498C29.298 6.70498 30.2617 7.66895 30.2617 8.85783ZM36.3735 11.0428C36.237 8.15896 35.5784 5.60446 33.4662 3.49981C31.362 1.39515 28.8081 0.736447 25.9249 0.591852C22.9533 0.423159 14.0467 0.423159 11.0751 0.591852C8.19994 0.728414 5.64601 1.38712 3.5338 3.49177C1.42158 5.59643 0.771054 8.15093 0.626492 11.0348C0.457836 14.007 0.457836 22.9156 0.626492 25.8878C0.763023 28.7717 1.42158 31.3262 3.5338 33.4309C5.64601 35.5355 8.19191 36.1942 11.0751 36.3388C14.0467 36.5075 22.9533 36.5075 25.9249 36.3388C28.8081 36.2022 31.362 35.5435 33.4662 33.4309C35.5704 31.3262 36.2289 28.7717 36.3735 25.8878C36.5422 22.9156 36.5422 14.015 36.3735 11.0428ZM32.5346 29.077C31.9081 30.6514 30.6954 31.8644 29.1133 32.499C26.7441 33.4389 21.1222 33.222 18.504 33.222C15.8858 33.222 10.2559 33.4309 7.89476 32.499C6.32064 31.8724 5.10792 30.6595 4.47345 29.077C3.5338 26.7072 3.75064 21.0841 3.75064 18.4653C3.75064 15.8466 3.54183 10.2154 4.47345 7.85371C5.09989 6.27923 6.3126 5.06625 7.89476 4.43164C10.264 3.49177 15.8858 3.70867 18.504 3.70867C21.1222 3.70867 26.7521 3.49981 29.1133 4.43164C30.6874 5.05821 31.9001 6.2712 32.5346 7.85371C33.4742 10.2234 33.2574 15.8466 33.2574 18.4653C33.2574 21.0841 33.4742 26.7152 32.5346 29.077Z"
                fill="#1A1400"
              />
            </svg>
          </Link>
        </div>
      </div>
      <p>Copyright © {new Date().getFullYear()} Rudy Dupuis</p>
    </footer>
  );
};

export default Footer;
