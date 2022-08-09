// username === ''===> username is required
// password === ''===> password is required

// username === 'admin'&&password ==='1234' ===> Hello, Admin
// username === 'John'&&password ==='qwerty' ===> Hello, John
// else ===> invalid username or pass wprd

let username = prompt('Enter username')
let password = prompt('Enter password')

if{(username === null || username.trim()==='')}{

}else if(password === null || password.trim()===''){

}else{
    if(username === 'admin' && password === '1234')||(username === 'John' && password === 'qwerty')
}