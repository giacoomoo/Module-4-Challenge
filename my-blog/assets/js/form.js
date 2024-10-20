const oButton = document.querySelector('button');
const oInputUsername = document.querySelector('input[name="username"]');
const oInputTitle = document.querySelector('input[name="title"]');
const oTextArea = document.querySelector('textarea');
oButton.addEventListener('click', function (e) {
    e.preventDefault();
    const username = oInputUsername.value;
    const title = oInputTitle.value;
    const content = oTextArea.value;
    const data = JSON.parse(localStorage.getItem('data')) || [];
    if (!username || !title || !content) {
        alert("Please complete the form");
        return;
    }
    data.push({ username, title, content });
    console.log(username, title, content);
    localStorage.setItem('data', JSON.stringify(data));
    oInputUsername.value = '';
    oInputTitle.value = '';
    oTextArea.value = '';
});
