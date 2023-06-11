import Meta from "../../../utils/meta/Meta";
import Heading from "../../ui/heading/Heading";

import styles from "./Collections.module.scss";
import Description from "../../ui/heading/Description";
import CollectionItem from "./CollectionItem";

const title = "Жанрлар";
const description =
   "Бұл бөлімде сіз біздің сайттағы барлық жанрларды таба аласыз";

const Collections = ({ collections }) => {
   return (
      <Meta title={title} description={description}>
         <Heading title={title} className={styles.heading} />
         <Description text={description} className={styles.description} />

         <section className={styles.collections}>
            {collections.map((c) => (
               <CollectionItem key={c._id} collection={c} />
            ))}
         </section>
      </Meta>
   );
};

export default Collections;
