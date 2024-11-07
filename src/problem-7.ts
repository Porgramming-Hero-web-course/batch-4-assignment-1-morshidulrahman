{

    class Car {
        constructor(public name: string, public model: string, public year: number) {
        }
        getCarAge() {
            return new Date().getFullYear() - this.year;
        }
    }

    const car = new Car("Honda", "Civic", 2018)

    car.getCarAge()







}