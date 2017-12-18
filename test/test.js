var assert = require('assert')
var chai = require('chai')
var expect = chai.expect
var should = chai.should()

const index = require('../index')
const Cat = index.Cat
const Dog = index.Dog
const Snake = index.Snake


describe('Animals', function() {
  const spot = Dog('Spot', 7)
  const sassy = Cat('Sassy', 5)
  const hiss = Snake('Hiss', 3)

    it('Objects should not be an created using classical inheritance', function() {
      spot.constructor.toString().substring(0,5).should.not.equal('class')
    })
    it('Objects should not be created using prototypal inheritance', function() {
      let construct = spot.constructor.toString()
      let containsThisKeyword = /this/g.test(construct)
      expect(containsThisKeyword).to.equal(false)
    })
    it('all animals should bite', function() {
      [spot, sassy, hiss].forEach(animal => {
        animal.bite().should.equal(animal.name() + ' bit you!')
      })
    })
    it('cats should meow', function(){
      sassy.meow().should.equal('Meow, I\'m a cat!')
    })
    it('should be able to say it\'s bio', function(){
      assert.equal(sassy.bio(), 'Sassy the cat is 5 years old.')
    })
    it('should be able to eat', function(){
      assert.equal(spot.eat(), 'Spot ate some dog food!')
    })
    it('dogs should bark', function() {
      assert.equal(spot.bark(), 'Bark, I\'m a dog!')
    })
    it('cats and dogs want to cuddle', function() {
      assert.equal(sassy.cuddle(), 'Sassy wants to cuddle!')
      assert.equal(spot.cuddle(), 'Spot wants to cuddle!')
    })

    it('snakes should hiss', function(){
      assert.equal(hiss.hiss(), 'Hiss, I\'m a snake!')
    })
    it('snakes do not cuddle', function(){
      try{
        hiss.cuddle()
      } catch(err) {
        should.exist(err)
      }
    })
    it('snakes slither', function() {
      hiss.slither().should.equal('~~~~~')
    })
})
