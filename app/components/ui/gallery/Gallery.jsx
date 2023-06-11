import styles from "./Gallery.module.scss";
import GalleryItem from "./GalleryItem";

const Gallery = ({ items }) => {
   return (
      <div className={styles.gallery}>
         {items.map((item) => (
            <GalleryItem key={item.link} item={item} variant="vertical" />
         ))}
      </div>
   );
};

export default Gallery;
