import banner from "./banner.png"
import styles from "./paginaInicial.module.scss"

import Cabecalho from "componentes/cabecalho";
import Galeria from "componentes/galeria";
import Menu from "componentes/menu";
import Populares from "componentes/populares";
import Rodape from "componentes/rodape";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}