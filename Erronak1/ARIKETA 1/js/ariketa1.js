function nota (){

   let nota1 = parseInt( prompt('Idatzi lehenengo nota'))
   let nota2 = parseInt( prompt('Idatzi bigarren nota'))
   let nota3 = parseInt ( prompt('Idatzi hirugarren nota'))

   let sum = nota1+nota2+nota3
   let media = sum/ 3

   if (media >= 5 ){
    alert ('Gaindituta')
   }else {
    alert ('Ez du gainditu')
   }
   
   
}