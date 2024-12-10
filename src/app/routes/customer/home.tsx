import Navbar from "../../../components/ui/navbar-home";
import HomePage from "../../../features/home/components/home-page";
// import Contact from "./contact";
// import SoundSystem from "./sound";
// import TentPackage from "./tent-package";
// import TentAndStage from "./tent-stage";
// import WeddingInspiration from "./wedding-inspiration";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      {/* <WeddingInspiration />
      <TentAndStage />
      <TentPackage />
      <SoundSystem />
      <Contact /> */}
    </div>
  );
}
