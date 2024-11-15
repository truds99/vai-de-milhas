import { calculateMiles } from "../../src/services/miles-calculator-service";
import { Trip, ServiceClass, AffiliateStatus } from "../../src/protocols";
import * as distanceService from "../../src/services/distances-calculator-service";

beforeEach(() => {
    jest.clearAllMocks();
})

describe("miles-calculator-service Unit Testing", () => {

    jest.spyOn(distanceService, 'calculateDistance').mockReturnValue(1000);

    it("Should calculate miles for an ECONOMIC class trip with BRONZE affiliate and non-birthday month", () => {
        const trip: Trip = {
        code: "TRIP123",
        origin: { lat: -23.55052, long: -46.633308 },
        destination: { lat: 40.712776, long: -74.005974 },
        miles: false,
        plane: "Boeing 737",
        service: ServiceClass.ECONOMIC,
        affiliate: AffiliateStatus.BRONZE,
        date: "2024-08-25"
        };

        const miles = calculateMiles(trip);

        expect(miles).toBe(1000);
    });

    it("Should calculate miles for an EXECUTIVE class trip with SILVER affiliate and birthday month", () => {
        const trip: Trip = {
        code: "TRIP456",
        origin: { lat: -23.55052, long: -46.633308 },
        destination: { lat: 40.712776, long: -74.005974 },
        miles: false,
        plane: "Boeing 747",
        service: ServiceClass.EXECUTIVE,
        affiliate: AffiliateStatus.SILVER,
        date: "2024-05-10"
    };

    const miles = calculateMiles(trip);
    expect(miles).toBe(1815);

  });

  it("Should calculate miles for a FIRST_CLASS trip with GOLD affiliate and non-birthday month", () => {
    const trip: Trip = {
      code: "TRIP789",
      origin: { lat: -23.55052, long: -46.633308 },
      destination: { lat: 40.712776, long: -74.005974 },
      miles: false,
      plane: "Airbus A380",
      service: ServiceClass.FIRST_CLASS,
      affiliate: AffiliateStatus.GOLD,
      date: "2024-09-12"
    };

    const miles = calculateMiles(trip);
    expect(miles).toBe(2500);
  });

  it("Should calculate miles with 0 if the 'miles' flag is true (no calculation)", () => {
    const trip: Trip = {
      code: "TRIP321",
      origin: { lat: -23.55052, long: -46.633308 },
      destination: { lat: 40.712776, long: -74.005974 },
      miles: true,
      plane: "Boeing 737",
      service: ServiceClass.ECONOMIC,
      affiliate: AffiliateStatus.BRONZE,
      date: "2024-12-25"
    };

    const miles = calculateMiles(trip);
    expect(miles).toBe(0);
  });

})