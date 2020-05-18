<template>
    <div class="app-container">
        <div class="avatar">
            <el-row>
                <el-col :span="24">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
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
                    ref="form"
                    :model="form"
                    label-width="80px"
                >

                    <el-col :span="8">
                        <el-form-item label="公司名称">
                            <el-input
                                placeholder="请输入公司名称"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="广告语">
                            <el-input
                                placeholder="请输入广告语"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="网站地址">
                            <el-input
                                placeholder="请输入网站地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="公司介绍">
                            <el-input
                                placeholder="请输入公司介绍"
                                type="textarea"
                                :rows="4"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="座机">
                            <el-input
                                placeholder="请输入座机号码"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="手机">
                            <el-input
                                placeholder="请输入手机号码"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="邮箱">
                            <el-input
                                placeholder="请输入邮箱地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="QQ">
                            <el-input
                                placeholder="请输入QQ号码"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="微信">
                            <div class="box">
                                <el-upload
                                    class="upload-wx"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="1"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList"
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
                        <el-form-item label="微博">
                            <el-input
                                placeholder="请输入微博主页地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="Pinterest">
                            <el-input
                                placeholder="请输入Pinterest主页地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="Twitter">
                            <el-input
                                placeholder="请输入Twitter主页地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="Behance">
                            <el-input
                                placeholder="请输入Behance主页地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="Facebook">
                            <el-input
                                placeholder="请输入Facebook主页地址"
                                v-model="form.name"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="添加擅长">
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
                        <el-form-item label="添加类型">
                            <el-select
                                v-model="value2"
                                multiple
                                placeholder="请选择"
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
                        <el-form-item label="添加位置">
                            <el-select
                                v-model="value2"
                                multiple
                                placeholder="请选择"
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
                        <el-form-item label="添加标签">
                            <el-select
                                v-model="value2"
                                multiple
                                placeholder="请选择"
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
                        <el-form-item label="有效时间">
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
                        <el-form-item label="选择展示">
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

        </div>
        <div class="btn-container">
            <el-button>重置</el-button>
            <el-button type="primary">保存</el-button>
        </div>
    </div>
</template>

<script>
// import formatTime from '@/utils/formatTime'
export default {
    data () {
        const startTime = new Date()
        const time = new Date().getTime() + 365 * 24 * 60 * 60 * 1000
        const endTime = new Date(time)
        return {
            fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
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
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            activeTime: [startTime, endTime],
            value2: [],
            value: []
        }
    },

    mounted () {
        console.log(this.activeTime);
    },
    methods: {
        handleChangeTime (time) {
            console.log(time[0]);
        },
        handleAvatarSuccess () { },
        beforeAvatarUpload () { },
        handleRemove (file, fileList) {
            console.log(file, fileList);
        },
        handlePreview (file) {
            console.log(file);
        },
        handleExceed (files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove (file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
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
</style>