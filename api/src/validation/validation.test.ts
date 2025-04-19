import {describe, expect, test} from '@jest/globals';
import validateUser from './validation';


describe('ZOD user validation function', ()=> {

    test('Username is too short', () => {
        let invalidUserName = {
            name: "J",
            email: "john@example.com"
        }
        expect(() => {
            validateUser(invalidUserName)
        }).toThrow()
    })
    
    
    test('Username is too long', () => {
        let invalidUserName = {
            name: "Jameson Johnathan von Scramble the Eleventh",
            email: "john@example.com"
        }

        expect(() => {
            validateUser(invalidUserName)
        }).toThrow()
    })


    test('Username is not a string', () => {
        let invalidUserName = {
            name: "69",
            email: "john@example.com"
        }

        expect(() => {
            validateUser(invalidUserName)
        }).toThrow()
    })

    test('Email is invalid', () => {
        let invalidUserName = {
            name: "Johnathen",
            email: "john@gmail"
        }

        expect(() => {
            validateUser(invalidUserName)
        }).toThrow()
    })

    test('Username and email are both invalid', () => {
        let invalidUserName = {
            name: "A",
            email: "A"
        }

        expect(() => {
            validateUser(invalidUserName)
        }).toThrow()
    })


    test('Username and email are empty', () => {
        let invalidUserName = {
            name: " ",
            email: " "
        }
        expect(() => {
            validateUser(invalidUserName)
        }).toThrow()
    })


    test('Username and email are valid', () => {
        let invalidUserName = {
            name: "John",
            email: "john@example.com"
        }
        expect(validateUser(invalidUserName)).toEqual(true)
    })

})
