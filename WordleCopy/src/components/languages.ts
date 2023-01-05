import { Language } from '../types/language/main'

export const languages: Language[] = [
    {
        short: 'en',
        language: 'English',
        letters: 'abcdefghijklmnopqrstuvwxyz',
        keyboard: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    },
    {
        short: 'pl',
        language: 'Polish',
        letters: 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż',
        keyboard: ['ąćęłńóśźż', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    }];