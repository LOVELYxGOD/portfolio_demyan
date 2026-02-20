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
        const contentSlider = this.sliderElement.innerHTML
        const wraperHiden = document.createElement('div')
        const truck = document.createElement('div')
        
        this.sliderElement.innerHTML = ''
        this.sliderElement.append(wraperHiden)
        wraperHiden.append(truck)
        truck.innerHTML = contentSlider
    }
}

const mySlider = new Slider()
mySlider.getElement('#slider')
console.log(mySlider)
mySlider.builder()

