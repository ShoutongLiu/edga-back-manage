<template>
    <el-table
        :data="tableData"
        v-loading="loading"
        style="width: 50%"
        stripe
        border
    >
        <el-table-column
            label="序号"
            type="index"
            width="80"
        >
        </el-table-column>
        <el-table-column
            :label="info.label"
            width="250"
        >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="url"
            width="250"
        >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.url }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: {
        tableData: Array,
        info: Object,
        loading: Boolean
    },
    data () {
        return {

        }
    },
    methods: {
        handleEdit (index, row) {
            this.$emit('edit', row)
            console.log(index, row);
        },
        handleDelete (index, row) {
            this.$emit('delete', row)
        }
    }
}
</script>