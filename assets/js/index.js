$(document).ready(function() {
    $.ajax({
      url: 'assets/json/marcas.json', // Ruta al JSON
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        console.log(data); // Comprueba en consola
  
        const contenedor = $('#contenedor-autos');
    
        // Itera sobre cada objeto del JSON
        data.forEach(item => {
          const marca   = item.marca;
          const imagen  = item.imagen;
          const descripcion = item.descripcion || 'Descripción no disponible, proximamente.';
  
          // Crea el HTML de la tarjeta
          const tarjeta = `
            <div class="col">
              <div class="card shadow-sm">
                 <div class="card-img-top">
                   <img class="card-img-top" src="${imagen}" alt="${marca}">
                 </div>
                <div class="card-body">
                  <p class="card-text">${descripcion}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Ver carros</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Historia de la marca</button>
                    </div>
                    <small class="text-body-secondary">${marca}</small>
                  </div>
                </div>
              </div>
            </div>
          `;
  
          // Añade la tarjeta al contenedor
          contenedor.append(tarjeta);
        });
      },
      error: function(error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    });
  });