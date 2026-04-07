class Slider {
    constructor() {
        this.wrapperHiden = null
        this.sliderElement = null
        this.truck = null
        this.slideWidth = 0
        this.counter = 0
        this.gap = 10 
        this.slidesCounter = 0
        this.leftArrow = null
        this.rightArrow = null
        this.listButtons = null
        this.stratPoint = 0
        this.endPoint = 0
    }

    getElement(selector) {
        if(selector) {
            this.sliderElement = document.querySelector(selector)
        }
    }

    builder() {
        const contentsSlider = this.sliderElement.innerHTML
        this.wrapperHiden = document.createElement('div')
        this.truck = document.createElement('div')
        this.truck.className = 'truck'
        this.truck.style.gap = `${this.gap}px`

        this.sliderElement.innerHTML = ''
        this.sliderElement.append(this.wrapperHiden)
        this.wrapperHiden.append(this.truck)
        this.wrapperHiden.className = 'wrapperHiden'
        this.truck.innerHTML = contentsSlider

        this.leftArrow = this.createArrows('arrow left arrow_blocked', 'left')

        this.rightArrow = this.createArrows('arrow right', 'right')

        this.sliderElement.append(this.leftArrow, this.rightArrow)

        this.slidesCounter = this.sliderElement.querySelectorAll('.slide').length
        
        const pagination = this.createPagination(this.slidesCounter)
        this.listButtons = pagination.querySelectorAll('[data-pagination]')
        

        this.sliderElement.append(pagination)
        this.slideWidth = this.sliderElement.querySelector('.slide').offsetWidth
        
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
            button.className = 'pagination__button'
            button.setAttribute('data-pagination', '')
            if (index == 0){
                button.classList.add('pagination__button--active')
            } 
        } 
        return pagination
    }

    pagiationHeandler(event) {
        const isPagination = event.target.closest('[data-pagination]')
        const isButton = Array.from(this.listButtons).indexOf(isPagination);
        if (isButton != -1) {
            this.counter = isButton
        }
    }

    setPaginationStyle() {
        this.listButtons.forEach(button => {
            button.classList.remove('pagination__button--active')          
        });

        this.listButtons[this.counter].classList.add('pagination__button--active')
        
    }

    decreaseCounter() {
        this.counter -= 1
    }

    increaseCounter() {
        this.counter += 1
    }

    action(){
        this.truck.style.transform = `translateX(-${this.counter*this.slideWidth+this.gap*this.counter}px)`
    }

    setStartPoint(event) {      
        this.startPoint = event.type.includes('mouse') ?  event.clientX : event.touches[0].clientX;        
    }
    setEndPoint(event) {
        this.endPoint = event.type.includes('mouse') ?  event.clientX : event.changedTouches[0].clientX;
    }

    heandlearMouseMove() {
        const difference = this.startPoint - this.endPoint
        if (difference > 0) {
            this.increaseCounter()
        }
        else if (difference < 0) {
            this.decreaseCounter()
        }
        this.action()
    }

    arrowsHeandler(event) {
        const isLeftArrow = event.target.closest('[data-arrow = "left"]');
        const isRightArrow = event.target.closest('[data-arrow = "right"]');

        if (isLeftArrow && this.counter > 0) {
                this.decreaseCounter()
                if (this.rightArrow.classList.contains('arrow_blocked')) {
                    this.rightArrow.classList.remove('arrow_blocked')
                }
                if(this.counter < 1) {
                    this.leftArrow.classList.add('arrow_blocked')
                }
            }
            
            
            if (isRightArrow && this.counter < this.slidesCounter - 1) {
                this.increaseCounter()              
                if (this.leftArrow.classList.contains('arrow_blocked')) {
                    this.leftArrow.classList.remove('arrow_blocked')
                }
                if(isRightArrow && this.counter == this.slidesCounter - 1) {
                    this.rightArrow.classList.add('arrow_blocked')
                }
            }
    }

    setListener() {
        this.wrapperHiden.addEventListener('mousedown', (event) => {
            this.setStartPoint(event)
        })
        this.wrapperHiden.addEventListener('mouseup', (event) => {
            this.setEndPoint(event)
            this.heandlearMouseMove()
        })

        this.wrapperHiden.addEventListener('touchstart', (event) => {
            this.setStartPoint(event)
        })
        this.wrapperHiden.addEventListener('touchend', (event) => {
            this.setEndPoint(event)
            this.heandlearMouseMove()
        })

        

        this.sliderElement.addEventListener('click', (event) => {
            this.arrowsHeandler(event)
            this.pagiationHeandler(event)

            // this.setPaginationStyle()
            this.action()

        })
    }
}


const mySlider = new Slider()
mySlider.getElement('#slider')
mySlider.builder()




// skillsContainer.addEventListener('click', (event) => toggleSkillCard(event));
