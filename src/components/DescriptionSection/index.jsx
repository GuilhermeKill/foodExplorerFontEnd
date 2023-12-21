import { Container } from "./style";
import { Ingredient } from '../Ingredient'
import { IncludeButton } from '../IncludeButton'
import Camarao from '../../assets/Mask group-2.png'

export function DescriptionSection({ data, ...rest }){

    return(
        <Container {...rest}>
            <img src={Camarao} alt="" />

            <section>
                <h1>{data.name}</h1>

                <p>{data.description}</p>
                
                { 
                    data.ingredients &&
                    <div className="ingredients">
                        {
                        data.ingredients.map(ingredient => <Ingredient key={ingredient.name} title={ingredient.name}/>)
                        }
                    </div>
                }
            
                <IncludeButton title={ "incluir - R$ " + data.price}/>
            </section>

        </Container>
    )
}