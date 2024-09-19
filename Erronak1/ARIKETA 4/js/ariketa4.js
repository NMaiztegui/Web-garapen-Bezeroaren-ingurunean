let liburuak_list=[]
function liburuak(titulua,autorea,irakurrita){
  return  {
   lTitulua : titulua,
   lAutore : autorea,
   lIrakurrita: irakurrita.toLowerCase()==="bai" // guardar como boolean (true o false)
  };
  
  
}
function main(){
   let lib_sartu = prompt('Liburu berria satu nahi dizu? erantzun bai edo ez')
   
   do{
      let titulo= prompt('Sartu liburuaren titulua')
      let autor = prompt('Sartu liburuaren autorea')
      let irakurri 

      do{
         irakurri =(prompt('Librua irakurri duzu? Sartu bai edo ez')).toLowerCase()
      }while (irakurri!="bai" &&  irakurri!="bai")

      liburuak_list.push(liburuak (titulo,autor,irakurri))

      lib_sartu = prompt('Liburu berria satu nahi dizu? erantzun bai edo ez')
      
   }while(lib_sartu.toLowerCase()==="bai")
   
  irakurritako_liburuak()
}

function irakurritako_liburuak(){
   liburuak_list.forEach(liburua =>{
      if (liburua.irakurrita){
         alert(liburua.titulua+ " "+ liburua.autorea)
      }
   } )
}



//libruuak sartzen joan, librur berribat sartunahi?bai ez, ez ba da irakurritako liburak konprobtau, bai jarraitiu eskatzen