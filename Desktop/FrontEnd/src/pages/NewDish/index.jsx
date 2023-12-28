import { Container, Form, Add} from "./style";

import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { InputSelect } from '../../components/InputSelect'
import { TextArea } from '../../components/TextArea'
import { IngredientItem } from '../../components/IngredientItem'
import { Section } from "../../components/Section";
import { Footer } from '../../components/Footer'

import { FiUpload } from 'react-icons/fi';

export function NewDish(){

    return(
        <Container>
            <Header />
            <ButtonBack />
            <Form>
                <h1>Adicionar prato</h1>
               
                <div className="top">
                    <Add>
                        <span>Imagem do prato</span>
                        <label htmlFor="dish">
                            <FiUpload />
                              <p>Selecione imagem do prato</p>
                            <input type="file" id="dish" />
                        </label>
                    </Add>
                    <Input type='text' label={"Nome"} placeholder="Ex: Salada Ceasar"/> 
                    <InputSelect label={"Categoria"} />
                </div>

                <div className="mid">
                    <Section span={"Ingredientes"}><IngredientItem isNew value={"asasdsad"}/>
                        <IngredientItem isNew value={"ksd"}/>
                    </Section>
                    <Input type='text' label={"Preço"} placeholder="R$ 00,00"/> 
                </div>

                <TextArea label={"Descrição"} placeholder={'Fale brevemente sobre o prato, seus ingredientes e comppsição'}/>
                <div className="buttons">
                    <Button title={"Adicionar prato"}/>
                </div>


            </Form>
            <Footer />
        </Container>
    )

}