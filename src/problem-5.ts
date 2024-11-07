{

    ///problem 5

    type person = {
        name: string;
        age: number
    }

    function getProperty<T, k extends keyof T>(obj: T, key: k): T[k] {
        return obj[key];
    }

    const person: person = {
        name: "Alice", age: 30
    }

    getProperty(person, "name")














}