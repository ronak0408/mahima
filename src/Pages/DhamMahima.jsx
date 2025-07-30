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
              "url('https://s7ap1.scene7.com/is/image/incredibleindia/2-mana-village-badrinath-uttarakhand-attr-hero?qlt=82&ts=1726646481060')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-orange-400/60 "></div>

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
