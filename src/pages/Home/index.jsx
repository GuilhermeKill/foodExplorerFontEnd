import { Container } from "./style";
import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Slider } from "../../components/Slider";


export function Home(){

    return(
        <Container>
            <Header />
            <Banner />
            <Slider />
        </Container>
    )
}