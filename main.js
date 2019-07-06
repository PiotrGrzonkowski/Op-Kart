function setIndex() {
    const li = [...document.querySelectorAll(".list>li")];
    const div = [...document.querySelectorAll('section.text>div')];

    const liNested = [...document.querySelectorAll(".list li ul li")];
    const divNested = [...document.querySelectorAll('section.text div>div')];




    let counter = 0;

    for (i = 0; i < li.length; i++) {
        if (li.length !== 0) {
            li[i].setAttribute("data-key", counter)
            li[i].lastElementChild.setAttribute("data-key", counter);
            div[i].setAttribute("data-key", counter);
            liNested[i].setAttribute("data-key", counter + "a");
            divNested[i].setAttribute("data-key", counter + "a");
            counter++
        }

    }
}

setIndex();



liToggleClass = e => {

    const index = e.target.dataset.key;

    const li = document.querySelector(`.list>li[data-key="${index}"]`);
    const div = document.querySelector(`section.text>div[data-key="${index}"]`);
    console.log(div)

    if (e.target.dataset.key.length === 1) {
        console.log("w if");

        // const a = document.querySelector(`.list>li a[data-key="${index}"]`);
        [...document.querySelectorAll('li')].map(li => li.classList.remove("active"));
        [...document.querySelectorAll('div')].map(div => div.classList.remove("visible"));
        li.classList.toggle("active");
        div.classList.toggle("visible");



        if (li.dataset.key === "1") {
            document.querySelector(".hidden").classList.toggle("move")

        }
    }
}

const bars = document.querySelector(".fa-bars");
const ulNav = document.querySelector(".list");

showNav = () => {
    ulNav.classList.toggle("displayNav");

}
liNestedToggleClass = e => {
    const index = e.target.dataset.key;
    const liNested = document.querySelector(`.list li ul li[data-key="${index}"]`);
    const divNested = document.querySelector(`section.text div>div[data-key="${index}"]`);
    console.log(divNested);
    [...document.querySelectorAll('li')].map(li => li.classList.remove("active"));
    [...document.querySelectorAll('div')].map(div => div.classList.remove("visible"));
    liNested.classList.toggle("active");
    divNested.classList.toggle("visible");
    divNested.classList.toggle("noVisible");
}



bars.addEventListener('click', showNav)
const li = [...document.querySelectorAll('li')];
li.forEach(item => item.addEventListener('click', liToggleClass))

const liNested = [...document.querySelectorAll(".list li ul li")];
liNested.forEach(item => item.addEventListener('click', liNestedToggleClass))