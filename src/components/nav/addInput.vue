<template>
    <el-header class="header">
        <el-form
            :inline="true"
            :model="formTag"
            class="form-inline"
            :rules="rules"
            ref="ruleForm"
        >
            <el-form-item
                :label="info.label"
                prop="name"
            >
                <el-input
                    v-model="formTag.name"
                    :placeholder="info.placeholder"
                ></el-input>
            </el-form-item>
            <el-form-item
                label="URL"
                prop="url"
            >
                <el-input
                    v-model="formTag.url"
                    placeholder="请输入URL"
                    @keyup.enter.native="onAdd('ruleForm')"
                ></el-input>
            </el-form-item>
            <el-form-item
                v-if="info.show"
                class="switch"
            >
                <el-switch
                    v-model="showIndex"
                    active-text="在首页显示"
                    @change="handleShowChange"
                >
                </el-switch>
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    @click="onAdd('ruleForm')"
                >添加</el-button>
            </el-form-item>
        </el-form>

    </el-header>
</template>

<script>
export default {
    props: {
        info: {
            type: Object
        }
    },
    data () {
        return {
            showIndex: false,
            formTag: {
                name: '',
                url: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入标签名', trigger: 'blur' }
                ],
                url: [
                    { required: true, message: '请输入URL', trigger: 'blur' }
                ]
            }
        }
    },

    methods: {
        onAdd (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.info.show) {
                        this.formTag.showIndex = this.showIndex
                    }
                    this.$emit('addEvent', { form: this.formTag, clear: this.$refs[formName] })
                } else {
                    return false
                }
            })
        },
        handleShowChange (val) {
            this.showIndex = val
        }
    }
}
</script>

<style lang="scss" scoped>
>>> .el-header {
    margin-top: 20px;
}

>>> .el-form-item {
    width: 20%;
}

>>> .el-form-item__content {
    width: 80%;
}

.el-switch {
    margin-left: 60px;
}
</style>