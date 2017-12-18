const Cat = (name, age) => {
  let state = {
    name,
    age,
    species: 'Cat'
  }
  return Object.assign(
    {},
    meower(state),
    cuddler(state),
    defaultAnimal(state)
  )
}

const Dog = (name, age) => {
  let state = {
    name,
    age,
    species: 'Dog'
  }
  return Object.assign(
    {},
    barker(state),
    cuddler(state),
    defaultAnimal(state)
  )
}

const Snake = (name, age) => {
  let state = {
    name,
    age,
    species: 'Snake'
  }
  return Object.assign(
    {},
    slitherer(),
    hisser(state),
    defaultAnimal(state)
  )
}

const meower = (state) => ({
  meow: () => 'Meow, I\'m a ' + state.species.toLowerCase() +'!'
})

const barker = (state) => ({
  bark: () => 'Bark, I\'m a ' + state.species.toLowerCase() +'!'
})

const hisser = (state) => ({
  hiss: () => 'Hiss, I\'m a ' + state.species.toLowerCase() +'!'
})

const slitherer = () => ({
  slither: () => '~~~~~'
})

const cuddler = (state) => ({
  cuddle: () => state.name + ' wants to cuddle!'
})

const defaultAnimal = (state) => ({
  bio: () => state.name + ' the ' + state.species.toLowerCase() + ' is ' + state.age.toString() + ' years old.',
  eat: () => state.name + ' ate some ' + state.species.toLowerCase() + ' food!',
  bite: () => state.name + ' bit you!',
  age: () => state.age.toString(),
  name: () => state.name
})


module.exports = {
  Cat,
  Dog,
  Snake
}
