<template>
    <div class="header">
        <el-main class="header-container">
            <el-upload
                :action="url"
                list-type="picture-card"
                ref="upload"
                :limit="1"
                :on-exceed="onExceed"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="handleAvatarSuccess"
                :auto-upload="false"
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
                    label="链接地址"
                    prop="url"
                >
                    <el-input
                        v-model="bannerForm.url"
                        placeholder="请输入链接地址"
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
        url: String,
        time: Number
    },
    data () {
        return {
            dialogImageUrl: '',
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
    watch: {
        time (val) {
            console.log(val, '000')
            if (val) {
                this.addMessage()
            }
        },
        // 监听属性变换向父组件发送事件
        'bannerForm.path': function (val) {
            if (val) {
                this.$emit('add', this.bannerForm)
            }
        },
        deep: true
    },
    methods: {
        onExceed () {
            this.$message.warning('只能上传一张图片')
        },
        // 删除
        handleRemove (file, fileList) {
            console.log(file, fileList)
        },

        // 上传成功
        handleAvatarSuccess (res, file) {
            this.bannerForm.path = res.data.filename
            this.bannerForm.filename = file.name
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url
        },
        onAdd (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 图片上传服务器
                    this.$refs.upload.submit()
                } else {
                    return false
                }
            })
        },
        addMessage () {
            this.bannerForm.url = ''
            this.$refs.upload.clearFiles()
            this.$message.success('添加成功')
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    border-bottom: 1px solid #ccc;
}

.header-container {
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