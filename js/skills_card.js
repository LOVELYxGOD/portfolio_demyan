const skillsContainer = document.querySelector('#list-skill-card');
const fade = skillsContainer.querySelector('#fade')

function toggleSkillCard(event) {
    const isSkillCard = event.target.closest('[data-skill-card]');
    const isClose =  event.target.closest('[data-close]');

    if (isSkillCard) {
        fade.classList.add('open')
        isSkillCard.classList.add('active');
        console.log('карточка');
        
    }
    if (isClose) {
        isClose.closest('[data-skill-card]').classList.remove('active')
        console.log(isClose);
        fade.classList.remove('open')
    }
}

skillsContainer.addEventListener('click', (event) => toggleSkillCard(event));
