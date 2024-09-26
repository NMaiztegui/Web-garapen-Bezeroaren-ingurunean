window.onload=function(){
    document.getElementById('click').addEventListener('click',addimg,false)
   let irudia=[
        'saludo1.jpg',
        'saludo2.jpg',
        'saludo3.jpg',
        'saludo4.jpg'
    ]
    let kont=0
   let addedImg=[]

   function addimg(){
    kont++

    let img= document.createElement('img')
    img.src = 'img/'+irudia[kont]

    document.getElementById('irudiak').appendChild(img)

    addedImg[kont]=irudia[kont]
    
    }
}
