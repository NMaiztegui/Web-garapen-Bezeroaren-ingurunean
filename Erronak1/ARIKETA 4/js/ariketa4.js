function liburuak(titulua,autorea,irakurrita){
  var liburua = {
   lTitulua : titulua,
   lAutore : autorea,
   lIrakurrta: irakurrita
  }
  
  return liburua
}
function libruak_eskatu(){
   let lib_sartu = prompt('Liburu berria satu nahi dizu? erantzun bai edo ez')
   let x = 0
   do{
      let titulo= prompt('Sartu liburuaren titulua')
      let autor = prompt('Sartu liburuaren autorea')
      let irakurri =(prompt('Librua irakurri duzu? Sartu bai edo ez'))

     let librua= liburuak (titulo,autor,irakurri)
     liburen_lista(librua,x)

      lib_sartu = prompt('Liburu berria satu nahi dizu? erantzun bai edo ez')
      x++
   }while(lib_sartu=="bai")
   
  
}

function liburen_lista(librua,x){
   let lista = []
   lista[x]=librua
   return lista
}

//libruuak sartzen joan, librur berribat sartunahi?bai ez, ez ba da irakurritako liburak konprobtau, bai jarraitiu eskatzen