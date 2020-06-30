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

export function inputWarning(input) {
  input.classList.add('input-warning');
  let clearWarning = setTimeout(() => {
    input.classList.remove('input-warning');
    clearTimeout(clearWarning);
  }, 1100);
}

export class Key {
  constructor(document, keyCode, func) {
    this.document = document;
    this.keyCode = keyCode;
    this.func = func;
    this.bind();
  }

  bind() {
    this.document.addEventListener('keydown', this.func);
  }

  unbind() {
    this.document.removeEventListener('keydown', this.func);
  }
}

export class Hamburger {
  constructor(doc) {
    this.button = doc.getElementById('hamburger');
    this.nav = new navigationButtons(doc);
  }

  async secondForm() {
    // this.nav.hide()
    this.button.classList.add('hamburger-second-form-trigger');
    this.button.classList.remove('hamburger-first-form');
    await new Promise(r => setTimeout(r, 700));
    this.button.classList.add('hamburger-second-form-hover');
    this.button.classList.add('hamburger-second-form');
    this.button.classList.remove('hamburger-second-form-trigger');
  }

  async firstForm() {
    this.button.classList.add('hamburger-first-form-trigger');
    this.button.classList.remove('hamburger-second-form-hover');
    this.button.classList.remove('hamburger-second-form');
    await new Promise(r => setTimeout(r, 700));
    this.button.classList.remove('hamburger-first-form-trigger');
    this.button.classList.add('hamburger-first-form');
    // this.nav.show()
  }

  show() {
    this.button.style.display = 'grid';
  }
}


export class Cloak {
  constructor() {
    this.pageY = 0;
  }

  hideElementsOnScrollDown(scrollingPane, elements) {
    if (window.innerWidth < 550) {
      if (scrollingPane) {
        let y = scrollingPane.getBoundingClientRect().y
        if (y <= this.pageY) {
          for (let i in elements) {
            elements[i].style.display = 'none';
          }
        }
        else {
          for (let i in elements) {
            elements[i].style.display = 'grid';
          }
        }
        this.pageY = y;
      }
    }
  }

}
