<template>
    <div class="app-container">
        <div class="btn">
            <el-button
                type="primary"
                @click="goAdd"
            >添加导航</el-button>
        </div>
        <nav-table
            :tableData="contentArr"
            :loading="loading"
            :page="page"
            @delete="handeleDelete"
        ></nav-table>
        <nav-page
            :total="total"
            @getPage="handleGetPage"
        ></nav-page>
        <el-dialog
            title="警告"
            :visible.sync="dialogVisible"
            width="30%"
        >
            <span>删除无法恢复，确定删除吗？</span>
            <span
                slot="footer"
                class="dialog-footer"
            >
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button
                    type="primary"
                    @click="deletaConfirm"
                >确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import navTable from '@/components/content/table'
import navPage from '@/components/nav/page'
import { getContent, delContent } from '@/api/content'
export default {
    data () {
        return {
            contentArr: [
                {
                    categroyVal: {
                        name: ''
                    }
                }
            ],
            loading: false,
            total: 1,
            page: 1,
            dialogVisible: false,
            row: {}
        }
    },
    components: { navTable, navPage },
    mounted () {
        if (this.$route.query.page) {
            this.getContent(parseInt(this.$route.query.page))
            return
        }
        this.getContent(this.page)
    },
    methods: {
        goAdd () {
            this.$router.push('/add/index')
        },
        getContent (page) {
            this.loading = true
            getContent({ page: page }).then(res => {
                this.contentArr = res.data.contents
                this.total = res.data.total
                this.loading = false
            })
        },
        handleGetPage (page) {
            console.log(page)
            this.page = page
            this.getContent(page)
        },
        // 删除提示
        handeleDelete (row) {
            this.row = row
            this.dialogVisible = true
        },

        // 确定删除
        deletaConfirm () {
            const { _id, avatarUrl, wxchat, pics } = this.row
            const wxcode = wxchat.length > 0 ? wxchat[0].url : ''
            const delObj = { _id, avatarUrl, wxcode, pics }
            delContent(delObj).then(res => {
                if (res.data.isDelete) {
                    this.$message.success('删除成功')
                    this.page = this.contentArr.length === 1 && this.page !== 1 ? this.page - 1 : this.page
                    this.getContent(this.page)
                    this.dialogVisible = false
                } else {
                    this.$message.error('删除失败')
                }
            })
        }
    }
}
</script>

<style scoped>
.btn {
    margin-bottom: 20px;
}
</style>

