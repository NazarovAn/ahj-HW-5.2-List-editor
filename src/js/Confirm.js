export default class Confirm {
  constructor() {
    this.confirmEl = document.querySelector('#confirm-container');
    this.confirmDelete = document.querySelector('#confirm-delete');
    this.confirmCancel = document.querySelector('#confirm-cancel');
    this.deletedElement = null;
  }

  addListners(removeFn) {
    this.confirmDelete.addEventListener('click', (ev) => {
      ev.preventDefault();
      removeFn(this.deletedElement);
      this.closeConfirmEl();
    });

    this.confirmCancel.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.closeConfirmEl();
    });
  }

  openConfirmEl() {
    this.confirmEl.classList.remove('hidden');
    this.positionConfirmWindow();
  }

  closeConfirmEl() {
    this.confirmEl.classList.add('hidden');
    this.deletedElement = null;
  }

  positionConfirmWindow() {
    const { top } = this.deletedElement.getBoundingClientRect();
    const confirmWidth = this.confirmEl.getBoundingClientRect().width;
    const confirmHeight = this.confirmEl.getBoundingClientRect().height;
    this.confirmEl.style.top = `${top - confirmHeight / 2}px`;
    this.confirmEl.style.right = `${0 + confirmWidth / 2}px`;
  }
}
