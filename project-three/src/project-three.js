import { LitElement, html, css } from 'lit';



class ProjectThree extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div> project three </div>
    `;
  }
}

customElements.define('project-three', ProjectThree);