const skillsContainer = document.querySelector('#skill-list');
const fade = document.querySelector('#fadeblock')
const body = document.body;

function toggleSkillCard(event) {
    const isSkillCard = event.target.closest('[data-skill-card]');
    const isClose =  event.target.closest('[data-close]');

    if (isSkillCard) {
        fade.classList.add('active')
        isSkillCard.classList.add('active');
        body.classList.add('no-scroll');
        
    }
    if (isClose) {
        isClose.closest('[data-skill-card]').classList.remove('active')
        isClose.classList.remove('no-scroll')
        body.classList.remove('no-scroll');
        fade.classList.remove('active')
    }
}

skillsContainer.addEventListener('click', (event) => toggleSkillCard(event));
