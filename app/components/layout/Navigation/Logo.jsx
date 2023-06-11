import Image from "next/image";
import Link from "next/link";

import logoImage from "../../../assets/images/movie.svg";

const Logo = () => {
   return (
      <Link href="/" className="px-layout mb-10 block">
         <Image
            src={logoImage}
            width={247}
            height={34}
            alt="online cinema"
            priority
            draggable={false}
         />
      </Link>
   );
};

export default Logo;
