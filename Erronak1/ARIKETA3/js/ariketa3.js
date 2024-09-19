/* function faktoriala_kalkulatu(zenbakia){
   let faktoriala= zenbakia
   for (let i = zenbakia-1; i>0; --i){
      faktoriala= faktoriala*i
   }
   alert(faktoriala)
}


function eskatu_zenbaki(){
   let zenbakia = parseInt(prompt('Sartu zenbaki positibo oso bat eta horren faktoriala kalkulatuko da'))
   return zenbakia
}

function erantzuna(){
   let s_zenbakia 
   do{
      s_zenbakia  = eskatu_zenbaki()

   }while(isNaN(s_zenbakia))

   faktoriala_kalkulatu(s_zenbakia)
} */
function factoriala(){
   do {
      let zenbakia = parseInt(prompt('Sartu zenbaki positibo oso bat eta horren faktoriala kalkulatuko da'))

   }while(isNaN(parseInt(zenbakia)) || Number(zenbakia)<0 || ((Number(zenbakia) - parseInt(zenbakia)) > 0))
      a= 1
      for (i=1; i<zenbakia; i++){
         a= i*a
      }
      alert(a)
   
}