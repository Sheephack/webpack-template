//General Styles
import './assets/css/style.scss';

//Helpers (Should be toggled according to preferences)
import {CarouselInit} from './assets/js/carousel';
import Accordions from './assets/js/accordions';

//At DOM Loaded
document.addEventListener('DOMContentLoaded', function() {
    //Carousel loading procedures
        // CarouselInit();
        // const carouselWrapper = document.querySelector('#carouselID');
        // let firstSlider = new CarouselInit(carouselWrapper);
        // firstSlider.initialization();
    //END: Carousel loading procedures

    //Accordion loading procedures
        let accordionWrapper = document.querySelector('#accordionID');
        // Accordions(accordionWrapper);
    //END: Accordion loading procedures
});
