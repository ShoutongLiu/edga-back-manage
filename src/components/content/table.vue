<template>
    <el-table
        v-loading="loading"
        :data="tableData"
        border
        style="width: 100%"
    >
        <el-table-column
            label="序号"
            type="index"
            width="50"
        />
        <el-table-column
            prop="companyName"
            label="公司名称"
            width="150"
        />
        <el-table-column
            label="擅长"
            width="200"
        >
            <template slot-scope="scope">
                <span
                    v-for="(v , i ) in scope.row.skiile"
                    :key="v.url"
                >{{ v.name ? v.name : '' }}<i v-if="scope.row.skiile && i
                        !==scope.row.skiile.length
                        -1">、</i></span>
            </template>
        </el-table-column>
        <el-table-column
            label="分类"
            width="200"
        >
            <template slot-scope="scope">
                <span>{{ scope.row.categroyVal ? scope.row.categroyVal.name : ''}}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="位置"
            width="200"
        >
            <template slot-scope="scope">
                <span
                    v-for="(v , i ) in scope.row.locationVal"
                    :key="v.url"
                >{{ v.name ? v.name : ''}}<i v-if="scope.row.locationVal && i
                        !==scope.row.locationVal.length
                        -1">、</i></span>
            </template>
        </el-table-column>
        <el-table-column
            label="标签"
            width="200"
        >
            <template slot-scope="scope">
                <span
                    v-for="(v , i ) in scope.row.tagVal"
                    :key="v.url"
                >{{ v.name ? v.name : '' }}<i v-if="scope.row.tagVal && i
                        !==scope.row.tagVal.length
                        -1">、</i></span>
            </template>
        </el-table-column>

        <el-table-column
            label="显示类型"
            width="120"
        >
            <template slot-scope="scope">
                <span>{{ scope.row.showType && scope.row.showType.length > 0 ? scope.row.showType.join('、') :'' }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="是否在首页显示"
            width="120"
        >
            <template slot-scope="scope">
                <span>{{ scope.row.showIndex ? '是' : '否' }}</span>
            </template>
        </el-table-column>
        <el-table-column
            prop="views"
            label="访问数"
            width="120"
        />
        <el-table-column
            prop="love"
            label="点赞数"
            width="120"
        />
        <el-table-column
            fixed="right"
            label="操作"
            width="160"
        >
            <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                >
                    编辑
                </el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                >
                    删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: {
        tableData: {
            type: Array,
            default: () => {
                return [
                    {
                        categroyVal: {
                            name: ''
                        }
                    }
                ]
            }
        },
        page: Number,
        loading: Boolean
    },
    methods: {
        handleDelete (index, row) {
            this.$emit('delete', row)
        },
        handleEdit (index, row) {
            console.log(this.page)
            this.$router.push({ path: '/edit/index', query: { ...row, page: this.$route.query.page || this.page } })
        }
    }
}
</script>

<style scoped>
.wxcode {
    width: 160px;
}
</style>