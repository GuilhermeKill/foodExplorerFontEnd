import { Container, Content } from "./style";
import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Carousel } from '../../components/Slider'
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

export function Home(){

    return(
        <Container>
            <Header />
            <Content>
                <Banner />
                <Carousel title={"Refeições"} content={[
                    <Card key={1} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={2} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={3} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'r$ 12,79' }}/>,
                    <Card key={4} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={5} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={6} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'r$ 12,79' }}/>,
                    <Card key={7} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={8} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={9} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'r$ 12,79' }}/>,
                ]
                }/>

                <Carousel title={"Bebidas"} content={[
                    <Card key={1} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={2} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={3} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'r$ 12,79' }}/>,
                    <Card key={4} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={5} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={6} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'r$ 12,79' }}/>,
                    <Card key={7} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={8} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'r$ 12,79' }}/>,
                    <Card key={9} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'r$ 12,79' }}/>,
                ]
                }/>
            </ Content>

            <Footer />
        </Container>
    )
}