
var libruak =[
   {
      titulu: "El Hobbit",
      egilea: "J.R.R. Tolkien",
     irakurrita: true
  },
  {
      titulu: "1984",
      egilea: "George Orwell",
      irakurrita: false
  },
  {
      titulu: "Cien años de soledad",
      egilea: "Gabriel García Márquez",
      irakurrita: true
  }

]
function irakurritakoak(){
   libruak.forEach(liburu => {
      console.log(liburu); 
      if (liburu.irakurrita) {
          alert(liburu.titulu)
      }
})
}


   