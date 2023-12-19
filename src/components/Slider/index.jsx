
import { Card } from '../../components/Card'
import { Splide, SplideSlide,  } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Container } from './style';

export function Slider(){
  
        const [sliderRef] = useKeenSlider({
            slides: {
            perView: 2,
            spacing: 15,
            },
        })
        
        return (
            <Container>
                <div ref={sliderRef} className="keen-slider">
                    <div><Card data={{name: "lasd", description: 123, price: "40"}}/></div>
                    <div ><Card data={{name: "lasd", description: 123, price: "40"}}/></div>
                    <div className="keen-slider__slide number-slide3">3</div>
                    <div className="keen-slider__slide number-slide4">4</div>
                    <div className="keen-slider__slide number-slide5">5</div>
                    <div className="keen-slider__slide number-slide6">6</div>
                </div>
            </Container>
        )
}