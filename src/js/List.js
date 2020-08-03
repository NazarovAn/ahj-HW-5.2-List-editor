export default class List {
  constructor(form, confirm) {
    this.listItems = [];
    this.listContainer = document.getElementById('list-container');
    this.addButton = this.listContainer.querySelector('.add-button');
    this.list = this.listContainer.querySelector('.list');
    this.form = form;
    this.confirm = confirm;
  }

  addListners() {
    this.addButton.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.form.openForm();
    });
  }

  addNewListItem(item) {
    const itemEl = item.getItemEl();
    this.list.insertAdjacentElement('beforeend', itemEl);
    this.addNewListItemListners(item, itemEl);
  }

  removeListItem(item) {
    this.list.removeChild(item);
  }

  addNewListItemListners(item, itemEl) {
    const itemEditButton = itemEl.querySelector('.edit-button');
    itemEditButton.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.form.editedEl = itemEl;
      this.form.openForm();
      this.form.fillInputs(item);
    });

    const itemDeleteButton = itemEl.querySelector('.delete-button');
    itemDeleteButton.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.confirmDelete(itemEl);
    });
  }

  confirmDelete(itemEl) {
    this.confirm.deletedElement = itemEl;
    this.confirm.openConfirmEl();
  }
}
