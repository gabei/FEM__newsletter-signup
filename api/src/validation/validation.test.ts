import {describe, expect, test} from '@jest/globals';
import { ZodError } from 'zod';
import validateUser from './validation';
import { error } from 'console';


describe('ZOD user validation function', ()=> {

    test('Username is too short', () => {
        let invalidUserName = {
            name: "J",
            email: "jameson@example.com"
        }
        expect(() => {
            validateUser(invalidUserName)
        }).toThrow()
    })
    
    
    test('Username is too long', () => {
        let invalidUserName = {
            name: "Jameson Jonathen von Scramble the Third",
            email: "jameson@example.com"
        }
        
        expect(() => {
            validateUser(invalidUserName)
        }).toThrow()
    })


    test('Username and email are valid', () => {
        let invalidUserName = {
            name: "John",
            email: "jogn@example.com"
        }
        expect(validateUser(invalidUserName)).toEqual(true)
    })

})
