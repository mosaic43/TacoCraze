const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    counterDOM.innerHTML = state.value;

return `
<h1 style="background-color:red" id="counterValue">0</h1>

`
}