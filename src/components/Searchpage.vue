<template>
    <div>
        <p>SEARCH PAGE</p>
        <div>
            <div align="center">
                <vs-input v-model="query" label-placeholder="Enter Country/City"
                    description-text="Start with uppercase letter for country/city name" />
                <vs-button @click.prevent="store.filterCities(query)">Get Cities</vs-button>
                <vs-button @click.prevent="store.getCountryByCityName(query)">Get Country</vs-button>
            </div>
            <div v-if="store.filteredResults !== null">
                <ul v-if="Array.isArray(store.filteredResults)">
                    <li v-for="city in store.filteredResults" :key="city.id">{{ city.name }}</li>
                </ul>
                <div v-else>{{ store.showFilters }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCountryStore } from "../stores/country";
const store = useCountryStore();
const query = ref('');
</script>

<style scoped>
button {
    margin-inline: 5px;
    margin-block: 6px
}
</style>
