import ReduxToastrLib from "react-redux-toastr";

const ReduxToast = () => {
   return (
      <ReduxToastrLib
         newestOnTop={false}
         preventDuplicates
         progressBar
         closeOnToastrClick
         timeOut={6000}
         transitionIn="fadeIn"
         transitionOut="fadeOut"
      />
   );
};

export default ReduxToast;
