const data = JSON.parse(localStorage.getItem('data'));
if (!data) {
    window.location = 'index.html';
}
const oSpanButton = document.querySelector('.tools span');
const oDiv = document.querySelector('.main');
oSpanButton.onclick = function () {
    this.classList.toggle('sun');
    document.body.classList.toggle('dark');
};

data.forEach(element => {
    const divStr = `
    <div class="blog">
        <h3>${element.title}</h3>
        <p>${element.content}</p>
        <div class="sign">
            Posted by: ${element.username}
        </div>
    </div>
    `;
    oDiv.innerHTML += divStr;
});
