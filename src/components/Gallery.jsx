import "../styles/Gallery.css"

function Gallery(){
    return(
        <section className="gallery">
            <h2>Gallery</h2>
            <ul>
                <li><img width={200} src="../src/assets/laptopdesktop2.png" alt="laptop desktop" /></li>
                <li><img width={200} src="../src/assets/laptopdesktop2.png" alt="laptop desktop" /></li>
                <li><img width={200} src="../src/assets/laptopdesktop2.png" alt="laptop desktop" /></li>
            </ul>
        </section>
    )
}

export default Gallery