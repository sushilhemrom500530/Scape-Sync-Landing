import Title from "@/app/components/title";
import Image from "next/image";
import projectFrame from "@/assets/project-frame.png";

export default function BuildEveryOneSection() {
  return (
    <div className="container mx-auto lg:px-[80px] px-4 xl:px-[120px] my-[81px]">
      <Title
        title="Build for Everyone"
        description="Whether you're booking services, managing tasks, or running operations, we've designed the perfect experience for you."
        descriptionStyle="lg:w-[551px] mx-auto mt-3"
        arrowShow={true}
      />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[568px]">
          <button className="border border-[#3BA334] rounded-full px-5 py-[6px] font-medium text-sm text-[#3BA334]">
            Users
          </button>
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] lg:w-[390px] mt-2">
            Book services, track progress and stay updated
          </h2>
          <p className="text-lg text-[#637381] mt-4 mb-6 lg:w-[470px]">
            Easily schedule appointments, get real-time updates, and enjoy a
            smooth, transparent service experience.
          </p>

          <h3 className="border-l-[3px] border-l-[#3BA334] py-1 pl-6">
            Book services in seconds
          </h3>
          <h3 className="border-l-[3px] border-l-[#3BA334] py-1 pl-6 my-4">
            Track real-time job updates
          </h3>
          <h3 className="border-l-[3px] border-l-[#3BA334] py-1 pl-6">
            Schedule appointments at your convenience
          </h3>
        </div>
        <div className="relative">
          <Image
            src={projectFrame}
            alt="title-vactor"
            className="w-full h-full"
            height={0}
            width={0}
          />
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
