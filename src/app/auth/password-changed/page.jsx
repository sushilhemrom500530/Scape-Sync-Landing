import Logo from "@/components/logo";
import SuccessContent from "@/components/reuseable/success";
import logoIcon from "@/assets/logo.svg";

export default function PasswordChangedSuccess() {
  return (
    <div className="container mx-auto lg:px-[80px] px-4 xl:px-[120px] py-2 h-screen">
      <Logo src={logoIcon} />
      <div className=" flex flex-col justify-center h-[calc(100vh-84px)]">
        <SuccessContent
          className="lg:w-[530px] mx-auto text-center"
          title="Password Changed Successfully!"
          description="Your account is set up! Just verify your email to get started."
          buttonTitle="Go to Login"
          url="/auth/login"
        />
      </div>
    </div>
  );
}
