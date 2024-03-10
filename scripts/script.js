const autBtn = document.getElementById('open-auth-btn');
//модальное окно:
const modal = document.getElementById('auth-modal');
//кнопки отмена:
const closeBtns = modal.querySelectorAll('.close-btn');
//кнопка войти:
const loginBtn = modal.querySelector('.login-btn');
//кнопка выйти:
const openCartBtn = document.getElementById('open-cart-btn');
//Кнопка карзина:
const logoutBtn = document.getElementById('logout-btn');


//функция открытия модального окна:
const openModal = () => {
    //  modal.style.display = 'block';
    modal.classList.add('d-block');
    //для получения анимации делаем задержку на 100 миллисекунд
    setTimeout(() => {
        modal.classList.add('show')
    }, 100)
}

//функция закрытия модального окна:
const closeModal = () => {
    modal.classList.remove('show');

    setTimeout(() => {
        //modal.style.display = 'none';
        modal.classList.remove('d-block');
    }, 500)
}
//функция входа из модального окна:
const login = () => {
    //autBtn.style.display = 'none';
    autBtn.classList.add('d-none');
    openCartBtn.classList.remove('d-none');
    logoutBtn.classList.remove('d-none');
    closeModal();
}
const logout = () => {
    autBtn.classList.remove('d-none');
    openCartBtn.classList.add('d-none');
    logoutBtn.classList.add('d-none');
}

const checkAuth = () => {
    // Проверяем, есть ли что-то в localStorage:
    console.log(localStorage.getItem('auth'));
    // console.log(JSON.parse(localStorage.getItem('auth')));
}
console.log(JSON.parse(localStorage.getItem('auth')));
autBtn.addEventListener('click', openModal)



//Делаем перебор массива методом forEach
closeBtns.forEach((btn) => {
    btn.addEventListener('click', closeModal);
});

loginBtn.addEventListener('click', () => {
    //инпуты в модальном окне:
    const loginInput = modal.querySelector('#login-control');
    const passwordInput = modal.querySelector('#password-control');
    //Создаём объект user:
    const user = {
        login: loginInput.value,
        password: passwordInput.value
    }
    //В localStorage методом setItem сохраним данные(auth-это ключ сохранения, второй аргумент данные
    //в виде строки )
    localStorage.setItem('auth', JSON.stringify(user));

    login();
});
logoutBtn.addEventListener('click', () => {
    logout();
});
checkAuth();
console.log(localStorage.getItem('auth'));