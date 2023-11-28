const btn = document.getElementById('btn');

function menu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

}

btn.addEventListener('click', menu);
