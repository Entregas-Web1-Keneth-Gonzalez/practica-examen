// Precios de los elementos
var precios = {
    "Pollo en salsa blanca con hongos": 10,
    "Costilla de cerdo agridulce": 12,
    "Pescado en salsa de ostiones": 15,
    "Beefsteack a la barbacoa": 18,
    "Aros de Cebolla": 2,
    "Vinagreta": 1,
    "Verduras al vapor": 3,
    "Tortilla casera": 2,
    "Puré nuestra tierra": 2,
    "Gaseosa": 2,
    "Natural(500ml)": 3,
    "Café negro": 1.5,
    "Café con leche": 2,
    "Agua(250ml)": 1,
    "Pan integral": 1.5,
    "Ensalada": 2,
    "Puré calabaza": 2,
    "Zanahorias": 1.5,
    "Vino tinto": 8,
    "Agua con gas": 1.5,
    "Batido de frutas": 3,
    "Cerveza artesanal": 5,
    "Agua minera": 1,
    "Té": 1.5,
    "Jugo de manzana": 2
};

// Obtener los datos del Local Storage
var name = localStorage.getItem('name');
var platoFuerte = localStorage.getItem('platoFuerte');
var opcionales = localStorage.getItem('opcionales').split(', ');
var bebida = localStorage.getItem('bebida');

// Calcular el precio total
var total = precios[platoFuerte];
opcionales.forEach(function(opcional) {
    total += precios[opcional];
});
total += precios[bebida];

// Mostrar los datos en la factura
document.getElementById('name').innerText = name;
document.getElementById('platoFuerte').innerText = platoFuerte;
document.getElementById('opcionales').innerText = opcionales.join(', ');
document.getElementById('bebida').innerText = bebida;
document.getElementById('total').innerText = "$" + total.toFixed(2); // Mostrar el total con dos decimales  

setTimeout(function() {
    window.location.href = "combos.html";
}, 10000);
