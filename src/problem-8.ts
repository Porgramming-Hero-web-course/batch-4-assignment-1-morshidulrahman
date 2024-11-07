{


    interface person {
        name: string;
        age: number;
        email: string
    }

    function getProperty<T, k extends keyof T>(obj: T, key: k): T[k] {
        return obj[key];
    }

    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
        return keys.every((key) => getProperty(obj, key) !== undefined);
    }


    const person: person = {
        name: "John",
        age: 30,
        email: "john@example.com"
    };

    validateKeys(person, ["name", "age"])


















}