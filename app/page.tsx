import Image from "next/image";
import HomeComp from "./components/home-comp/Home";
import Container from "./layout/Container";


export default function Home() {
  return (
    <Container >
      <HomeComp/>
    </Container>
  )
}
