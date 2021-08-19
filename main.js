function Social(name) {
  this.name = name.toUpperCase();
  this.url = `https://${name}.com`;
  this.icon = `icons/${name}.svg`;
}

let facebook = new Social('facebook');
let instagram = new Social('instagram');
let twitter = new Social('twitter');

console.log(facebook.name);
console.log(facebook.url);
console.log(facebook.icon);

console.log(instagram.name);
console.log(instagram.url);
console.log(instagram.icon);

console.log(twitter.name);
console.log(twitter.url);
console.log(twitter.icon);

class socialButton extends HTMLButtonElement {
  constructor() {
    super();
    this.classList.add('social-btn');
  }
}

customElements.define('social-button', socialButton, {extends: 'button'});

class socialURL extends HTMLAnchorElement {
  constructor() {
    super();
    this.href = facebook.url;
  }
}

customElements.define('social-url', socialURL, {extends: 'a'});

class socialIcon extends HTMLImageElement {
  constructor() {
    super();
    this.classList.add('social-icon');
    this.src = facebook.icon;
    this.alt = facebook.name;
    this.title = facebook.name;
  }
}

customElements.define('social-icon', socialIcon, {extends: 'img'});
