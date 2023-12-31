export class ListItemData {
  constructor(id, title, subtitle = null, star = null) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.repoUrl = subtitle ? "https://github.com/" + subtitle : null;
    this.star = star;
    this._content = null;
  }
  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
  }
}

export class DraggableListItemData extends ListItemData {
  constructor(id, title, index, content) {
    super(id, title);
    this.index = index;
    this.content = content;
  }
}
