class Slider {
    constructor() {
        this.sliderElement = null
        this.slideWidth = 0
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

        const leftArrow = this.createArrows('arrow left', 'left')
        const rightArrow = this.createArrows('arrow right', 'right')

        this.sliderElement.append(leftArrow, rightArrow)

        const slidesCounter = this.sliderElement.querySelectorAll('.slider__slide').length
        const pagination = this.createPagination(slidesCounter)
        this.sliderElement.append(pagination)
        this.slideWidth = this.sliderElement.querySelector('.slider__slide').offsetWidth
        console.log(this.slideWidth);
        
        mySlider.setListener()
    }

    createArrows(classname, arrowName) {
        const arrow = document.createElement('button')
        arrow.className = classname
        arrow.setAttribute('data-arrow', arrowName)
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

    setListener() {
        this.sliderElement.addEventListener('click', (event) => {
            const isLeftArrow = event.target.closest('[data-arrow = "left"]');
            const isRightArrow = event.target.closest('[data-arrow = "right"]');
            console.log(isLeftArrow);
            console.log(isRightArrow);
        })
    }
}

const mySlider = new Slider()
mySlider.getElement('#slider')
mySlider.builder()



// skillsContainer.addEventListener('click', (event) => toggleSkillCard(event));
