<template>
    <div class="banner-container">
        <el-upload
            class="upload-demo"
            action="http://wutom.club:3000/upload/img"
            :on-remove="handleRemove"
            :on-preview="handlePreview"
            :file-list="fileList"
            list-type="picture"
        >
            <!-- <el-upload
            class="upload-demo"
            action="http:/127.0.0.1:3000/upload/img"
            :on-remove="handleRemove"
            :on-preview="handlePreview"
            :file-list="fileList"
            list-type="picture"
        > -->
            <el-button
                size="small"
                type="primary"
            >点击上传</el-button>
        </el-upload>
    </div>
</template>

<script>

import { getBanner, delBanner } from '@/api/banner'
export default {
    name: 'Banner',
    data () {
        return {
            fileList: []
        }
    },

    mounted () {
        getBanner().then(res => {
            console.log(res);
            const { data } = res
            this.fileList = data.banners
        })
    },
    methods: {
        handleRemove (file, fileList) {
            delBanner({ _id: file._id }).then(res => {
                console.log(res);
                if (res.data.isDelete) {
                    this.$message.success(res.data.message)
                } else {
                    this.$message.success('删除失败')
                }
            })
        },
        handlePreview (file) {
            console.log(file);
        }
    }
}
</script>

<style lang="scss" scoped>
.banner {
    &-container {
        margin: 30px;
    }
}
</style>
