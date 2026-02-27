class Slider {
    constructor() {
        this.sliderElement = null
    }

    getElement(selector) {
        if(selector) {
            this.sliderElement = document.querySelector(selector)
        }
    }

    builder() {
        const contentsSlider = this.sliderElement.innerHTML
        const wrapperHiden = document.createElement('div')
        const truck = document.createElement('div')
        truck.className = 'truck'

        this.sliderElement.innerHTML = ''
        this.sliderElement.append(wrapperHiden)
        wrapperHiden.append(truck)
        wrapperHiden.className = 'wrapperHiden'
        truck.innerHTML = contentsSlider

        const leftArrow = this.createArrows('arrow left')
        const rightArrow = this.createArrows('arrow right')

        this.sliderElement.append(leftArrow, rightArrow)

        const slidesCounter = this.sliderElement.querySelectorAll('.slider__slide').length
        const pagination = this.createPagination(slidesCounter)
        this.sliderElement.append(pagination)
    }

    createArrows(classname) {
        const arrow = document.createElement('button')
        arrow.className = classname
        return arrow
    }

    createPagination(counter) {
        const pagination = document.createElement('div')
        pagination.className = 'pagination'
        for (let index = 0; index < counter; index++) {
            const button = document.createElement('button')
            pagination.append(button)
        }
        return pagination
    }

}

const mySlider = new Slider()
mySlider.getElement('#slider')
mySlider.builder()


