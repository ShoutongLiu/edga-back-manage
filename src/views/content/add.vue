<template>
    <div class="app-container">
        <div class="avatar">
            <el-row>
                <el-col :span="24">
                    <el-upload
                        ref="upload"
                        class="avatar-uploader"
                        action="http://127.0.0.1:3000/upload/businessavatar"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                    >
                        <el-avatar
                            :src="imageUrl"
                            :size="60"
                            class="avatar"
                        ></el-avatar>
                        <div class="tip">点击上传</div>
                    </el-upload>
                </el-col>
            </el-row>
        </div>
        <div class="add-form">
            <el-row>
                <el-form
                    ref="navForm"
                    :model="form"
                    label-width="80px"
                >

                    <el-col :span="8">
                        <el-form-item
                            label="公司名称"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入公司名称"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="广告语"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入广告语"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="网站地址"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入网站地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="公司介绍"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入公司介绍"
                                type="textarea"
                                :rows="4"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="座机"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入座机号码"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="手机"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入手机号码"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="邮箱"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入邮箱地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="QQ"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入QQ号码"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="微信"
                            prop="name"
                        >
                            <div class="box">
                                <el-upload
                                    class="upload-wx"
                                    ref="upload-wx"
                                    action="http://127.0.0.1:3000/upload/wxcode"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :on-success="handleCodeSuccess"
                                    :before-upload="beforeAvatarUpload"
                                    multiple
                                    :limit="1"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList"
                                    :auto-upload="false"
                                >
                                    <el-button
                                        size="small"
                                        type="primary"
                                    >点击上传</el-button>
                                </el-upload>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="微博"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入微博主页地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="Pinterest"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入Pinterest主页地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="Twitter"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入Twitter主页地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="Behance"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入Behance主页地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="Facebook"
                            prop="name"
                        >
                            <el-input
                                placeholder="请输入Facebook主页地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="添加擅长"
                            prop="name"
                        >
                            <el-select
                                v-model="value"
                                multiple
                                filterable
                                allow-create
                                default-first-option
                                placeholder="请选择擅长标签"
                            >
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="添加类别"
                            prop="name"
                        >
                            <el-select
                                v-model="categroyVal"
                                multiple
                                placeholder="请选择"
                                @change="handleCate"
                            >
                                <el-option
                                    v-for="item in categroy"
                                    :key="item._id"
                                    :label="item.name"
                                    :value="item.name"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="添加位置"
                            prop="name"
                        >
                            <el-select
                                v-model="value2"
                                multiple
                                placeholder="请选择"
                            >
                                <el-option
                                    v-for="item in location"
                                    :key="item._id"
                                    :label="item.name"
                                    :value="item.name"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="添加标签"
                            prop="name"
                        >
                            <el-select
                                v-model="tagVal"
                                multiple
                                placeholder="请选择"
                            >
                                <el-option
                                    v-for="item in tag"
                                    :key="item._id"
                                    :label="item.name"
                                    :value="item.name"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="有效时间"
                            prop="name"
                        >
                            <el-date-picker
                                v-model="activeTime"
                                format="yyyy-MM-dd HH:mm:ss"
                                type="datetimerange"
                                @change="handleChangeTime"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                            >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="选择展示"
                            prop="name"
                        >
                            <el-checkbox-group v-model="form.type">
                                <el-checkbox
                                    label="认证"
                                    name="type"
                                ></el-checkbox>
                                <el-checkbox
                                    label="推荐"
                                    name="type"
                                ></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-col>
                </el-form>
            </el-row>
        </div>
        <div class="imgs">
            <upload-pic @uploadSuccess="handleGetPic"></upload-pic>
        </div>
        <div class="btn-container">
            <el-button @click="resetForm('navForm')">重置</el-button>
            <el-button
                type="primary"
                @click="handelAddSave"
            >保存</el-button>
        </div>
    </div>
</template>

<script>
import { getCategroy } from '@/api/categroy'
import { getTag } from '@/api/tag'
import { getLocation } from '@/api/location'
import uploadPic from '@/components/content/uploadImgs'
// import formatTime from '@/utils/formatTime'
export default {
    data () {
        const startTime = new Date()
        const time = new Date().getTime() + 365 * 24 * 60 * 60 * 1000
        const endTime = new Date(time)
        return {
            fileList: [],
            imageUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            form: {
                name: '',
                type: ''
            },
            options: [{
                value: '商业标识',
                label: '商业标识'
            }, {
                value: '住宅标识',
                label: '住宅标识'
            }, {
                value: '酒店标识',
                label: '酒店标识'
            }],
            categroy: [],
            categroyVal: [],        // 选中的值
            location: [],
            locationVal: [],        // 选中的值
            tag: [],
            tagVal: [],        // 选中的值
            options: [],
            activeTime: [startTime, endTime],

            value: [],
            value2: []
        }
    },
    components: { uploadPic },
    mounted () {
        this.getCategroy(0)
        this.getLocation(0)
        this.getTag(0)
    },
    methods: {
        handleChangeTime (time) {
            console.log(time[0]);
        },
        handleAvatarSuccess (res, file) {
            this.imageUrl = res.data.filename
            console.log(res)
            console.log(file)
        },
        handleCodeSuccess (res, file) {
            const obj = { name: file.name, url: res.data.filename }
            this.fileList.push(obj)
            console.log(res)
            console.log(file)
        },
        handleRemove (file, fileList) {
            console.log(file, fileList);
        },
        handlePreview (file) {
            console.log(file);
        },
        handleExceed (files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },


        resetForm (formName) {
            console.log(this.$refs[formName]);
            this.$refs[formName].resetFields();
        },
        handleCate (cate) {
            console.log(cate);
        },
        // 获取类别
        getCategroy (page) {
            getCategroy({ page: page }).then(res => {
                this.categroy = res.data.categroy
            })
        },
        getLocation (page) {
            getLocation({ page: page }).then(res => {
                this.location = res.data.location
            })
        },
        getTag (page) {
            getTag({ page: page }).then(res => {
                this.tag = res.data.tag
            })
        },
        handelAddSave () {
            this.$refs.upload.submit();
        },
        // 获取上传的图片
        handleGetPic (pic) {
            console.log(pic);
        },
        beforeAvatarUpload (file) {
            console.log(file);
        }
    }
}
</script>

<style lang="scss" scoped>
.avatar-uploader {
    display: flex;
    justify-content: center;
}

.tip {
    color: #ddd;
    font-size: 12px;
}

.box {
    width: 90%;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
}

.add-form {
    margin: 20px 0;
}

>>> .el-input__inner,
.el-textarea {
    width: 90%;
}

>>> .upload-wx {
    width: 100%;
    display: flex;
    .el-upload-list {
        margin-left: 20px;
        flex: 1;
    }
}

>>> .el-select {
    width: 90%;
    .el-input__inner {
        width: 100%;
    }
}
.btn-container {
    display: flex;
    justify-content: center;
}
</style>