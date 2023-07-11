import { Grid } from "@nextui-org/react";
import CardDesign from "../singleComponents/Card";
import vrapartment from "../../public/vr-apartment.png"
import lapo from "../../public/lapo.png"
import daimler from "../../public/mercedes.png"
import crypt from "../../public/Crypt.png"
import silent from "../../public/SilentHillRemake.png"
import shooter from "../../public/Shooter.png"
import cinemex from "../../public/cinemex.png"
import mobile from "../../public/MobileGame.png"
import ecs from "../../public/ecs.png"
import berry from "../../public/berry.png"
import ai from "../../public/ai.jpeg"
import previous from "../../public/Previous.png"
import { useRouter } from "next/router";


export default function ProjectCards() {

    const router = useRouter();

    function GoToProject(project:string){
        router.push("/"+project);
    }

  return (
    <Grid.Container gap={3} justify="center">
      <Grid onClick={() => GoToProject("apartment")} xs={12} sm={6}>
        <CardDesign  title={"VR Apartment"} subtitle={"VR experience to dynamic apartment "} image={vrapartment.src} isUnity={false} />
      </Grid>
      <Grid onClick={() => GoToProject("laparoscopy")} xs={12} sm={6}>
         <CardDesign title={"Laparoscopy Simulator"} subtitle={"Training Simulator for medical purposes"} image={lapo.src} isUnity={true} />
      </Grid>
      <Grid onClick={() => GoToProject("mercedes")} xs={12} sm={6}>
         <CardDesign title={"Mercedes Daimler Sand Box"} subtitle={"Daimler sandbox experience in UE"} image={daimler.src} isUnity={false} />
      </Grid>
      <Grid onClick={() => GoToProject("shooter")} xs={12} sm={6}>
         <CardDesign title={"Shooter Fast Game"} subtitle={"Shooter Game with IA"} image={shooter.src} isUnity={false} />
      </Grid>
      <Grid onClick={() => GoToProject("silenthill")} xs={12} sm={6}>
         <CardDesign title={"Silent Hill Concept Art Demo"} subtitle={"Concept art Silent hill remake"} image={silent.src} isUnity={true} />
      </Grid>

      <Grid onClick={() => GoToProject("crypt")} xs={12} sm={6}>
         <CardDesign title={"Crypt Experience Small Game"} subtitle={""} image={crypt.src} isUnity={false} />
      </Grid>

      <Grid onClick={() => GoToProject("mobile")} xs={12} sm={6}>
         <CardDesign title={"Concept Mobile Games  "} subtitle={"Different concept Games developed"} image={mobile.src} isUnity={true} />
      </Grid>
      <Grid onClick={() => GoToProject("cinemexar")} xs={12} sm={6}>
         <CardDesign title={"Cinemex AR Concept Demo Experiences"} subtitle={"Concept app to cinemex ar experiences "} image={cinemex.src} isUnity={true} />
      </Grid>
      <Grid onClick={() => GoToProject("berry")} xs={12} sm={6}>
         <CardDesign title={"Berry Design App"} subtitle={"App to try and view carpets and wallpaper with AR "} image={berry.src} isUnity={true} />
      </Grid>
      <Grid onClick={() => GoToProject("ai")} xs={12} sm={6}>
         <CardDesign title={"AI projects with simple AI and Advanced with Behaviors Trees "} subtitle={"My experience with AI"} image={ai.src} isUnity={true} />
      </Grid>
      <Grid onClick={() => GoToProject("unityecs")} xs={12} sm={6}>
         <CardDesign title={"Unity ECS and Dots a new way to performance massive games"} subtitle={""} image={ecs.src} isUnity={true} />
      </Grid>
      <Grid onClick={() => GoToProject("previous")} xs={12} sm={6}>
         <CardDesign title={"Previous Work and Carpet work "} subtitle={""} image={previous.src} isUnity={true} />
      </Grid>
    </Grid.Container>
  )
}
