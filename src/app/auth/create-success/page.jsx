import Logo from "@/components/logo";
import SuccessContent from "@/components/reuseable/success";
import logoIcon from "@/assets/logo.svg";

export default function AccountCreateSuccessPage() {
  return (
    <div className="container mx-auto lg:px-[80px] px-4 xl:px-[120px] py-2 h-screen">
      <Logo src={logoIcon} />
      <div className=" flex flex-col justify-center h-[calc(100vh-84px)]">
        <SuccessContent
          title="Account Created Successfully!"
          description="Your account is set up! Just verify your email to get started."
          buttonTitle="Go to Home"
          url="/"
        />
      </div>
    </div>
  );
}
