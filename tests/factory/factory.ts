import { faker } from "@faker-js/faker";
import { Trip, ServiceClass, AffiliateStatus } from "protocols";

export function createTrip() {
    return {
        code: faker.string.alphanumeric(7).toUpperCase(),
        origin: {
            lat: Number(faker.location.latitude()),
            long: Number(faker.location.longitude()),
        },
        destination: {
            lat: Number(faker.location.latitude()),
            long: Number(faker.location.longitude()),
        },
        miles: false,
        plane: faker.vehicle.model(),
        service: faker.helpers.arrayElement(Object.values(ServiceClass)),
        affiliate: faker.helpers.arrayElement(Object.values(AffiliateStatus)),
        date: faker.date.future().toISOString()
    };
}

export function createMilesData() {
    return {
        id: Number(faker.number.bigInt()),
        code: faker.string.alphanumeric(7).toUpperCase(),
        miles: Number(faker.number.bigInt({ min: 100, max: 10000 }))
    };
}




