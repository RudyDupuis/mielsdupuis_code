import axios from "axios";

const LesAvis = () => {
  // async function fetchReviews() {
  //   const apiKey = "AIzaSyBktV__HA1TNb_ZbDeUmqzX68uLFLaSTko";
  //   const placeId = "ChIJtXa3JQ9-2kQR9ptvyzU1M2A";

  //   try {
  //     const response = await axios.get(
  //       `https://mybusiness.googleapis.com/v4/accounts/681243965627/locations/ChIJtXa3JQ9-2kQR9ptvyzU1M2A/reviews`
  //     );

  //     console.log(response);
  //   } catch (error) {}
  // }
  // fetchReviews();

  return (
    <div className="les-avis">
      <div>
        <svg
          width="16"
          height="26"
          viewBox="0 0 20 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.29661 14.3566L14.3174 1.65619C15.3814 0.5954 17.6493 0.5954 18.702 1.65619C19.766 2.71699 19.766 4.43231 18.702 5.48182L7.79002 16.3606L18.702 27.2394C19.766 28.3002 19.766 30.0155 18.702 31.065C17.6379 32.1258 15.3701 32.1258 14.3174 31.065L1.30793 18.1935C0.232584 17.1327 0.232582 15.4174 1.29661 14.3566Z"
            fill="#FAC100"
          />
        </svg>

        <h3>Mathilde Etien</h3>

        <svg
          width="16"
          height="26"
          viewBox="0 0 20 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.7034 18.3646L5.68262 31.065C4.61859 32.1258 2.35075 32.1258 1.29804 31.065C0.234009 30.0042 0.233993 28.2889 1.29802 27.2394L12.21 16.3606L1.29802 5.48182C0.233993 4.42102 0.233993 2.7057 1.29802 1.65619C2.36205 0.595397 4.62991 0.595397 5.68262 1.65619L18.6921 14.5277C19.7674 15.5885 19.7674 17.3038 18.7034 18.3646Z"
            fill="#FAC100"
          />
        </svg>
      </div>

      <p>
        Miel de qualité, producteur jeune et pleins d&apos;idées. N&apos;hésitez
        pas et laissez vous tenter 🤗 moi qui n&apos;aime habituellement pas le
        miel j&apos;ai été conquis par les siens
      </p>
    </div>
  );
};

export default LesAvis;
