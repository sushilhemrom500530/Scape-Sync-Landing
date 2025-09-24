import coverImage from "@/assets/footer-musk.png";

export default function Footer() {
  return (
    <section
      style={{
        backgroundImage: { coverImage }.src,
      }}
      className="bg-[#0F3B34] lg:h-[378px] flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center"
    >
      Footer
    </section>
  );
}
