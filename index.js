const dataList = [
    { 
        language: "Español", 
        text: "Bienvenido al curso de React Native en PachaQtec", 
        id: 1 
    },
    { 
        language: "Ingles",
        text: "Welcome to the React Native course at PachaQtec",
        id: 2
    }, 
    { 
        language: "Francés",
        text: "Bienvenue dans le cours React Native chez PachaQtec",
        id: 3
    }, 
    { 
        language: "Italiano",
        text: "Benvenuti al corso React Native presso PachaQtec",
        id: 4
    }, 
    { 
        language: "Portugués", 
        text: "Bem-vindo ao curso React Native na PachaQtec", 
        id: 5
    }
];
const identifylanguage =  (data, text) => {
    let identify = (data) => text.includes(data.text)
    return data.find(identify)
}
const translate = (data, text, language) => {
    let idiom = (data) => language.includes(data.language);
    return data.find(idiom)
}
let tongue = identifylanguage(dataList, "Welcome to the React Native course at PachaQtec", "Italiano")
let translation = translate(dataList, "Welcome to the React Native course at PachaQtec", "Italiano")
console.log('The language is '+tongue.language)
console.log('The translation is '+translation.text)
