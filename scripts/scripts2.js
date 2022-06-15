import {  fetchData1}  from '../scripts/fetcData.js'
import {  getCiudades }   from '../helper/getCiudades.js'
import { pintarCiudades,mostrarModal }  from '../module/pintarCiudades.js'

let a=document.querySelector('.item1')
let b=document.querySelector('.item2')
let c=document.querySelector('.item3')
let d=document.querySelector('.item4')
let f=document.querySelector('.item5')


let boton1 = document.querySelector('.itemb');
const modal1 = document.getElementById('modal1')
// console.log(boton1)
let template = document.getElementById('template-card').content;
// let template1 = document.getElementById('template-formut').content;

let fragment = document.createDocumentFragment();
let itm = document.getElementById('main')
let modal= document.getElementById('main1');


// let itmb = document.querySelector('#itemb');
//console.log(pelicula);

let idd;
let url=('../data/data.json')
let it=0;
let data

// window.addEventListener("DOMContentLoaded", ()=>{
//     fetchData1(idd)


//     });  
document.addEventListener( "DOMContentLoaded", async () => {

    try {

        data = await getCiudades( url );
        // pintarCiudades( data, template, itm  );
           console.log(data)
    } catch (err) {

        alert( "Servidor no responde" );

    }

} );

 
// Traer Ciudades



// function africa(){

// } 

a.addEventListener('click', (e)=> {
    e.preventDefault()  
it=1
const results = data.filter( h => h.id===it) 
    
pintarCiudades( results, template, itm);
console.log("hola")

     });
    
b.addEventListener('click', (e)=> {
    e.preventDefault()  
    it=2
    const results = data.filter( h => h.id===it) 
    
    pintarCiudades( results, template, itm);
  
        
             });  
c.addEventListener('click', (e)=> {
    e.preventDefault()
it=3
const results = data.filter( h => h.id===it) 
    
pintarCiudades( results, template, itm);
     console.log("hola")
});   
d.addEventListener('click', (e)=> {
    e.preventDefault()
    it=4
    const results = data.filter( h => h.id===it) 
    
    pintarCiudades( results, template, itm);
        console.log("hola")
        
             });   
f.addEventListener('click', ()=> {
it=5

 const results = data.filter( h => h.id===it) 
    
pintarCiudades( results, template, itm);
 
 })

 itm.addEventListener('click', (e) => {
    let id;
    if (e.target.classList.contains('itemb')) 
          id=e.target.dataset.id
        
          Modal(id)
  
  
})
const Modal = async (id2) => {
    let url=(`../data/data.json`)
   const res = await fetch(url);
   const data = await res.json();

   console.log("objeto parametros"+id2)
  
  
   //listarIngre.innerHTML = '';
   //preparar.innerHTML = '';
  
   data.forEach(p=> {
       const { id, idc,name, image} = p;
     
     if (p.id == id2) {
          
        console.log("es el modal nombre"+p.idc)
        console.log('modal id ciudad'+p.city)
        modal.innerHTML = `
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${p.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class='row g-0'>
        <div class='col-md-4'>
          <img class='w-100 my-5 ms-4' src="${p.image}" alt="${p.name}">
        </div>
        <div class='col-md-8'>
          <div class="modal-body my-3 mx-2">
            
            <h3> $${p.id}</h3>
            <p>${p.image}</p>
            
            </div>
        </div>
       </div> 
      `
       console.log("prueba"+id)
     }
  
   })
  }
 