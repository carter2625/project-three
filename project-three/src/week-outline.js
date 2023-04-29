import { LitElement, html, css } from 'lit';
import "./project-three.js"
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";


export class WeekOutline extends IntersectionObserverMixin(LitElement) {
    static get properties() {
        let props = {};
        if (super.properties) {
            props = super.properties;
        }
        return {
            ...props,
            weeks: { type: Array },
            
        }
    }
    
    static get tag() {
        return 'week-outline';
    }

    constructor() {
        super();
        this.weeks = [];
        this.updateWeek();
    }

    updateWeek() {
        const address = './api/outline';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.weeks = data;
        });
    }

    static get styles() {
        return css`
        .wrapper {
            border: 2px solid overscroll-behavior-block;
     
        }
    `;
    }

    render() {
        return html`
        ${this.elementVisible ? html`
       
        <div class="wrapper">
            ${this.weeks.map(week => html`
            <div class="item">
                <project-three weekDate="${week.weekDate}" completionTime="${week.completionTime}" title="${week.title}" info="${week.info}" courses="${week.courses}" videos="${week.videos}" readings="${week.readings}" quizzes="${week.readings}"></project-three>
            </div>
            `)}
        </div>
        `:``}
        `
    }
}
customElements.define(WeekOutline.tag, WeekOutline);