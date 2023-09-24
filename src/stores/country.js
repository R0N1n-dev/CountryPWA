import { defineStore } from "pinia";
import countries from "../assets/countries.json";
import cities from "../assets/states.json";
export const useCountryStore = defineStore("country", {
  state: () => ({
    countries: countries,
    cities: cities,
    filteredResults: null,
  }),
  getters: {
    showCountries: (state) => state.countries,
    showFilters: (state) => state.filteredResults,
  },
  actions: {
    filterCities(country) {
      this.filteredResults = this.cities.filter((city) => {
        return city.country_name === country;
      });
    },
    getCountryByCityName(cityName) {
      const city = this.cities.find((city) => city.name === cityName);

      if (city) {
        this.filteredResults = city.country_name;
        //console.log(`The country for city '${cityName}' is '${countryName}'.`);
        //return countryName;
      } else {
        alert(`City '${cityName}' not found.`);
        return null;
      }
    },
  },
});
