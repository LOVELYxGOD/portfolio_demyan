class Slider {
    contructor() {
        this.sliderElement = null
    }

    getElement(selector) {
        if(selector)  {
            this.sliderElement = document.querySelector(selector)
        }
    }

    builder(){
        const wraperHiden = document.createElement('div')
        const lenght = document.createElement('div')
        this.sliderElement.append(wraperHiden)
        wraperHiden.append(lenght)
    }
}

const mySlider = new Slider()
mySlider.getElement('#slider')
console.log(mySlider);
mySlider.builder()

