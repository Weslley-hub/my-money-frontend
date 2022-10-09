import { AuthPageLayout } from "../../components/AuthPageLayout";
import { RegisterForm } from "./components/RegisterForm";

const Register = () => {
  return (
    <AuthPageLayout>
      <RegisterForm />
    </AuthPageLayout>
  );
};

export { Register };
