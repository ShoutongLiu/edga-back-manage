<template>
    <el-container>
        <banner-header
            :url="uploadUrl"
            @add="handleAdd"
        ></banner-header>
    </el-container>
</template>

<script>
import bannerHeader from '@/components/banner/header'
import { getBanner, delBanner, addBanner } from '@/api/banner'
export default {
    name: 'Banner',
    data () {
        return {
            uploadUrl: 'http://127.0.0.1:3000/upload/banner',
            isUpload: false,
        }
    },
    components: {
        bannerHeader
    },
    methods: {
        handleAdd (val) {
            console.log(val);
            if (this.isUpload) {
                this.$message.warning('该图片已经存在')
                this.addMessage()
                return
            }
            addBanner(this.bannerForm).then(res => {
                console.log(res);
                if (res.data.isAdd) {
                    this.$message.success('添加成功')
                    this.addMessage()
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
