<template>
    <div>
        <add-input
            :info="locationInfo"
            @addEvent="handleAddLocation"
        ></add-input>
        <el-main>
            <data-table
                :tableData="tableData"
                :info="tableInfo"
                :loading="loading"
                @delete="handelDel"
                @edit="handleEdit"
            ></data-table>
            <page-tion
                :total="total"
                @getPage="handleGetPage"
            ></page-tion>
        </el-main>
        <el-dialog
            title="位置标签"
            :visible.sync="dialogFormVisible"
        >
            <el-form :model="row">
                <el-form-item label="标签名">
                    <el-input
                        v-model="row.name"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="URL">
                    <el-input
                        v-model="row.url"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div
                slot="footer"
                class="dialog-footer"
            >
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button
                    type="primary"
                    @click="confirmUpdate"
                >确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import addInput from '@/components/nav/addInput'
import dataTable from '@/components/nav/table'
import pageTion from '@/components/nav/page'
import { addLocation, getLocation, delLocation, updateLocation } from '@/api/location'
export default {
    data () {
        return {
            locationInfo: {
                label1: '位置名',
                placeholder1: '请输入位置名',
                label2: 'URL',
                placeholder2: '请输入URL',
                btnText: '添加'
            },
            tableInfo: {
                label: '位置名'
            },
            tableData: [],
            row: {},    // 单条表格数据
            total: 0,
            page: 1,
            dialogFormVisible: false,
            loading: false
        }
    },
    components: { addInput, dataTable, pageTion },
    mounted () {
        this.getData({ page: this.page })
    },
    methods: {
        // 添加标签
        handleAddLocation (locationInfo) {
            addLocation(locationInfo).then(res => {
                if (res.data.isAdd) {
                    this.$message.success('添加成功')
                    this.getData({ page: this.page })
                }
            })
        },
        // 获取当前页数
        handleGetPage (page) {
            this.page = page
            this.getData({ page: this.page })
        },

        // 请求数据
        getData (obj) {
            this.loading = true
            getLocation(obj).then(res => {
                this.tableData = res.data.location
                this.total = res.data.total
                this.loading = false
            })
        },
        // 删除一条数据
        handelDel (row) {
            delLocation({ _id: row._id }).then(res => {
                if (res.data.isDel) {
                    this.$message.success('删除成功')
                    // 当前页只有一条时，请求的页面减1
                    this.page = this.tableData.length === 1 && this.page !== 1 ? this.page - 1 : this.page
                    this.getData({ page: this.page })
                } else {
                    this.$message.error('删除失败')
                }
            })
        },
        // 编辑标签
        handleEdit (row) {
            this.row = row
            this.dialogFormVisible = true
        },
        confirmUpdate () {
            this.dialogFormVisible = false
            updateLocation(this.row).then(res => {
                if (res.data.isUpdate) {
                    this.$message.success('更新成功')
                } else {
                    this.$message.error('更新失败')
                }
            })
        }
    }
}

</script>

<style lang="scss" scoped>
>>> .el-header {
    margin-top: 20px;
}

>>> .el-dialog {
    width: 40%;
}
</style>
