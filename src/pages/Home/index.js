import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import categoriasRepository from "../../repositories/categorias";
import PageDefault from "../../components/PageDefault";

function Home() {
  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categories) => {
        setDadosIniciais(categories);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [dadosIniciais, setDadosIniciais] = useState([]);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && <div>Loading...</div>}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={
                  "We were joined by filmmaker Max Wichmann on our 2020 European tour supporting LINDEMANN. This short film will give you a glimpse into what life on the road is really like, and who we are. "
                }
              />

              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
