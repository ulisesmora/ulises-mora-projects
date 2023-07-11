import Article from "@/components/singleComponents/Article";
import mer1 from "../public/mer1.gif"
import mer2 from "../public/mer2.gif"
import mer3 from "../public/mer3.jpg"
import mer4 from "../public/mer4.jpg"

export default function Mercedes() {
  return (

    <Article title={"Daimler/Mercedes Benz AR/VR"} description={" This work was commissioned to me by Freightliner and Mercedes Benz for Expotransporte 2019. This is a multiplayer VR game where users can create a racing track made of sand and immediately race a Freightliner truck or a Mercedes Benz bus on a virtual replica of that track while competing to gather the most coins placed allover the road. About the program.This has been one of the most challenging projects I've ever worked on. It had two complex elements to be resolved: the scanning of the sand to create a virtual replica, and the multiplayer. In order to create a copy of the real track into the virtual reality, a Kinect was used. Taking advantage of its sensors, information like depth of the scanned surface was collected, this information was used to map a big amount of point vertex to finally recreate a 3D mesh of the track."} urlvideo={null} images={[mer1.src,mer2.src,mer3.src,mer4.src]} videos={null}/>
  )
}
