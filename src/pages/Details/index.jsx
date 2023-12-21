import { Container, Content } from "./style";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonBack } from '../../components/ButtonBack'
import { DescriptionSection } from '../../components/DescriptionSection'

export function Details(){
    return(
        <Container>
            <Header />
            <ButtonBack />
            <Content>
                
                <DescriptionSection  data={{name: "Salada Ravanello", description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.", price: "85", ingredients: [{ name: "banan"}, { name: "banan"}]}}/>
            </Content>
            <Footer /> 
        </Container>
    )
}