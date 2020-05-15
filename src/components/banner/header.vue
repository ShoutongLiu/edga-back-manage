<template>
    <div class="header">
        <el-main>
            <el-upload
                :action="url"
                list-type="picture-card"
                ref="upload"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="handleAvatarSuccess"
            >
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-form
                :inline="true"
                :model="bannerForm"
                class="form-inline"
                :rules="rules"
                ref="ruleForm"
            >
                <el-form-item
                    label="URL"
                    prop="url"
                >
                    <el-input
                        v-model="bannerForm.url"
                        placeholder="请输入url"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="onAdd('ruleForm')"
                    >添加</el-button>
                </el-form-item>
            </el-form>
        </el-main>

    </div>
</template>

<script>
export default {
    props: {
        url: String
    },
    data () {
        return {
            dialogImageUrl: '',
            isShow: false,
            isUpload: false,
            bannerForm: {
                url: '',
                path: '',
                filename: ''
            },
            rules: {
                url: [
                    { required: true, message: '请输入URL', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        // 删除
        handleRemove (file, fileList) {
            // console.log(file);
            let elupload = document.querySelector('.el-upload')
            elupload.style.display = 'inline-block'
            // delBanner({ _id: file._id, url: file.url }).then(res => {
            //     console.log(res);
            //     if (res.data.isDelete) {
            //         this.$message.success(res.data.message)
            //     } else {
            //         this.$message.success('删除失败')
            //     }
            // })
        },

        // 上传成功
        handleAvatarSuccess (res, file) {
            if (res.data.isUpload) {
                this.isUpload = true
            } else {
                this.isUpload = false
                this.bannerForm.path = res.data.filename
                this.bannerForm.filename = file.name
            }
            console.log(res);
            let elupload = document.querySelector('.el-upload')
            elupload.style.display = 'none'
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url;
        },
        onAdd (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {

                    this.$emit('add', this.bannerForm)
                } else {
                    return false;
                }
            })
        },
        addMessage () {
            this.bannerForm.url = ''
            this.$refs.upload.clearFiles();
            let elupload = document.querySelector('.el-upload')
            elupload.style.display = 'inline-block'
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    border-bottom: 1px solid #ccc;
}

.el-main {
    display: flex;
    align-items: center;
}

.el-form {
    margin-left: 50px;
}

>>> .el-upload--picture-card {
    width: 120px;
    height: 120px;
    line-height: 120px;
}

>>> .el-form--inline .el-form-item__content {
    width: 400px;
}

>>> .el-upload-list--picture-card .el-upload-list__item {
    width: 120px;
    height: 120px;
}

.is-none {
    display: none;
}
</style>