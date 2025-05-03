const header = document.querySelector("header");
const footer = document.querySelector("footer");

if (header) {
  header.innerHTML =`

     
        <div class="col-md-3 mb-2 mb-md-1">
          <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap" _mstaria-label="138918" _mstHash="19"><use xlink:href="#bootstrap"></use></svg>
          </a>
        </div>
  
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-secondary" _msttexthash="59059" _msthash="20">Hogar</a></li>
          <li><a href="#" class="nav-link px-2" _msttexthash="136006" _msthash="21">Funciones</a></li>
          <li><a href="#" class="nav-link px-2" _msttexthash="95589" _msthash="22">Precios</a></li>
          <li><a href="#" class="nav-link px-2" _msttexthash="425438" _msthash="23">Preguntas frecuentes</a></li>
          <li><a href="#" class="nav-link px-2" _msttexthash="107419" _msthash="24">Acerca de</a></li>
        </ul>
  
        <div class="col-md-3 text-end">
           <a href="./inicioSesion.html">
              <button type="button" class="btn btn-outline-primary me-2" _msttexthash="264433" _msthash="25">Iniciar sesión</button>
           </a>
           
          <button type="button" class="btn btn-primary" _msttexthash="175916" _msthash="26">Regístrate</button>
        </div>`;
      }



if (footer){
  footer.innerHTML =`
  <div class="col-md-4 d-flex align-items-center">
    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap" _mstaria-label="138918" _msthash="14">
      <svg class="bi" width="30" height="24" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg>
    </a>
    <span class="mb-3 mb-md-0 text-body-secondary" _msttexthash="356447" _msthash="15">© 2025 Compañía, Inc</span>
  </div>

  <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
   
  <li class="ms-3">

      <a class="text-body-secondary fs-4" href="#" aria-label="Instagram">
          <i class="bi bi-instagram"></i>
      </a>
        
  </li>
    
   <li class="ms-3">

        <a class="text-body-secondary fs-4" href="#" aria-label="Instagram">
         <i class="bi bi-facebook"></i>
        </a>
    
  </li>
    
  </ul>
`;
}



