<template>
    <ul>
        <li v-for="item of deptData" :key="item.stdDeptId">
            {{ item.stdDeptName }}
        </li>
    </ul>
</template>
<script>
export default {
    computed: {
        deptData() {
            console.log(this.$store.getters.deptData)
            return this.$store.getters.deptData
        }
    },
    asyncData({ store, route }) {
		return store.dispatch('fetchItem', 1)
	}
}
</script>
