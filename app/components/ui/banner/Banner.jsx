import styles from "./Banner.module.scss";
import Image from "next/image";

const Banner = ({ image, Detail }) => {
   return (
      <div className={styles.banner}>
         <Image
            src={image}
            draggable={false}
            fill
            className="image-like-bg object-top"
            unoptimized
            priority
            alt=""
         />
         {Detail && <Detail />}
      </div>
   );
};

export default Banner;
