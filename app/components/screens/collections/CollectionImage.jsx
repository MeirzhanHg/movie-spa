import Image from "next/image";

const CollectionImage = ({ collection: { image, title } }) => {
   return <Image alt={title} src={image} fill={true} draggable={false} />;
};

export default CollectionImage;
