import { LitElement, html, css } from 'lit';



class ProjectThree extends LitElement {
  static properties = {
    header: { type: String 
    },
    weekDate: { type: String 
    },
    completionTime: { type: String 
    },
    title: { type: String
     },
    info: { type: String 
    },
    courses: { type: String 
    },
  }

  static styles = css` 
      .calender {
        display: flex;
        flex-direction: row;
        gap: 10rem;
        padding: 20px;
      }
      .week {
        text-align: center;
        line-height: -8.5rem;
        text-transform: uppercase
        line-height: 1.5rem;
        letter-spacing: 5px; 
      }
      .week-date {
        font-size: 2.25rem;
        line-height: 3rem;
      }
      .time {
        letter-spacing: 0;
        font-size: 1rem;
        line-height: -8.5rem;
        color: #1f1f1f;
      }
      
      .title {
        font-size: 20px;
        line-height: 24px;
      }
      .info {
        font-size: 14px;
        line-height: 21px;
        color: #1f1f1f;
      }
      .courses {
        font-size: 0.875rem;
        line-height: 1.5rem;
        font-weight: normal;
        color: #373a3c;
      }      
      .collapse {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding: 0px;
      }
      .collapse-tab {
        box-sizing: border-box;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 700;
        letter-spacing: -0.1px;
        padding: 10px;
        position:relative; top:-8px;
        position:relative; left:-10px;
      }
      .collapse-tab:hover {
        padding: 10px;
        background-color: #b3ccf2;
        border-radius: 5px;
        text-decoration: underline;
      }
  `;

  constructor() {
    super();
    this.weekDate = '1';
    this.completionTime = '2';
    this.title = 'Misconceptions about happiness';
    this.info = 'In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.';
    this.courses = '4 videos (Total 30 min), 0 readings, 1 quiz';
  }

  render() {
    return html`
<div class="calender">
    <div class="week"> 
        <p>week</p> 
        <p class="week-date">${this.weekDate}</p>
      </div>
        <div class="description">
          <p class="time">${this.completionTime} hours to complete</p>
          <p class="title">${this.title}</p>
          <p class="info">${this.info}</p>
        <div class="collapse">
          <p class="courses">${this.courses}</p>
          <p class="collapse-tab">See All</p>
        </div>
          <hr>
      </div>
  </div>
    `;
  }
}

customElements.define('project-three', ProjectThree);