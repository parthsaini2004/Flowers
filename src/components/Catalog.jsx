
import Catalog_item from './Catalog_item';

function Catalog() {
  return (
    <div className='cat-back'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L60,165.3C120,139,240,85,360,58.7C480,32,600,32,720,80C840,128,960,224,1080,240C1200,256,1320,192,1380,160L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

      <p className='cat-title'>Our Catalog</p>
      <div className='container'>
        <Catalog_item name="Starry Night" price="30$" img_src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg" />

        <Catalog_item name="Sun Lover" price="35$" img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfyp9e07JHBoA-EcwEbZGiURgrqE_agN30kSy3UUKS-JCUMWLHh_SPKX9TYo0LkZLYMM&usqp=CAU" />

        <Catalog_item name="Spring dream" price="30$" img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLh_3gbyUbdUCEzmP369nLa8Rr_hb3n9K5D2efY2LIwKHmQnTexTg5cMsScNWFTuMaWc&usqp=CAU" />

        <Catalog_item name="Ardent Lover" price="40$" img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdW2XiHvn7gFtKbgUWzrrRGFBRh7ss4ElUszQ3p0LpYTiynYKzUG15NLKFC_XX_utIzQ&usqp=CAU" />

        <Catalog_item name="Playful tenderness" price="45$" img_src="https://st4.depositphotos.com/16122460/26848/i/450/depositphotos_268484380-stock-photo-bouquet-of-beautiful-bright-gerbera.jpg" />

        <Catalog_item name="Pink Sunset-1" price="45$" img_src="https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
      </div>
      <p style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontFamily: "'Noto Sans JP', sans-serif" }}>Read more <i class="fa-solid fa-arrow-right"></i></p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(246, 239, 231)" fill-opacity="1" d="M0,192L60,165.3C120,139,240,85,360,58.7C480,32,600,32,720,80C840,128,960,224,1080,240C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  );
}

export default Catalog;
