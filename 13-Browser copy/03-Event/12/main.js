const btnAdd = document.querySelector('.btn-add');

btnAdd.addEventListener('click',function(){
    const input = document.querySelector('input');
    const newValue = input.value;
    // const html=`<li><span>${newValue}</span>
    //              <button class = "btn-edit"> Edit</button>
    //              <button class = "btn-del"> Del</button>
    //              </li>`;
    const ul = document.querySelector('ul');
    ul.insertAdjacentHTML('beforeend',html);
    const li = document.createElement("li");
    const span = document.createElement('span');
    span.innerHtml=newValue;
})

    const btnEdit = document.createElement('button');
    btnEdit.className = 'btn-edit';
    btnEdit.innerHtml = 'Edit';
    btnEdit.addEventListener('click',function(){
        console.log('Edit');
    })
    
    const btnDel = document.createElement('button');
    btnEdit.className = 'btn-edit';
    btnEdit.innerHtml = 'Edit';
    btnEdit.addEventListener('click',function(){
        console.log('Del');
});