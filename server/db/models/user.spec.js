/* global describe beforeEach it */

'use strict'

const { expect } = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', function () {
  beforeEach(function () {
    return db.sync({ force: true })
  })

  let user

  beforeEach(function () {
    return User.create({
      username: 'cody',
      password: 'bones',
      avatar: 'image',
      level: 5,
      XP: 3,
      HP: 13,
      progress: 13
    })
      .then(createdUser => {
        user = createdUser
      })
  })

  describe('values', function () {
    describe('username', function () {
      it('should be a string', function () {
        expect(user.username).to.be.a('string')
      })
      it('should have a length between 1 and 16', function () {
        expect(user.username).to.have.length.within(0, 16)
      })
      it('should be required', function () {
        expect(!!user.username).to.be.true
      })
      it('should be unique') //Probably something with checking if error is thrown
    })

    describe('password', function () {
      it('should be a string', function () {
        expect(user.password).to.be.a('string')
      })
      it('should have a length between 1 and 16', function () {
        expect(user.password).to.have.length.within(0, 16)
      })
      it('should be required', function () {
        expect(!!user.password).to.be.true
      });
    })

    describe('avatar', function () {
      it('should be a string (url to a linked image)', function () {
        expect(user.avatar).to.be.a('string')
      })
      it('should have a default of \'default image\'')
    })

    describe('level', function () {
      it('should be an integer', function () {
        console.log('number is integer:', user.level);
        expect(Number.isInteger(user.level)).to.be.true;
      })
      it('should be greater than or equal to 1', function () {
        expect(user.level).to.be.above(0)
      })
      it('should have a default of 1')
    })

    describe('XP', function () {
      it('should be an integer', function () {
        expect(Number.isInteger(user.XP)).to.be.true
      })
      it('should be greater than or equal to 0', function () {
        expect(user.XP).to.be.above(-1)
      })
      it('should have a default of 0')
    })

    describe('HP', function () {
      it('should be an integer', function () {
        expect(Number.isInteger(user.HP)).to.be.true
      })
      it('should be greater than or equal to 0', function () {
        expect(user.HP).to.be.above(-1)
      })
      it('should have a default of 0')
    })

    describe('progress', function () {
      it('should be an integer', function () {
        expect(Number.isInteger(user.progress)).to.be.true
      })
      it('should have a default of 0')
    })
  })
}) // end describe('User model')