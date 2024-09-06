function calculateEmissions() {
    let excavation = parseFloat(document.getElementById('excavation').value);
    let transportation = parseFloat(document.getElementById('transportation').value);
    const excavationEmissionFactor = 0.05;
    const transportationEmissionFactor = 0.02;

    let excavationEmissions = excavation * excavationEmissionFactor;
    let transportationEmissions = transportation * transportationEmissionFactor;

    let totalEmissions = excavationEmissions + transportationEmissions;

    document.querySelector("#emission-results .results").innerHTML = `
        Excavation Emissions: ${excavationEmissions.toFixed(2)} tons CO2<br>
        Transportation Emissions: ${transportationEmissions.toFixed(2)} tons CO2<br>
        Total Emissions: ${totalEmissions.toFixed(2)} tons CO2
    `;
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
    document.getElementById("Trends").style.width = "300px";
}
function profile(user){
    document.getElementById('auth').innerHTML = '<button type="button" class="btn">'+user+'</button>';
}