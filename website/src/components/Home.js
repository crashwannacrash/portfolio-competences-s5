import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-screen w-full pt-24">
      <main className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-96 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold text-center 2xl:text-5xl 2xl:mb-8">PORTFOLIO DE COMPÉTENCES</h1>

        <Article
          title="La formation : BUT M.M.I"
          content="La spécialité Développement de ce cursus m'a permis d'acquérir des compétences cruciales en programmation, développement web, bases de données, et bien plus encore. La SAE501 a été une pierre angulaire de ce semestre, nous guidant à travers des apprentissages critiques avec des ressources précieuses."
          imageSrc="https://res.cloudinary.com/leetchi/image/upload/c_fill,f_auto,q_auto:good,w_1080/v1553695096/ed14bc2f-62a6-4f0a-83ad-9d96fefa2075.jpg"
        />

        <Article
          title="Expérience en Développement"
          content="Au cours de mon parcours, j'ai pu travailler sur divers projets de développement, mettant en pratique mes connaissances acquises en programmation et en conception web. Ces expériences ont renforcé ma compréhension des principes clés du développement logiciel."
          imageSrc="https://www.mandyben-formation.com/wp-content/uploads/2021/10/formation-java-jee.jpg"
        />
      </main>
    </div>
  );
};

const Article = ({ title, content, imageSrc }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-4">
      <div className="flex flex-col items-start justify-start gap-2">
        <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
        <p className="text-sm md:text-base">{content}</p>
      </div>
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="absolute w-full h-full object-cover"
          style={{ top: 0, left: 0 }}
        />
      </div>
    </section>
  );
};

export default Home;
