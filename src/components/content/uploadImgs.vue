<template>
    <div class="app-container">
        <el-upload
            ref="upload"
            :action="`${url}:3000/upload/picture`"
            list-type="picture-card"
            multiple
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleAvatarSuccess"
            :before-upload="handleBefore"
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
import uploadPic from '@/components/content/uploadImgs'
import Compressor from 'compressorjs'
import url from '../../utils/uploadUrl'
import { delPic } from '@/api/img'
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
            url: url
        }
    },
    methods: {
        // 上传前压缩
        handleBefore (file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            // 大于2M的图片进行压缩
            if (!isLt2M) {
                return new Promise(reslove => {
                    new Compressor(file, {
                        convertSize: 3000000,
                        success (res) {
                            reslove(res)
                        },
                        error (err) {
                            console.log(err.message);
                        },
                    });
                })
            }
        },
        handleRemove (file, fileList) {
            let filename = ''
            if (file.response) {
                filename = file.response.data.filename
            } else {
                filename = file.url
            }
            delPic({ url: filename }).then(res => {
                if (!res.data.isDelete) {
                    this.$message.error('删除失败')
                } else {
                    this.$message.success(res.data.message)
                }
            })
            this.$emit('removeImg', fileList)
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        handleAvatarSuccess (res, file) {
            console.log(res);
            this.$emit('uploadSuccess', { pic: res.data.filename, ref: this.$refs.upload })
        },
        uploadSubmit () {
            this.$refs.upload.submit()
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