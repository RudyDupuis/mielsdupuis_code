import Image from "next/image";

const LesBienfaitsDuMiel = () => {
  return (
    <div className="picture-and-text">
      <Image
        src="/Index/sunflower-draw.svg"
        alt="Un dessin d'un tournesol"
        width={175}
        height={180}
      />

      <p>
        Le miel est un <strong>aliment sain et naturel</strong>, riche en
        nutriments et en antioxydants.
        <br />
        <br />
        Il est reconnu pour ses propriétés antibactériennes et antioxydantes,
        ainsi que pour ses bienfaits sur la digestion et la santé
        cardiovasculaire.
        <br />
        <br />
        De plus, le miel est une{" "}
        <strong>
          alternative naturelle et saine au sucre raffiné et aux édulcorants
          artificiels
        </strong>
        , souvent associés à des problèmes de santé tels que l&apos;obésité, le
        diabète et les maladies cardiaques.
      </p>
    </div>
  );
};

export default LesBienfaitsDuMiel;
