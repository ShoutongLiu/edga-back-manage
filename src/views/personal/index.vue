<template>
    <div>
        <el-main>
            <div class="imgs">
                <el-upload
                    class="avatar-uploader"
                    action="http://127.0.0.1:3000/upload/avatar"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                >
                    <img
                        v-if="form.avatar"
                        :src="form.avatar"
                        class="avatar"
                    >
                    <i
                        v-else
                        class="el-icon-plus avatar-uploader-icon"
                    ></i>
                </el-upload>
                <div class="tip">点击头像重新上传</div>
            </div>
            <div class="username">
                <h2>用户名:{{form.username}}</h2>
            </div>
            <div class="btn-container">
                <el-button
                    type="primary"
                    icon="el-icon-edit"
                    @click="userEdit"
                >修改</el-button>
                <el-button
                    type="primary"
                    icon="el-icon-success"
                    @click="saveComfir"
                    :disabled="disabled"
                >保存</el-button>
            </div>
        </el-main>
        <el-dialog
            title="用户信息修改"
            :visible.sync="dialogFormVisible"
        >
            <el-form :model="form">
                <el-form-item label="用户名">
                    <el-input
                        v-model="editForm.username"
                        autocomplete="off"
                        placeholder="请输入用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input
                        v-model="editForm.password"
                        autocomplete="off"
                        placeholder="请输入新的密码"
                    ></el-input>
                </el-form-item>
            </el-form>
            <span class="updateTip">温馨提示：修改用户名或密码需要重新登录</span>
            <div
                slot="footer"
                class="dialog-footer"
            >
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button
                    type="primary"
                    @click="editComfir"
                >确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { update } from '@/api/user'
export default {
    data () {
        return {

            dialogFormVisible: false,
            disabled: true,
            form: {
                avatar: '',
                username: '',
                password: '',
                _id: null
            },
            editForm: {}
        }
    },
    mounted () {
        this.getUserInfo()
    },
    methods: {
        getUserInfo () {
            this.$store.dispatch('user/getInfo').then(res => {
                const { username, avatar, password, _id } = res
                this.form.username = username
                this.form.avatar = avatar
                this.form.password = password
                this.form._id = _id
            })
        },
        handleAvatarSuccess (res, file) {
            console.log(res, file);
            this.form.avatar = res.data.filename
            this.disabled = false
        },
        beforeAvatarUpload (file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        saveComfir () {
            update(this.form).then(res => {
                if (!res.data.isUpdate) {
                    this.$message.error('修改失败')
                }
                this.$message.success('修改成功')
                this.getUserInfo()
                this.disabled = true
            })
        },
        userEdit () {
            this.dialogFormVisible = true
            this.editForm = JSON.parse(JSON.stringify(this.form))
        },
        // 完成修改
        editComfir () {
            this.form.username = this.editForm.username
            this.form.password = this.editForm.password
            this.dialogFormVisible = false
            this.disabled = false
        }
    }
}
</script>

<style lang="scss" scoped>
>>> .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
.tip {
    margin-top: 20px;
    font-size: 14px;
    color: #ccc;
}

.username {
    margin-top: 50px;
}

.username > h2 {
    color: #333;
}

.btn-container {
    margin-top: 50px;
}

.updateTip {
    font-size: 12px;
    color: #bbb;
}
</style>