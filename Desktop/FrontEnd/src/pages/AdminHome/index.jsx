import { Container, Content } from "./style";
import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Carousel } from '../../components/Slider'
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

export function AdminHome(){

    return(
        <Container>
            <Header />
            <Content>
                <Banner />
                <Carousel title={"Refeições"} content={[
                    <Card isAdmin={true} key={1} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={2} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={3} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={4} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={5} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={6} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={7} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={8} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={9} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'R$ 12,79' }}/>,
                ]
                }/>

                <Carousel title={"Bebidas"} content={[
                    <Card isAdmin={true} key={1} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={2} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={3} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={4} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={5} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={6} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={7} data={{name: "bASDASla", description: "lasASDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={8} data={{name: "blaASDASD", description: "lasDASDASDASDASd", price: 'R$ 12,79' }}/>,
                    <Card isAdmin={true} key={9} data={{name: "blASDASDa", description: "laDASDASDASDASDASDsd", price: 'R$ 12,79' }}/>,
                ]
                }/>
            </ Content>

            <Footer />
        </Container>
    )
}