class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random()
    };

    getSignature(): number {
        return this.signature
    };
};

class Person {
    private key: Key;

    constructor(item: Key) {
        this.key = item;
    };

    getKey() {
        return this.key;
    }
};

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];

    comeIn(item: Person) {
        if (this.door === true) {
            this.tenants.push(item);
            console.log("Person entered the house");
        } else (
            console.log("The door is closed. Person cannot enter")
        )
    };

    abstract openDoor(item: Key): void;
};

class MyHouse extends House {
    constructor(key: Key) {
        super();
        this.key = key;
    };

    openDoor(item: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("The door is open");
        } else {
            console.log("Invalid key. The door remains closed");
        }
    }
};

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};