import { generateMilesForTrip, getMilesFromCode } from "services/miles-service";
import * as milesCalculatorService from "../../src/services/miles-calculator-service";
import * as milesRepository from "../../src/repositories/miles-repository";
import { Trip, ServiceClass, AffiliateStatus } from "protocols";

beforeEach(() => {
    jest.clearAllMocks();
})

describe("miles-service Unit Testing", () => {

    it("Should return miles for trip", async () => {
        const trip: Trip = {
            code: "TRIP123",
            origin: {
              lat: 23.55052,
              long: 46.633308
            },
            destination: {
              lat: 40.712776,
              long: 74.005974
            },
            miles: false,
            plane: "Boeing 737",
            service: ServiceClass.EXECUTIVE,
            affiliate: AffiliateStatus.GOLD,
            date: "2024-12-25"
        };
        
        jest.spyOn(milesCalculatorService, "calculateMiles").mockReturnValueOnce(5970);
        jest.spyOn(milesRepository, "findMiles").mockResolvedValueOnce(undefined);
        jest.spyOn(milesRepository, "saveMiles").mockResolvedValueOnce(undefined);

        const miles = await generateMilesForTrip(trip);

        const expectedMiles = 5970;

        expect(miles).toBe(expectedMiles);
    })

    it("Should return miles from a code", async () => {
        
        jest.spyOn(milesRepository, "findMiles").mockResolvedValueOnce({
            id: 1,
            code: 'test',
            miles: 100
        });
        
        const miles = await getMilesFromCode('test');

        expect(miles).toEqual({
            id: 1,
            code: 'test',
            miles: 100
        });
    })
})