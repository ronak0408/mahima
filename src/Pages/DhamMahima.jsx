import Navbar from "../Components/Navbar";
import DhamGrid from "./DhamGrid";
// import Navbar from "../Components/Navbar";

export default function DhamMahima() {
  return (
    <>
    
    <Navbar className="bg-black"></Navbar>
      <div className="p-4 md:p-8 bg-amber-600">
      <h1 className="text-center text-2xl md:text-4xl font-semibold mt-15 text-amber-200">
        Visit Most Famous Dhams
      </h1>
      <div className="mt-10"><DhamGrid /></div>
    </div></>
  
  );
}
