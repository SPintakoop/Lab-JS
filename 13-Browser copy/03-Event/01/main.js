const btnAdd = document.querySelector('.btn-bt');

btnAdd.addEventListener('click',function(){
    const input = document.querySelector('input');
    const newValue = input.value;
    const ul = document.querySelector('ul');
    ul.insertAdjacentHTML('beforeend',html);
    const li = document.createElement("li");
    const span = document.createElement('span');
    span.innerHtml=newValue;

    let prompt (alert 'Form is submitted')
});