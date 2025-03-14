class SkillComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const skillName = this.getAttribute('skill-name');
        const experience = this.getAttribute('experience');
        const progress = this.getAttribute('progress');

        const wrapper = document.createElement('article');
        wrapper.innerHTML = `
            <div class="skill-info">
                <p>${skillName}</p>
                <p>${experience}</p>
            </div>
            <span class="skill-progress-bar"></span>
        `;
        wrapper.className = 'skill-container';

        const style = document.createElement('style');
        style.textContent = `
        .skill-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 1.5rem;
        }

        .skill-container .skill-info {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .skill-container .skill-progress-bar {
            width: 100%;
            height: .5rem;
            background-color: var(--light-color);
            border-radius: 25px;
            margin-top: .5rem;
        }

        .skill-container .skill-progress-bar::after {
            content: '';
            display: block;
            width: ${progress}%;
            height: .5rem;
            background-color: var(--secondary-color);
            border-radius: 25px;
        }
        `;

        shadow.appendChild(wrapper);
        shadow.appendChild(style);
    }
}

customElements.define('skill-component', SkillComponent);