class Slider {
    contructor() {
        this.sliderElement = null
    }

    getElement(selector) {
        if(selector)  {
            this.sliderElement = document.querySelector(selector)
        }
    }
}

const mySlider = new Slider()
mySlider.getElement('#slider')
console.log(mySlider);
