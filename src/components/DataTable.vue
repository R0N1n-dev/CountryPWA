<template>
    <div>
        <vs-table align="center" multiple v-model="selected" pagination max-items="20" search :data="store.countries">
            <!--<template slot="header">
                <h3>
                    Countries
                </h3>
            </template>-->
            <template slot="thead">
                <vs-th sort-key="name">
                    Name
                </vs-th>
                <vs-th sort-key="phone_code">
                    Phone Code
                </vs-th>
                <vs-th sort-key="capital">
                    Capital
                </vs-th>
                <vs-th sort-key="region">
                    Region
                </vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].name">
                        {{ data[indextr].name }}
                    </vs-td>
                    <vs-td :data="data[indextr].phone_code">
                        {{ data[indextr].phone_code }}
                    </vs-td>

                    <vs-td :data="data[indextr].capital">
                        {{ data[indextr].capital }}
                    </vs-td>

                    <vs-td :data="data[indextr].region">
                        {{ data[indextr].region }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>

        <pre>{{ selected }}</pre>
    </div>
</template>
  

<script setup>
import { useCountryStore } from "../stores/country";
const store = useCountryStore();
const selected = ref([]);
</script>

