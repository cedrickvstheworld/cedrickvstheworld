export class navigationButtons {
  constructor(doc) {
    this.buttons = doc.querySelectorAll('.awssld__controls');
    this.secondaryButtons = doc.querySelectorAll('.image-preview-container .awssld__controls');
  }

  hide() {
    this.buttons.forEach(button => {
      button.style.display = "none";
    })
    this.secondaryButtons.forEach(button => {
      button.style.display = "block";
    })
  }

}