function showPhase(phaseNumber) {
    var phases = document.querySelectorAll('fieldset');
    phases.forEach(function(phase) {
        phase.style.display = 'none';
    });

    var selectedPhase = document.getElementById('phase' + phaseNumber);
    if (selectedPhase) {
        selectedPhase.style.display = 'block';
    }
}

function buy() {
    var name = document.getElementById('name').value;
    var platoFuerte = document.getElementById('platoFuerte').value;

    var opcionales = [];
    var opcionalesInputs = document.querySelectorAll('input[name="opcionales"]:checked');
    opcionalesInputs.forEach(function(input) {
        opcionales.push(input.name);
    });

    var bebida = document.querySelector('input[name="drink"]:checked').value;

    localStorage.setItem('name', name);
    localStorage.setItem('platoFuerte', platoFuerte);
    localStorage.setItem('opcionales', opcionales.join(', '));
    localStorage.setItem('bebida', bebida);

    window.location.href = "factura.html";
}

function cancel() {
    document.getElementById('name').value = '';

    var opciones = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
    opciones.forEach(function(opcion) {
        opcion.checked = false;
    });

    showPhase(1);
}

function generateInvoice() {
    var name = document.getElementById('name').value;
    var dateTime = new Date().toLocaleString();

    var platoFuerte;
    var selectedPhase = document.querySelector('fieldset:not([style*="none"])');
    if (selectedPhase) {
        platoFuerte = selectedPhase.querySelector('select').value;
    }

    var opcionales = [];
    var opcionalesInputs = selectedPhase.querySelectorAll('input[type="checkbox"]:checked');
    opcionalesInputs.forEach(function(input) {
        opcionales.push(input.name);
    });

    var bebida;
    var bebidaInput = selectedPhase.querySelector('input[type="radio"]:checked');
    if (bebidaInput) {
        bebida = bebidaInput.value;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('platoFuerte', platoFuerte);
    localStorage.setItem('opcionales', opcionales.join(', '));
    localStorage.setItem('bebida', bebida);
    localStorage.setItem('dateTime', dateTime);

    window.location.href = "factura.html";
}

function cancel() {
    document.getElementById('name').value = '';

    var opciones = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
    opciones.forEach(function(opcion) {
        opcion.checked = false;
    });

    showPhase(1);
}



