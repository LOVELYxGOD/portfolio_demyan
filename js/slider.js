class Slider {
    constructor() {
        this.sliderElement = null
        this.truck = null
        this.slideWidth = 0
        this.counter = 0
        this.gap = 10 
        this.slidesCounter = 0
        this.leftArrow = null
        this.rightArrow = null
    }

    getElement(selector) {
        if(selector) {
            this.sliderElement = document.querySelector(selector)
        }
    }

    builder() {
        const contentsSlider = this.sliderElement.innerHTML
        const wrapperHiden = document.createElement('div')
        this.truck = document.createElement('div')
        this.truck.className = 'truck'
        this.truck.style.gap = `${this.gap}px`

        this.sliderElement.innerHTML = ''
        this.sliderElement.append(wrapperHiden)
        wrapperHiden.append(this.truck)
        wrapperHiden.className = 'wrapperHiden'
        this.truck.innerHTML = contentsSlider

        this.leftArrow = this.createArrows('arrow left', 'left')
        this.rightArrow = this.createArrows('arrow right', 'right')

        this.sliderElement.append(this.leftArrow, this.rightArrow)

        this.slidesCounter = this.sliderElement.querySelectorAll('.slider__slide').length
        const pagination = this.createPagination(this.slidesCounter)
        this.sliderElement.append(pagination)
        this.slideWidth = this.sliderElement.querySelector('.slider__slide').offsetWidth
        
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
            if (isLeftArrow && this.counter > 0) {
                this.counter -= 1
                
            }

            if (isRightArrow && this.counter < this.slidesCounter - 1) {
                
                this.counter += 1                
            }
            else if(isRightArrow && this.counter == this.slidesCounter - 1) {
                this.rightArrow.classList.add('arrow_blocked')
            }

            this.truck.style.transform = `translateX(-${this.counter*this.slideWidth+this.gap*this.counter}px)`
            
        })
    }
}


const mySlider = new Slider()
mySlider.getElement('#slider')
mySlider.builder()



// skillsContainer.addEventListener('click', (event) => toggleSkillCard(event));
