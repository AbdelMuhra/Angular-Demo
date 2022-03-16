import { NameGenerator } from "./namegenerator.service";


export class RandomNameGenerator implements NameGenerator {
    generateName(): string {
        return this.generateString(6);


    }
    generateSurname(): string {
        return this.generateString(5);

    }
    generatePhoneNumber(): string {
        return this.generateString(10);

    }

    private generateString(length: number): string {
        let resultvar = "";

        var chars= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i=0; i<length; ++i) {
            resultvar += chars.charAt(Math.floor(Math.random() * chars.length));

        }
        return resultvar;

    }
    
}