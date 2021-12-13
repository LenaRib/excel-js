export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
  getRoot() {
    const $root = document.createElement('div');
    // $root.textContent = 'root Test'
    // $root.style.fontSize = '10rem'
    this.components.forEach(Component => {
      const component = new Component()
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    });
    return $root;
  }
  render() {
    // console.log(this.$el);
    // this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`)
    // const node = document.createElement('h1');
    // node.textContent = 'Test';
    this.$el.append(this.getRoot())
    console.log(this.components);
  }
}
