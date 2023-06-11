import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Slider.module.scss";

const SlideItem = ({ slide, buttonTitle = "Көру" }) => {
   const { push } = useRouter();

   return (
      <div className={styles.slide}>
         {slide.bigPoster && (
            <Image
               fill={true}
               className={styles.image}
               src={slide.bigPoster}
               alt={slide.title}
               draggable={false}
               unoptimized
               priority
            />
         )}
         <div className={styles.content}>
            <div className={styles.heading}>{slide.title}</div>
            <div className={styles.subHeading}>{slide.subTitle}</div>
            <button className={styles.button} onClick={() => push(slide.link)}>
               {buttonTitle}
            </button>
         </div>
      </div>
   );
};

export default SlideItem;
