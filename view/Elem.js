class Elem {
  constructor(allapot) {
    const cella = `<div class="elem"><p></p></div>`;
    $(".jatekter").append(cella);
    this.divElem = $(".jatekter").children("div last-child");
    this.pElem = this.divElem.children("p");
    this.allapot;
  }
  this.divElem.on('click', () =>{
    this.setErtek()
  })

  setErtek(jel) {
    this.pElem.html(jel);
  }
}
export default Elem;
