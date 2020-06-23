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

  show() {
    this.buttons.forEach(button => {
      button.style.display = "block";
    })
  }
}

export class funCubes {
  constructor(doc) {
    this.button = doc.getElementById('fun-cubes-container');
  }

  hide() {
    this.button.classList.add('animate__fadeOut');
    const hideToDisplay = setTimeout(() => {
      this.button.classList.remove('animate__fadeOut');
      this.button.style.display = 'none';
      clearTimeout(hideToDisplay);
    }, 500);
  }

  show() {
    this.button.style.display = 'grid';
  }

}