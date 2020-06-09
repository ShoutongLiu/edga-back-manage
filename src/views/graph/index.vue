<template>
    <div>
        <banner-header
            :url="uploadUrl"
            :time="uploadTime"
            @add="handleAdd"
        >
        </banner-header>
        <banner-table
            :tableData="data"
            :loading="isLoading"
            @delBanner="handleDel"
        ></banner-table>
    </div>
</template>

<script>
import bannerHeader from '@/components/banner/header'
import bannerTable from '@/components/banner/table'
import { getGraph, delGraph, addGraph } from '@/api/graph'
import url from '../../utils/uploadUrl'
export default {
    name: 'Banner',
    data () {
        return {
            uploadUrl: `${url}:3000/upload/graph`,
            uploadTime: 0,
            data: [],
            isLoading: false
        }
    },
    components: {
        bannerHeader,
        bannerTable
    },
    mounted () {
        this.graphData()
    },
    methods: {
        handleAdd (val) {
            addGraph(val).then(res => {
                if (res.data.isAdd) {
                    // 向子组件传递一个时间戳，保证是一个实时的更新
                    this.uploadTime = Date.now()
                    this.graphData()
                }
            })
        },
        graphData () {
            this.isLoading = true
            getGraph().then(res => {
                this.data = res.data.graphs
                this.isLoading = false
            })
        },
        // 删除
        handleDel (row) {
            const { _id, path } = row
            delGraph({ _id, url: path }).then(res => {
                if (!res.data.isDelete) {
                    this.$message.error('删除失败')
                }
                this.graphData()
                this.$message.success('删除成功')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
