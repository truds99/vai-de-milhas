import { generateMilesForTrip, getMilesFromCode } from "services/miles-service";
import * as milesCalculatorService from "../../src/services/miles-calculator-service";
import * as milesRepository from "../../src/repositories/miles-repository";
import { createMilesData, createTrip } from "../factory/factory";

beforeEach(() => {
    jest.clearAllMocks();
})

describe("miles-service Unit Testing", () => {

    it("Should return miles for trip", async () => {
        const trip = createTrip();
        
        jest.spyOn(milesCalculatorService, "calculateMiles").mockReturnValueOnce(5970);
        jest.spyOn(milesRepository, "findMiles").mockResolvedValueOnce(undefined);
        jest.spyOn(milesRepository, "saveMiles").mockResolvedValueOnce(undefined);

        const miles = await generateMilesForTrip(trip);

        const expectedMiles = 5970;

        expect(miles).toBe(expectedMiles);
    })

    it("Should throw an error when miles is already registered", () => {
        const trip = createTrip();

        jest.spyOn(milesCalculatorService, "calculateMiles").mockReturnValueOnce(5970);
        jest.spyOn(milesRepository, "findMiles").mockResolvedValueOnce(createMilesData());
        jest.spyOn(milesRepository, "saveMiles").mockResolvedValueOnce(undefined);
        
        const promise = generateMilesForTrip(trip);

        expect(promise).rejects.toEqual({
            type: "conflict",
            message: `Miles already registered for code ${trip.code}`
        });
    })

    it("Should return miles from a code", async () => {
        const milesData = createMilesData();
        
        jest.spyOn(milesRepository, "findMiles").mockResolvedValueOnce(milesData);
        
        const miles = await getMilesFromCode('test');

        expect(miles).toEqual(milesData);
    })

    it("Should throw an error when miles is not found", () => {
        
        jest.spyOn(milesRepository, "findMiles").mockResolvedValueOnce(undefined);
        
        const promise = getMilesFromCode('test');

        expect(promise).rejects.toEqual({
            type: "not_found",
            message: `Miles not found for code test`
        });
    })

})