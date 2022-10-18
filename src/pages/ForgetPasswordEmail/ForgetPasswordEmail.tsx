import { AuthPageLayout } from "../../components";
import { NewPasswordEmailForm } from "./components/NewPasswordEmailForm/NewPasswordEmailForm";

const ForgetPasswordEmail = () => {
    return (
      <AuthPageLayout>
      <NewPasswordEmailForm/>
      </AuthPageLayout>
    );
  };

  export { ForgetPasswordEmail};