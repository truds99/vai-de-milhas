import { calculateMiles } from "../../src/services/miles-calculator-service";
import { Trip, ServiceClass, AffiliateStatus } from "../../src/protocols";
import * as distanceService from "../../src/services/distances-calculator-service";
import { createTrip } from "../factory/factory";

beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(distanceService, 'calculateDistance').mockReturnValue(1000);
})

describe("miles-calculator-service Unit Testing", () => {

    const fixedCoordinates = {
        origin: { lat: -23.55052, long: -46.633308 },
        destination: { lat: 40.712776, long: -74.005974 }
    };

    it("Should calculate miles for an ECONOMIC class trip with BRONZE affiliate", () => {
        const trip = createTrip();
        trip.origin = fixedCoordinates.origin;
        trip.destination = fixedCoordinates.destination;
        trip.service = ServiceClass.ECONOMIC;
        trip.affiliate = AffiliateStatus.BRONZE;
        
        trip.date = "2024-06-10";
        expect(calculateMiles(trip)).toBe(1000);
        trip.date = "2024-05-10";
        expect(calculateMiles(trip)).toBe(1100);
    });

    it("Should calculate miles for an EXECUTIVE class trip with SILVER affiliate", () => {
      const trip = createTrip();
      trip.origin = fixedCoordinates.origin;
      trip.destination = fixedCoordinates.destination;
      trip.service = ServiceClass.EXECUTIVE;
      trip.affiliate = AffiliateStatus.SILVER;

      trip.date = "2024-04-15";
      expect(calculateMiles(trip)).toBe(1650);
      trip.date = "2024-05-15";
      expect(calculateMiles(trip)).toBe(1815);

  });

  it("Should calculate miles for a FIRST_CLASS trip with GOLD affiliate", () => {
      const trip = createTrip();
      trip.origin = fixedCoordinates.origin;
      trip.destination = fixedCoordinates.destination;
      trip.service = ServiceClass.FIRST_CLASS;
      trip.affiliate = AffiliateStatus.GOLD;

      trip.date = "2024-04-20";
      expect(calculateMiles(trip)).toBe(2500);
      trip.date = "2024-05-20";
      expect(calculateMiles(trip)).toBe(2750);
  });

  it("Should calculate miles with 0 if the 'miles' flag is true (no calculation)", () => {
    const trip = createTrip();
    trip.miles = true;

    const miles = calculateMiles(trip);
    expect(miles).toBe(0);
  });

})