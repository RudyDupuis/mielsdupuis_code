import Image from "next/image";

const Mentions = () => {
  return (
    <div className="mentions">
      <Image
        src="/MentionsLegales/smoker-draw.svg"
        alt="Un dessin d'un enfumoir"
        width={156}
        height={161}
      />
      <table>
        <tbody>
          <tr>
            <td className="mentions__wording">Siret:</td>
            <td>849 488 622 000 10</td>
          </tr>
          <tr>
            <td className="mentions__wording">Tva:</td>
            <td>FR 10849488622</td>
          </tr>
          <tr>
            <td className="mentions__wording">Raison Social:</td>
            <td>Dupuis Rudy</td>
          </tr>
          <tr>
            <td className="mentions__wording">Siège Social:</td>
            <td>15 rue de la bruyère, les chauleries, 86420 Guesnes</td>
          </tr>
          <tr>
            <td className="mentions__wording">Téléphone:</td>
            <td>0787644349</td>
          </tr>
          <tr>
            <td className="mentions__wording">Mail:</td>
            <td>dupuisrudyapi@gmail.com</td>
          </tr>
          <tr>
            <td className="mentions__wording">IDU:</td>
            <td>adhérent à l&apos;UNAF : FR209603_01TPJL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mentions;
