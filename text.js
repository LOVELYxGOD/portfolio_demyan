class User {

    constructor(name, age) {
        this._name = name;
        this.age = age
        this.adres = {
            country: '', 
            city: '',
            street: '',
            home: ''
        }
    }

    setAdres(){
        const country = prompt('введит страну: ')
        const city = prompt('введит город: ')
        const street = prompt('введит улица: ')
        const home = prompt('введит дом: ')

        this.adres.country=country
        this.adres.city=city
        this.adres.street=street
        this.adres.home=home
    }

    getAdres(){
        return `меня зовут ${this.name}, я живу в стране ${this.adres.country}, в городе ${this.adres.city}, на улице ${this.adres.street}, и в доме ${this.adres.home}`
    }

    setName() {
        this._name = prompt('введите ваше имя:')
    }

    getName() {
        return `имя: ${this._name}`
    }


    sayHi() {
        console.log(this.name, this.age);
    }

}

// Использование:
let user = new User("Иван", '55');
user.setName()
console.log(user.getName())
console.log(user);
// user.setAdres()
// console.log(user.getAdres())
// user.sayHi();