import Image from "next/image";

const MesAbeilles = () => {
  return (
    <div className="picture-and-text picture-and-text-reverse picture-and-text-picture">
      <p>
        Mes ruchers sont composés d&apos;une vingtaine de ruches, situés en
        forêt. Cela permet à mes abeilles de butiner une grande variété de
        fleurs sauvages et de produire ainsi un miel aux saveurs riches et
        complexes.
        <br />
        <br />
        Je fais un suivi très régulier de mes ruches, avec une visite
        hebdomadaire en saison pour m&apos;assurer qu&apos;elles sont en bonne
        santé et pour les aider à se développer. Je m&apos;assure que la reine
        pond bien et que les couvains se forment correctement.
        <br />
        <br />
        Mon objectif est de garantir le bien-être de mes abeilles pour
        qu&apos;elles puissent produire un miel de qualité.
      </p>

      <Image
        src="/Index/hive-picture.svg"
        alt="Une photo d'une de mes ruches"
        width={353}
        height={250}
      />
    </div>
  );
};

export default MesAbeilles;