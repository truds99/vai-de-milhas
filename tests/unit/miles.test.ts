import { generateMilesForTrip } from "services/miles-service";
import * as milesCalculatorService from "../../src/services/miles-calculator-service";
import { Trip, ServiceClass, AffiliateStatus } from "protocols";


jest.mock("../../src/repositories/miles-repository", () => {
    return {
      saveMiles: jest.fn().mockResolvedValue(undefined),
      findMiles: jest.fn().mockResolvedValue(undefined)
    };
}); 

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

        const miles = await generateMilesForTrip(trip);

        expect(miles).toBe(5970);
    })
})