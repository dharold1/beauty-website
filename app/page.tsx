import Image from "next/image";
import Top from "./components/sectionView/top";
import AboutComponent from "./components/pageComponents/aboutComponent";
import AboutServices from "./components/sectionView/aboutServices";
import Services from "./components/sectionView/services";

export default function Home() {
  return (
    <main>
      <Top />
      <AboutComponent />
      <AboutServices />
      <Services/>
    </main> 
  );
}
