function faktoriala_kalkulatu(zenbakia){
   let faktoriala= zenbakia
   for (let i = zenbakia-1; i>0; --i){
      faktoriala= faktoriala*i
   }
   alert(faktoriala)
}


function eskatu_zenbaki(){
   let zenbakia = parseInt(prompt('Sartu zenbaki bat eta horren faktoriala kalkulatuko da'))
   return zenbakia
}

function erantzuna(){
   let s_zenbakia 
   do{
      s_zenbakia  = eskatu_zenbaki()

   }while(isNaN(s_zenbakia))

   faktoriala_kalkulatu(s_zenbakia)
}