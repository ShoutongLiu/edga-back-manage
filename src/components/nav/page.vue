<template>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        class="page"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
        @prev-click="handelPrev"
        @next-click="handelNext"
    >
    </el-pagination>
</template>

<script>
export default {
    data () {
        return {
            currentPage: parseInt(this.$route.query.page)
        }
    },
    props: {
        total: Number
    },
    methods: {
        handleCurrentChange (page) {
            // 子组件向父组件传递当前页
            this.$router.push({ query: { page } })
            this.$emit('getPage', page)
        },
        handelPrev (page) {
            this.$router.push({ query: { page } })
            this.$emit('getPage', page)
        },
        handelNext (page) {
            this.$router.push({ query: { page } })
            this.$emit('getPage', page)
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    margin-top: 20px;
}
</style>