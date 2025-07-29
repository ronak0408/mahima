import Navbar from "../Components/Navbar";
import DhamGrid from "./DhamGrid";

export default function DhamMahima() {
  return (
    <>
      <Navbar className="bg-black" />

      {/* Background Section with overlay */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/kedarnath-dham-file-photo-pti-020423702-16x9.jpg?VersionId=JWU4gZjId3CuwcAduHLPQO_X5F_klamK&size=690:388')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-orange-400/80 "></div>

        {/* Content */}
        <div className="relative z-10 p-4 md:p-8">
          <h1 className="text-center text-2xl md:text-4xl font-semibold mt-16">
            Visit Most Famous Dhams
          </h1>
          <div className="mt-1 w-full">
            <DhamGrid />
          </div>
        </div>
      </div>
    </>
  );
}
