import Image from "next/image";
import { pointsOfSaleData } from "../../../data/pointsOfSaleData";
import Link from "next/link";

const PointsDeVente = () => {
  const createPoints = (pointId: string) => {
    const point = pointsOfSaleData.find((point) => point.id === pointId);
    if (point) {
      const element = document.getElementById(pointId);
      if (element) {
        element.style.top = `${point.top}px`;
        element.style.left = `${point.left}px`;
        element.style.position = "absolute";
      }
    }
  };

  const handleMouseEnter = (id: string) => {
    pointsOfSaleData.forEach((point) => {
      const element = document.getElementById(point.id);
      if (element) {
        element.classList.remove("points-de-vente__point-active");
      }
    });

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.classList.add("points-de-vente__point-active");
    }
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

        {pointsOfSaleData.map((point) => (
          <Image
            key={point.id}
            src="/OuAcheterMonMiel/point.svg"
            alt={"Une point montrant " + point.name}
            width={9}
            height={13}
            id={point.id}
            onLoad={() => createPoints(point.id)}
          />
        ))}
      </div>

      <ul>
        {pointsOfSaleData.map((point) => (
          <li key={point.id} onMouseEnter={() => handleMouseEnter(point.id)}>
            <Link href={point.link} target="_blank">
              {point.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PointsDeVente;
