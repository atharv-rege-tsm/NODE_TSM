let html = '';
let title = document.querySelector("#task-input");
document.querySelector("#submit").addEventListener("click", () => {
    if (title.value != "") {
        html += `<div id="todo-item">${title.value}</div>`
        document.querySelector('#todo-container').innerHTML = html;
        title.value = "";
    }
})