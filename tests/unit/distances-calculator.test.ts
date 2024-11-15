import { applyHaversineFormula, calculateDistance, toRadius } from "services/distances-calculator-service";
import * as distacesCalculatorService from "../../src/services/distances-calculator-service"


beforeEach(() => {
    jest.clearAllMocks();
})

describe("distances-calculator-service Unit Testing", () => {

    it("Should calculate distance", async () => {

        jest.spyOn(distacesCalculatorService, 'toRadius')
            .mockReturnValueOnce(0.4115)
            .mockReturnValueOnce(0.5254)
            .mockReturnValueOnce(0.4115)
            .mockReturnValueOnce(0.5254);

        jest.spyOn(distacesCalculatorService, 'applyHaversineFormula').mockReturnValueOnce(3184);

        const distance = calculateDistance({
            lat: 23.55052,
            long: 46.633308
          }, {
            lat: 40.712776,
            long: 74.005974
          }, 
            false);

        expect(distance).toBe(3184);
    });

    it("Should calculate radius", async () => {

        const radius = toRadius(74.005974);

        expect(radius).toBe(0.4115);
    });

    it("Should apply Haversine formula", async () => {

        const lat1 = 0.4115; 
        const lat2 = 0.7102; 
        const dLat = 0.2987; 
        const dLon = 0.4786; 
        const radius = 6371; 

        const distance = applyHaversineFormula(lat1, lat2, dLat, dLon, radius);

        const expectedDistance = 3184;

        expect(distance).toBe(expectedDistance);
    });

})