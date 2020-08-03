import List from './List';
import Form from './Form';
import ListItem from './ListItem';
import Confirm from './Confirm';

export default class Controller {
  constructor() {
    this.form = new Form();
    this.confirm = new Confirm();
    this.list = new List(this.form, this.confirm);
  }

  init() {
    this.addListners();
  }

  addListners() {
    this.list.addListners();
    this.form.addListners();
    this.confirm.addListners(this.list.removeListItem.bind(this.list));

    this.form.saveButton.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.insertNewListItem();
    });
  }

  insertNewListItem() {
    this.formData = this.form.getFormData();
    const newListItem = new ListItem(this.formData);
    if (newListItem.valid) {
      this.list.addNewListItem(newListItem);

      if (this.form.editedEl !== null) {
        this.list.removeListItem(this.form.editedEl);
      }

      this.form.closeForm();
      this.form.clearFormData();
    }
  }
}
