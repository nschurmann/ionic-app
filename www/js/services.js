angular.module('starter.services', [])
.service('Todos', function Todos () {
  this.data = [{
    id: 0,
    desc: 'Comprar leche',
    completado: false,
  }, {
    id: 1,
    desc: 'Trapear la cocina',
    completado: false,
  }, {
    id: 2,
    desc: 'Reparar bicicleta',
    completado: false,
  }]

  this.all = function all () {
    return this.data
  }

  this.remove = function remove (todo) {
    this.data.splice(this.data.indexOf(todo), 1)
  }

  this.completar = function completar (todo) {
    var index = this.data.indexOf(todo)
    this.data[index].completado = true
  }

  this.get = function get (id) {
    var todo = {}
    this.data.map(function(el) {
      if (el.id == id) {
        todo = el
      }
    })
    return todo
  }
})
