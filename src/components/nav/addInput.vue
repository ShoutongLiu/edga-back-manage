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
                :label="info.label1"
                prop="name"
            >
                <el-input
                    v-model="formTag.name"
                    :placeholder="info.placeholder1"
                ></el-input>
            </el-form-item>
            <el-form-item
                :label="info.label2"
                prop="url"
            >
                <el-input
                    v-model="formTag.url"
                    :placeholder="info.placeholder2"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    @click="onAdd('ruleForm')"
                >{{info.btnText}}</el-button>
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
                    this.$emit('addEvent', { form: this.formTag, clear: this.$refs[formName] })
                } else {
                    console.log('error submit!!');
                    return false;
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
</style>