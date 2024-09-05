function calculateEmissions() {
    let ex = parseFloat(document.getElementById('excavation').value);
    let tr = parseFloat(document.getElementById('transportation').value);
    let totalEmissions = ex * 0.5 + tr * 0.2;
    console.log(totalEmissions);
    document.querySelector('.results').innerHTML = 'Total Emissions: '+totalEmissions +' tons CO2';
}

document.addEventListener('DOMContentLoaded', function(){
    // Example of handling the Calculate Emissions button click
    document.querySelector('.estimation-form .btn').addEventListener('click', function() {
        let excavation = parseFloat(document.getElementById('excavation').value);
        let transportation = parseFloat(document.getElementById('transportation').value);
        
        if (!isNaN(excavation) && !isNaN(transportation)) {
            calculateEmissions();
        } else {
            alert('Please enter valid numbers');
        }
    });
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const closeLogin = document.getElementById('closeLogin');
        const closeRegister = document.getElementById('closeRegister');
    
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });
    
        registerBtn.addEventListener('click', () => {
            registerModal.style.display = 'block';
        });
    
        closeLogin.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    
        closeRegister.addEventListener('click', () => {
            registerModal.style.display = 'none';
        });
    
        window.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
            if (event.target === registerModal) {
                registerModal.style.display = 'none';
            }
        });
});
function openNav(){
    document.getElementById("Sidenav").style.width="250px";
}
function closeNav(){
    document.getElementById("Sidenav").style.width="0";
}
function close_Nav() {
    document.getElementById("Trends").style.width = "0";
}

function openNav2() {
    document.getElementById("Trends").style.width = "300px"; // Open the section
}