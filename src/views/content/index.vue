<template>
    <div class="app-container">
        <el-button
            type="primary"
            @click="goAdd"
        >添加导航</el-button>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        goAdd () {
            this.$router.push('/content/add')
        }
    }
}
</script>

<style scoped>
</style>

