import React from 'react';
import s from "./Gallery.module.css"
const Gallery = () => {
    return (
        
            <div className={s.gallery}>
                <div className={s.gallery_item}>
  <div className={s.gallery_item_one}>
    <img src="./dysonfen.svg" alt="Image 1" />
  </div>
  <div className={s.gallery_item_two}>  
    <img src="./fortin.svg" alt="Image 3" />
</div>
  </div>
  <div className={s.gallery_description}>
  <div className={s.gallery_item_thre}>  
    <img src="./phone.svg" alt="Image 2" />

  </div>
  </div>
</div>


        
    );
};

export default Gallery;