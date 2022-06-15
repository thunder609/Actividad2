export const pintarCiudades = ( data, template, cont ) => {

    cont.innerHTML = "";

    let fragment = document.createDocumentFragment()

    data.forEach( h => {
        const { id,city, image} = h;

        template.querySelector('img').setAttribute( 'src', image );
        // template.querySelector('h5').textContent = name;
        template.querySelector('h3').textContent = city;
        template.querySelector('#itemb').dataset.id = id;

        const clone = template.cloneNode(true);
        fragment.appendChild( clone )
    } );

    cont.appendChild( fragment );

}
export const mostrarModal = async (id) => {

    const url = `let url=('../data/data.json/${id}`

    let res = await fetch(url);
    let data = await res.json();

    modal.innerHTML = `
    <div class="modal fade contenedorModal" id="contenedorModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
 `
}