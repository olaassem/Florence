export default class Pills {
  constructor(el) {
    console.log(el)
    this.setVariables(el);
    this.bindEvents();
  }

  setVariables(el) {
    this.el = el;
    this.greenPills = document.getElementsByClassName('header__wrapper--pills1');
  }

  bindEvents() {
    window.addEventListener('load', this.animatePill) //check if you need this line
    this.createObserver()
  }

  createObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    this.observer = new IntersectionObserver(this.handleIntersect, options)
    this.observer.observe(this.el)
  }

  handleIntersect = (entries, observer) => {
      //console log to see when it is firing!!!
    console.log( 'handle intersect is firing!!')
    // entries.forEach((entry) => {
    //
    //   //what happens when el is observed?????
    //
    //
    //   if (entry.intersectionRatio > ??? ) {
    //     // entry.target.style.transform = increasingColor.replace("ratio", entry.intersectionRatio);
    //   } else {
    //     // entry.target.style.transform = decreasingColor.replace("ratio", entry.intersectionRatio);
    //   }
    //
    //   //return null or false if unavailable??
    //
    // });
  }


  animatePill = () => {
    this.el.classList.add('rotate')
  }
}
