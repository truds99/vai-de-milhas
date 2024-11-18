import { faker } from "@faker-js/faker";
import { Trip, ServiceClass, AffiliateStatus } from "protocols";

export function createTrip(overrides: Partial<Trip> = {}) {
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


