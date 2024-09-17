let liburuLista = [];  // Kanpoko eskopoko zerrenda, liburu guztiak gordetzeko
function liburuak(titulua,autorea,irakurrita){
 return {
   lTitulua : titulua,
   lAutore : autorea,
   lIrakurrta: irakurrita
  }
  
 
}
function libruak_eskatu(){
   let lib_sartu = prompt('Liburu berria satu nahi dizu? erantzun bai edo ez')
   let x = 0
   do{
      let titulo= prompt('Sartu liburuaren titulua')
      let autor = prompt('Sartu liburuaren autorea')
      let irakurri =(prompt('Librua irakurri duzu? Sartu bai edo ez'))

     let librua= liburuak (titulo,autor,irakurri)
     liburuLista.push(librua); // Liburua zerrendara gehitzen da

      lib_sartu = prompt('Liburu berria satu nahi dizu? erantzun bai edo ez')
      x++
   }while(lib_sartu=="bai")
   liburuak_listatu(liburuLista)
  
}
function liburuak_listatu(liburuLista){
   
}


//libruuak sartzen joan, librur berribat sartunahi?bai ez, ez ba da irakurritako liburak konprobtau, bai jarraitiu eskatzen