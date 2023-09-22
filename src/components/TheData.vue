<template>
    <div>
        <button @click="get">get</button>
        <div v-if="meals === null">Hold</div>
        <div v-else>{{ meals }}</div>
    </div>
</template>

<script>
export default {
    data: () => ({
        meals: null
    }),
    methods: {
        get() {
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Pizza').then(res => res.json()).then(data => {
                this.meals = data
                console.log(this.meals);
            })
        }
    }
}
</script>


</style>