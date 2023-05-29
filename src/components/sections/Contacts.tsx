import Image from "next/image";

const Contacts = () => {
  return (
    <div className="contacts">
      <Image
        className="contacts__beekeper-draw"
        src="/MeContacter/beekeper-draw.svg"
        alt="Un dessin d'un apiculteur"
        width={143}
        height={171}
      />
      <section>
        <div>
          <Image
            className="contacts__phone-draw"
            src="/MeContacter/phone.svg"
            alt="Un dessin d'un téléphone"
            width={29}
            height={30}
          />
          <a href="tel:0787644349">07 87 64 43 49</a>
        </div>
        <div>
          <Image
            className="contacts__mail-draw"
            src="/MeContacter/mail.svg"
            alt="Un dessin d'une enveloppe"
            width={31}
            height={24}
          />
          <a href="mailto:dupuisrudyapi@gmail.com">dupuisrudyapi@gmail.com</a>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
