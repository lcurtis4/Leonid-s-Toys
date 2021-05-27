const toys = [
    {
        id: 1,
        name: "Rubik's Cube",
        size: 2.25,
        ages: 3,
        maker: "Ernő Rubik",
        price: 3 
    },
    {
        id: 2,
        name: "Remote Control Car",
        size: 1/8,
        ages: 3,
        maker: "ARRMA",
        price: 30
    
    },
    {
        id: 3,
        name: "PlayStation 4",
        size: 12,
        ages: 13,
        maker: "Sony",
        price: 300
    }
]

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    toyObject.id = idForNewToy
    toys.push(toyObject)
}

const nintendoSwitch = {
    name: "Switch", 
    size: 13, 
    ages: 10, 
    maker: "Nintendo",
    price: 300
}

addToyToInventory(nintendoSwitch)

console.log(toys)


// const ps5 = {
//     id: 4,
//     name: "PlayStation 5",
//     size: 12,
//     ages: 13,
//     maker: "Sony",
//     price: 1000
// }
// const xbox = {
//     id: 5,
//     name: "Xbox Series X",
//     size: 12,
//     ages: 13,
//     maker: "Microsoft",
//     price: 750
// }

// toys.push(ps5)
// toys.push(xbox)

// for (const toy of toys) {
//     toy.price = toy.price * .05 + toy.price
//     console.log(` The ${toy.name} by ${toy.maker} costs $${toy.price}`)
// }