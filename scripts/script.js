function changeLanguage(language) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = translations[language][key];
        
        // Verificar si la traducción contiene HTML
        if (translation.includes('<')) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });
}

// Funciones para los botones de descarga
function downloadCert() {
    document.getElementById('downloadCertLink').click();
    scrollToStep(2);
}

function downloadWireGuardPlaystore() {
    document.getElementById('downloadWireGuardPlaystoreLink').click();
    scrollToStep(3);
}

function downloadWireGuardOther() {
    document.getElementById('downloadWireGuardOtherLink').click();
    scrollToStep(3);
}


// Establecer el idioma predeterminado
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('es'); // Cambia a 'en' si prefieres que el idioma por defecto sea inglés

    // Detectar el sistema operativo del usuario y mostrar el contenido correspondiente
    const defaultPlatform = detectDefaultPlatform();
    showContent(defaultPlatform);
});

// Función para detectar la plataforma predeterminada basada en el sistema operativo del usuario
function detectDefaultPlatform() {
    const isWindows = navigator.platform.toUpperCase().indexOf('WIN') > -1;
    const isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1;

    return isWindows ? 'windows' : (isAndroid ? 'android' : ''); // Si no se detecta ningún sistema operativo, devuelve una cadena vacía
}

// Función para mostrar el contenido según la plataforma seleccionada
function showContent(platform) {
    // Oculta todos los contenidos
    document.getElementById('windows-content').style.display = 'none';
    document.getElementById('android-content').style.display = 'none';

    // Muestra el contenido correspondiente a la plataforma seleccionada
    if (platform === 'windows') {
        document.getElementById('windows-content').style.display = 'block';
    } else if (platform === 'android') {
        document.getElementById('android-content').style.display = 'block';
    }
}

// Resto del código existente
function scrollToStep(step) {
    var element = document.getElementById('step' + step);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Monstrar u ocultar la información de CA
const step1Info = document.querySelector('[data-key="step1_info"]');
const step1InfoText = document.getElementById('step1_info_text');

let isInfoVisible = false; // Estado inicial: oculto

step1Info.addEventListener('click', () => {
    // Alternar el estado
    isInfoVisible = !isInfoVisible;

    // Mostrar u ocultar la información según el estado
    if (isInfoVisible) {
        step1InfoText.style.display = 'block';
    } else {
        step1InfoText.style.display = 'none';
    }
});