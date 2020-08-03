export default class ListItem {
  constructor(obj) {
    this.name = obj.name;
    this.price = parseInt(obj.price, 10);
    if (this.name.length < 1 || this.price < 1 || Number.isNaN(this.price)) {
      this.valid = false;
      return;
    }
    this.valid = true;
  }

  getItemEl() {
    const newEl = document.createElement('div');
    newEl.className = 'list-item';
    newEl.innerHTML = `
      <div class="item-name">${this.name}</div>
      <div class="item-price">${this.price}</div>
      <div class="item-actions-box">
        <div class="edit-button"></div>
        <div class="delete-button">X</div>
      </div>`;
    return newEl;
  }
}
