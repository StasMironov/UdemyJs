export default class Car {
    constructor(brand, name, weight, fuelType, color, img) {
        this.brand = brand;
        this.name = name;
        this.weight = weight;
        this.fuelType = fuelType;
        this.color = color;
        this.img = img;
    }
    render(x) {
        
        let i = 0;
        document.querySelector(x).textContent = this.brand;
    }
}