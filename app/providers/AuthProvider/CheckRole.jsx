import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";

const CheckRole = ({ children, Component: { isOnlyAdmin, isOnlyUser } }) => {
   const { user } = useAuth();

   const router = useRouter();

   const Children = () => <>{children}</>;

   // карапайым колданушы
   if (!isOnlyAdmin && !isOnlyUser) return <Children />;

   // админ болып табылатын колданушы
   if (user?.isAdmin) return <Children />;

   // тек админге кол жетымды
   if (isOnlyAdmin) {
      router.pathname !== "/404" && router.replace("/404");
      return null;
   }

   // жуйеде колданушы бар бырак ол админ емес
   const isUser = user && !user.isAdmin;

   // колданушыга кол жетымды беттер
   if (isUser && isOnlyUser) return <Children />;
   // карапайым колданушы озыне кол жетымсыз бетке откысы келген сатте регистрация болымыне жыбереды
   else {
      router.pathname !== "/auth" && router.replace("/auth");
      return null;
   }
};

export default CheckRole;
