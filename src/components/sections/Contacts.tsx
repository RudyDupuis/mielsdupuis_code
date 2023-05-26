import Image from "next/image";

const Contacts = () => {
  return (
    <div className="contacts">
      <Image
        src="/MeContacter/beekeper-draw.svg"
        alt="Un dessin d'un apiculteur"
        width={143}
        height={171}
      />
      <section>
        <div>
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.51757 1.79545C9.0965 0.741985 7.98639 0.181267 6.9255 0.481449L2.11321 1.84076C1.16169 2.11263 0.5 3.00751 0.5 4.027C0.5 18.0393 11.4698 29.4009 24.9989 29.4009C25.9833 29.4009 26.8473 28.7156 27.1098 27.7301L28.4222 22.7459C28.712 21.6471 28.1707 20.4974 27.1535 20.0613L21.9037 17.7957C21.0124 17.4106 19.9788 17.6768 19.3718 18.4527L17.1625 21.245C13.3127 19.3589 10.1957 16.1306 8.37465 12.1432L11.0706 9.86072C11.8198 9.22638 12.0768 8.16158 11.705 7.23838L9.51757 1.80112V1.79545Z"
              fill="#1A1400"
            />
          </svg>{" "}
          <p>07 87 64 43 49</p>
        </div>
        <div>
          <svg
            width="31"
            height="24"
            viewBox="0 0 31 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.3125 0.400879C1.75977 0.400879 0.5 1.67449 0.5 3.24429C0.5 4.13877 0.916016 4.97995 1.625 5.51901L14.375 15.1866C15.043 15.6901 15.957 15.6901 16.625 15.1866L29.375 5.51901C30.084 4.97995 30.5 4.13877 30.5 3.24429C30.5 1.67449 29.2402 0.400879 27.6875 0.400879H3.3125ZM0.5 7.03549V19.3569C0.5 21.448 2.18164 23.1481 4.25 23.1481H26.75C28.8184 23.1481 30.5 21.448 30.5 19.3569V7.03549L17.75 16.7031C16.4141 17.716 14.5859 17.716 13.25 16.7031L0.5 7.03549Z"
              fill="#1A1400"
            />
          </svg>
          <p>dupuisrudyapi@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
