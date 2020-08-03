export default class Form {
  constructor() {
    this.formEl = document.getElementById('form-container');
    this.nameInput = this.formEl.querySelector('#form-name');
    this.priceInput = this.formEl.querySelector('#form-price');
    this.cancelButton = this.formEl.querySelector('#cancel-button');
    this.saveButton = this.formEl.querySelector('#save-button');
    this.formData = null;
    this.editedEl = null;
  }

  addListners() {
    document.addEventListener('scroll', () => {
      const scrollHeight = document.documentElement.scrollTop;
      this.moveForm(scrollHeight);
    });

    this.cancelButton.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.clearFormData();
      this.closeForm();
    });
  }

  closeForm() {
    this.formEl.classList.add('hidden');
  }

  openForm() {
    this.formEl.classList.remove('hidden');
  }

  moveForm(xCoord) {
    this.formEl.style.top = `${xCoord + 200}px`;
  }

  getFormData() {
    this.formData = new FormData(this.formEl);
    return { name: this.formData.get('form-name'), price: this.formData.get('form-price') };
  }

  clearFormData() {
    this.nameInput.value = '';
    this.priceInput.value = '';
    this.formData = null;
    this.editedEl = null;
  }

  fillInputs(item) {
    this.nameInput.value = item.name;
    this.priceInput.value = item.price;
  }
}
