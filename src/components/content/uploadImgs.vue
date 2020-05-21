<template>
    <div class="app-container">
        <el-upload
            ref="upload"
            action="http://127.0.0.1:3000/upload/picture"
            list-type="picture-card"
            multiple
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleAvatarSuccess"
            :file-list="picList"
            :auto-upload="false"
        >
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img
                width="100%"
                :src="dialogImageUrl"
                alt=""
            >
        </el-dialog>
        <div class="btn">
            <el-button
                type="primary"
                @click="uploadSubmit"
            >上传图片</el-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        picList: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data () {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
        }
    },
    methods: {
        handleRemove (file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleAvatarSuccess (res, file) {
            this.$emit('uploadSuccess', { pic: res.data.filename, ref: this.$refs.upload })
        },
        uploadSubmit () {
            this.$refs.upload.submit();
        }
    }
}
</script>

<style lang="scss" scoped>
>>> .el-upload {
    width: 100px;
    height: 100px;
    line-height: 100px;
}

>>> .el-upload-list__item {
    width: 100px;
    height: 100px;
}
.btn {
    margin-top: 40px;
}
</style>