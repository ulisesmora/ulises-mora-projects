import { Grid } from "@nextui-org/react";
import CardDesign from "../singleComponents/Card";
import vrapartment from "../../public/vr-apartment.png"
import lapo from "../../public/lapo.png"
import daimler from "../../public/mercedes.png"

export default function ProjectCards() {
  return (
    <Grid.Container gap={3} justify="center">
      <Grid xs={12} sm={6}>
        <CardDesign title={"VR Apartment"} subtitle={"VR experience to dynamic apartment "} image={vrapartment.src} isUnity={false} />
      </Grid>
      <Grid xs={12} sm={6}>
         <CardDesign title={"Laparoscopy Simulator"} subtitle={"Training Simulator for medical purposes"} image={lapo.src} isUnity={true} />
      </Grid>
      <Grid xs={12} sm={6}>
         <CardDesign title={"Mercedes Daimler Sand Box"} subtitle={"Daimler sandbox experience in UE"} image={daimler.src} isUnity={false} />
      </Grid>
      <Grid xs={12} sm={6}>
         <CardDesign title={"Shooter Fast Game"} subtitle={"Shooter Game with IA"} image={""} isUnity={false} />
      </Grid>
      <Grid xs={12} sm={6}>
         <CardDesign title={""} subtitle={""} image={""} isUnity={false} />
      </Grid>
      <Grid xs={12} sm={6}>
         <CardDesign title={""} subtitle={""} image={""} isUnity={false} />
      </Grid>
      <Grid xs={12} sm={6}>
         <CardDesign title={""} subtitle={""} image={""} isUnity={false} />
      </Grid>
      <Grid xs={12} sm={6}>
         <CardDesign title={""} subtitle={""} image={""} isUnity={false} />
      </Grid>
    </Grid.Container>
  )
}
