import { useState } from "react";
import { reviewsData } from "../../../data/reviewsData";
import Link from "next/link";

const IlsOntDonneLeursAvis = () => {
  const [currentReviews, setCurrentReviews] = useState(0);

  const add = () => {
    if (currentReviews === 2) {
      return setCurrentReviews(0);
    }
    setCurrentReviews(currentReviews + 1);
  };
  const remove = () => {
    if (currentReviews === 0) {
      return setCurrentReviews(2);
    }
    setCurrentReviews(currentReviews - 1);
  };

  return (
    <div className="ils-ont-donne-leurs-avis">
      <div className="ils-ont-donne-leurs-avis__reviews">
        <span onClick={remove}>‹</span>

        <div>
          <h3>{reviewsData[currentReviews].autor}</h3>
          <p>{reviewsData[currentReviews].message}</p>
        </div>

        <span onClick={add}>›</span>
      </div>

      <Link
        href="https://www.google.com/search?q=mielsdupuis&rlz=1C1ONGR_frFR1041FR1041&oq=mielsdupuis+&aqs=chrome.0.69i59j0i13i30j69i60j69i65j69i60l3.3487j0j7&sourceid=chrome&ie=UTF-8#lrd=0x44da7e0f25b776b5:0x60333535cb6f9bf6,1,,,,"
        target="_blanck"
      >
        Voir les autres avis ?{" "}
        <span>N&apos;hésitez pas à laisser le votre !</span>
      </Link>
    </div>
  );
};

export default IlsOntDonneLeursAvis;
