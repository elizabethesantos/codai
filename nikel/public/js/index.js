const myModal = new bootstrap.Modal("#register-modal");// tras a modal para o js
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("sesion");

checkedLogged();// verifica se o usuario quer ficar logado

//logar usuariario
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();//faz com que os dados nao va para um banco de dados fora

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const chekSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account) {
        alert( "Opps! Verifique o usuario ou a senha.");
        return;
    }

    if(account) {
        if (account.password !== password) {
            alert( "Opps! Verifique o usuario ou a senha.");
            return;
        }

        saveSession(email, chekSession);
        
        window.location.href = "home.html";// se tiver o cadastro do usuario manda para a home
    }    
    
});

//Criar conta
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").value; //salva o email
    const password = document.getElementById("password-create-input").value;

    if(email.length < 5) {
        alert("preencha o campo com um email válido.");// nesta parte verifica se o email é mair que 5 letras
        return;
    }

    if(password.length < 4){
        alert("Preencha a senha com no minimo 4 digito");// senha maior que 4
        return;
    }

    saveAccount({ //salva os dados
        login: email,
        password: password,
        transaction: []
    });

    myModal.hide();// pede para fechar a modal

        alert("Conta criada com sucesso");// aparece uma janela dizendo que foi criado com sucesso
});

function checkedLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));// salva as informaçoes do login num banco de dado local e transforma em uma string
};

function saveSession(data,saveSession) {
    if(saveSession) {
        localStorage.setItem("session", data); // aqui fica salvo o dado permanente
    }

    sessionStorage.setItem("logged", data); // aqui se fechar a janela de login tem que logar novamente
}

function getAccount(key) {
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account); // desfaz a string feita para salvar
    }

    return"";
} 
