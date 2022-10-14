import "./ForgetPassword.styles.css";

import { AuthPageLayout } from "../../components";
import { NewPasswordForm } from "./components";

const ForgetPassword = () => {
  return (
    <AuthPageLayout>
      <NewPasswordForm />
    </AuthPageLayout>
  );
};

export { ForgetPassword };
