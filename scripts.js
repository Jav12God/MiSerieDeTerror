document.getElementById('personaje').addEventListener('click', function() {
    alert('¡Sácame de aquí!');
    setTimeout(function() {
        alert('');
    }, 5000);
});

document.getElementById('descargar-demo').addEventListener('click', function() {
    document.body.innerHTML = '<img src="objetos/Error.png" alt="Error" id="error-image">';
    document.getElementById('error-image').addEventListener('click', function() {
        document.body.style.backgroundImage = 'url(objetos/Fondo-dos.gif)';
        document.body.innerHTML = `
            <header>
                <h1>Error</h1>
            </header>
            <main>
                <h2 style="color: red;">¡Soy real!</h2>
                <button id="error-button">¡Soy real!</button>
            </main>`;
        document.getElementById('error-button').addEventListener('click', function() {
            document.body.innerHTML = '';
            document.body.innerHTML += '<video src="objetos/ojos.mkv" autoplay></video>';
            document.querySelector('video').addEventListener('ended', function() {
                window.close();
            });
        });
    });
});

document.querySelectorAll('.miniatura').forEach(img => {
    img.addEventListener('click', function() {
        const descripcion = img.getAttribute('data-descripcion');
        document.getElementById('descripcion-imagen').innerText = descripcion;
        
        const overlay = document.getElementById('overlay');
        const overlayImg = document.getElementById('overlay-img');
        overlayImg.src = img.src;
        overlay.classList.add('show');
    });
});

document.getElementById('overlay').addEventListener('click', function() {
    this.classList.remove('show');
});
