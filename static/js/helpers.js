export class navigationButtons {
  constructor(doc) {
    this.buttons = doc.querySelectorAll('.awssld__controls');
  }

  hide() {
    this.buttons.forEach(buttons => {
      buttons.style.display = "none";
    })
  }

}