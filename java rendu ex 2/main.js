let killer = {
    name: 'Jason',
    life: 100,
}
const caracteristics = [
"nerd",
"méchant",
"insolant",
"sportif",
"Bavard"
]

const name =[
'john',
'Jacky',
'Jeanne',
'elise',
'eric'
]

let survivor1 = new Survivor(
    names[Math.floor(Math.random() * names.length)],
    caracs[Math.floor(Math.random()* caracs.length)]
    
)
let survivor2 = new Survivor(
    names[Math.floor(Math.random() * names.length)],
    caracs[Math.floor(Math.random()* caracs.length)]

)
let survivor3 = new Survivor(
    names[Math.floor(Math.random() * names.length)],
    caracs[Math.floor(Math.random()* caracs.length)]

)
let survivor4 = new Survivor(
    names[Math.floor(Math.random() * names.length)],
    caracs[Math.floor(Math.random()* caracs.length)]

)

let survivor5 = new Survivor(
    names[Math.floor(Math.random() * names.length)],
    caracs[Math.floor(Math.random()* caracs.length)]

)



console.log(survivor1)
console.log(survivor2)
console.log(survivor3)
console.log(survivor4)
console.log(survivor5)

