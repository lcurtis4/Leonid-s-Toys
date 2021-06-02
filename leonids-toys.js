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
    // Step 1: Get maximum id currently in the array
    //  Get index of last item in the array
    const lastIndex = toys.length - 1
    //  Get the last object in the array
    const currentLastToy = toys[lastIndex]
    //  Get id property value of last item in the array
    const maxId = currentLastToy.id
    // Step 2: Increase the current max id by 1
    const idForNewToy = maxId + 1
    // Step 3: Add the id property to each object.
    toyObject.id = idForNewToy
    // Step 4: Add the item to the array
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