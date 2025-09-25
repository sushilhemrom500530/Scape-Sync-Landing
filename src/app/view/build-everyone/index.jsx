import Title from "@/app/components/title";
import Image from "next/image";
import performanceImage from "../../../assets/performance.png";
import progressImage from "../../../assets/progress.png";
import trackImage from "../../../assets/track-navigate.png";
import startArrow from "../../../assets/build-arrow.png";
import rightArrow from "../../../assets/build-right-frame.png";
import centerArrow from "../../../assets/center-arrow.png";

export default function BuildEveryOneSection() {
  const buildData = [
    {
      title: "Book services, track progress and stay updated",
      role: "Users",
      description:
        "Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.",
      benefits: [
        "Book services in seconds",
        "Track real-time job updates",
        "Schedule appointments at your convenience",
      ],
      thumbnail: progressImage,
    },
    {
      title: "Assign jobs, monitor performance, and streamline operations.",
      role: "Bussiness Owners",
      description:
        "Gain full control of your workforce with real-time tracking, smart scheduling, and service management in one app.",
      benefits: [
        "Assign jobs to the right team member",
        "Monitor performance in real time",
        "Manage clients and services seamlessly",
      ],
      thumbnail: performanceImage,
    },
    {
      title: "See tasks, track time, and navigate routes with ease.",
      role: "Employees",
      description:
        "Everything you need to manage your workday from job assignments to optimized routes and time logging.",
      benefits: [
        "Assign jobs to the right team member",
        "Monitor performance in real time",
        "Manage clients and services seamlessly",
      ],
      thumbnail: progressImage,
    },
  ];
  return (
    <div className="">
      <div className="relative  overflow-hidden ">
        <Title
          title="Build for Everyone"
          description="Whether you're booking services, managing tasks, or running operations, we've designed the perfect experience for you."
          descriptionStyle="lg:w-[551px] mx-auto mt-3"
          arrowShow={true}
        />
        <Image
          src={startArrow}
          alt="title-vactor"
          className="absolute left-1/4 -translate-x-1/4 top-24 "
          height={0}
          width={0}
        />
        <Image
          src={rightArrow}
          alt="title-vactor"
          className="absolute md:-right-12 -right-40 top-20 "
          height={0}
          width={0}
        />
        <Image
          src={centerArrow}
          alt="title-vector"
          className="h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  hidden md:block"
          height={0}
          width={0}
        />
        <div>
          {buildData?.map((item, idx) => (
            <div key={idx} className="relative overflow-hidden">
              {/* box shadow left  */}
              <div className="absolute -left-44 top-12 w-[220px] h-[250px] md:w-[280px] md:h-[350px] xl:w-[420px] xl:h-[550px] rotate-[-45.511deg] shrink-0 rounded-[800.02px] bg-[rgba(155,255,150,0.14)] blur-[150px]"></div>
              {/* box shadow right  */}
              <div className="absolute right-0 top-12 w-[251px] h-[380px] md:w-[351px] md:h-[480px] xl:w-[551px] xl:h-[800px] rotate-[-45.511deg] shrink-0 rounded-[800.02px] bg-[rgba(155,255,150,0.10)] blur-[150px]"></div>
              <div
                className={`flex flex-col justify-between container mx-auto lg:px-[80px] px-4 xl:px-[120px] my-[81px] ${
                  idx === 1 ? "lg:flex-row-reverse" : " lg:flex-row"
                }`}
              >
                <div className="lg:w-[568px]">
                  <button className="border border-[#3BA334] rounded-full px-5 py-[6px] font-medium text-sm text-[#3BA334]">
                    {item?.role}
                  </button>
                  <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] lg:w-[390px] mt-2">
                    {item?.title}
                  </h2>
                  <p className="md:text-lg text-[#637381] mt-4 mb-6 lg:w-[470px]">
                    {item?.description}
                  </p>
                  {item?.benefits?.map((benefit, index) => (
                    <h3
                      key={index}
                      className="border-l-[3px] border-l-[#3BA334] py-1 pl-6 mb-4"
                    >
                      {benefit}
                    </h3>
                  ))}
                </div>
                <div className="relative">
                  <Image
                    src={item?.thumbnail}
                    alt="title-vactor"
                    className="w-full h-full"
                    height={0}
                    width={0}
                  />
                  <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
