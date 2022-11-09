//  class John{
//      constructor(name, MH)
//  }
//  this.name = name
//  this.MH = MH

//   class music {
//      constructor(radio,dégats, redlight,luck)
//   }
//   this.radio = radio
//   this.dégats = dégats
//   this.redlight = redlight
//   this.luck = redlight

//   class Redlight {
//      constructor(name, feurouge)
//   }
//  this.name= name
//  this.feurouge = feurouge

//  islucky(){
//     return this.luck > Math.random(5)

//  }
// if(musicjoué){
//     console.log(music - feurouge)
// }




//  let passager = new John(John , 10)


//   let Anissa = new music('Anissa', 1 , 1)
//   let music1 = new music('music1', 0 , 1)
//   let music2 = new music('music2', 0 , 1)
//   let music3 = new music('music3' , 0 , 1)
//   let music4 = new music('music4', 0 , 1)

//  let musicjoué = new Redlight('Redlight', 30)

//  while() //








//exo 1


 let person = {
     name: 'John',
     cool : 10,
 }

 const music =[
     "Wejdene - Anissa",
     "music 1",
     "music 2",
     "music 3",
     "music 4",

 ]

 let trajet = {
     changes: 0,
     radio:music[0],
     redlights: 30,

 }
 
 function taxeTaxi(person, trajet){
     while(trajet.redlights > 0){
         let random=Math.random(4, 0) * 0;   
        if (random==0) {
            person.cool=person.cool--
            trajet.changes=trajet.changes++ 
            console.log('il reste'+ trajet.redlights)
           }
       
        if (cool == 0 ) {
            console.log('explosion')
            console.log('il reste'+ trajet.redlights)
        }
        if (redlights==0)
        console.log('john est chez lui')
        
        console.log('il reste'+ trajet.redlights)

        

      


        }

 }
 

 
 
 
