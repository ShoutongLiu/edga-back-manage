<template>
    <el-main>
        <el-table
            :data="tableData"
            border
            v-loading="loading"
            style="width: 100%"
        >
            <el-table-column
                label="序号"
                type="index"
                width="80"
            >
            </el-table-column>
            <el-table-column
                label="图片预览"
                width="300"
            >
                <template slot-scope="scope">
                    <img
                        :src="scope.row.path "
                        alt=""
                        class="bannerImg"
                    >
                </template>
            </el-table-column>
            <el-table-column
                label="URL"
                width="500"
                prop="url"
            >
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-main>
</template>

<script>
export default {
    props: {
        tableData: Array,
        loading: Boolean
    },
    methods: {
        handleDelete (index, row) {
            this.$emit('delBanner', row)
        }
    }
}
</script>

<style lang="scss" scoped>
.bannerImg {
    width: 200px;
    height: 80px;
}
</style>