import Image from "next/image";
import dateIcon from "../../../assets/date.svg";
import trackingIcon from "../../../assets/track.svg";
import analysisIcon from "../../../assets/analysis.svg";
import secureIcon from "../../../assets/protect.svg";

export default function ServiceSection() {
  const serviceData = [
    {
      icon: dateIcon,
      title: "Easy Service Booking",
      description:
        " Streamlined booking process for clients with service catalogs and availability.",
    },
    {
      icon: trackingIcon,
      title: "Real-Time Tracking",
      description:
        "Monitor job progress, employee hours, and project timelines with live updates.",
    },
    {
      icon: analysisIcon,
      title: "Performance Analytics",
      description:
        "Comprehensive reporting and insights to improve business operations and efficiency.",
    },
    {
      icon: secureIcon,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
    },
  ];

  return (
    <div className="container mx-auto lg:px-[80px] px-4 xl:px-[120px] my-[81px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        {serviceData?.map((service, idx) => (
          <div key={idx} className="flex gap-9">
            <div className="lg:w-[248px]">
              <Image src={service?.icon} alt="icon" width={44} height={44} />
              <h2 className="text-lg font-bold text-[#212B36] mt-5">
                {service?.title}
              </h2>
              <p className="text-[#637381] text-sm mt-1">
                {service?.description}
              </p>
            </div>
            {idx !== serviceData.length - 1 && (
              <div className="w-[1px] h-full bg-[#F4F6F8] hidden lg:block"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
