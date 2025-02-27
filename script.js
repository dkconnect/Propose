let yesB = document.getElementById("yeah")
let noB = document.getElementById("nope")
let dialogEl = document.getElementById("dialog")
let bodyEl = document.body

let counter = 0
yesB.addEventListener('click',(e) => {
    if(dialogEl.style.display === 'none' || dialogEl.style.display === '') {
        dialogEl.style.display = 'block'
    }
    else {
        dialogEl.style.display = 'none'
    }
});
noB.addEventListener('mouseover',(e) =>{
    const $target = e.target;

    $target.style.top = `${Math.random() * 200}px`;
    $target.style.right = `${Math.random() * 200}px`;

    if(counter>=5) {
        $target.innerHTML = 'Try Harder!';
    }
    counter += 1;
});
noB.addEventListener('click',(e)=>{
    e.preventDefault()
})