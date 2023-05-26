import Image from "next/image";

const PointsDeVente = () => {
  const pointsOfSale = [
    "Super U - Vouillé",
    "Super U - Neuville",
    "Super U - Loudun",
    "Utile - Loudun",
    "U Express - Mermoz, Poitiers",
    "Carrefour Express - Pont neuf, Poitiers",
    "Carrefour Express - Cordeliers, Poitiers",
    "Maison Merling - Poitiers",
    "La Scévoline - Monts sur Guesnes",
  ];

  const handleMouseEnter = (id: string) => {
    pointsOfSale.forEach((point) => {
      document
        .getElementById(point.replace(/\s/g, "").replace(/,/g, "-"))
        ?.classList.remove("points-de-vente__point-active");
    });

    document.getElementById(id)?.classList.add("points-de-vente__point-active");
  };

  return (
    <div className="points-de-vente">
      <div>
        <Image
          src="/OuAcheterMonMiel/map.svg"
          alt="Une carte entre Poitiers et Loudun"
          width={206}
          height={330}
        />

        {pointsOfSale.map((point) => (
          <Image
            key={point}
            src="/OuAcheterMonMiel/point.svg"
            alt={"Une point montrant " + point}
            width={9}
            height={13}
            id={point.replace(/\s/g, "").replace(/,/g, "-")}
          />
        ))}
      </div>

      <ul>
        {pointsOfSale.map((point) => (
          <li
            key={point}
            onMouseEnter={() =>
              handleMouseEnter(point.replace(/\s/g, "").replace(/,/g, "-"))
            }
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PointsDeVente;
