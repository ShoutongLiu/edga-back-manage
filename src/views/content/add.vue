<template>
    <div class="app-container">
        <div class="avatar">
            <el-row>
                <el-col :span="24">
                    <el-upload
                        ref="uploadAvatar"
                        class="avatar-uploader"
                        :action="`${uploadUrl}:3000/upload/businessavatar`"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="handleBefore"
                    >
                        <el-avatar
                            :src="form.avatarUrl"
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
                    :rules="rules"
                >

                    <el-col :span="8">
                        <el-form-item
                            label="公司名称"
                            prop="companyName"
                        >
                            <el-input
                                placeholder="请输入公司名称"
                                v-model="form.companyName"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="认证"
                            prop="slogan"
                        >
                            <el-input
                                placeholder="请输入认证信息"
                                v-model="form.slogan"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="网站地址"
                            prop="url"
                        >
                            <el-input
                                placeholder="请输入网站地址"
                                v-model="form.url"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="公司介绍"
                            prop="describe"
                        >
                            <el-input
                                placeholder="请输入公司介绍"
                                type="textarea"
                                :rows="4"
                                v-model="form.describe"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="座机"
                            prop="Landline"
                        >
                            <el-input
                                placeholder="请输入座机号码"
                                v-model="form.Landline"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="手机"
                            prop="phone"
                        >
                            <el-input
                                placeholder="请输入手机号码"
                                v-model="form.phone"
                                maxlength="11"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="邮箱"
                            prop="email"
                        >
                            <el-input
                                placeholder="请输入邮箱地址"
                                v-model="form.email"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="QQ"
                            prop="qq"
                        >
                            <el-input
                                placeholder="请输入QQ号码"
                                v-model="form.qq"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="微信"
                            prop="wxchat"
                        >
                            <div class="box">
                                <el-upload
                                    class="upload-wx"
                                    ref="uploadWx"
                                    :action="`${uploadUrl}:3000/upload/wxcode`"
                                    :on-remove="handleRemoveWx"
                                    :on-success="handleCodeSuccess"
                                    multiple
                                    :limit="1"
                                    :file-list="form.wxchat"
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
                            prop="weibo"
                        >
                            <el-input
                                placeholder="请输入微博主页地址"
                                v-model="form.weibo"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="Pinterest"
                            prop="pinterest"
                        >
                            <el-input
                                placeholder="请输入Pinterest主页地址"
                                v-model="form.pinterest"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="Twitter"
                            prop="twitter"
                        >
                            <el-input
                                placeholder="请输入Twitter主页地址"
                                v-model="form.twitter"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="Behance"
                            prop="behance"
                        >
                            <el-input
                                placeholder="请输入Behance主页地址"
                                v-model="form.behance"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="Facebook"
                            prop="facebook"
                        >
                            <el-input
                                placeholder="请输入Facebook主页地址"
                                v-model="form.facebook"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="添加擅长"
                            prop="skiile"
                        >
                            <el-select
                                v-model="tempSkill"
                                multiple
                                placeholder="请选择擅长标签"
                                @change="handleSkillChange"
                            >
                                <el-option
                                    v-for="item in skilleds"
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
                            label="添加类别"
                            prop="categroyVal"
                        >
                            <el-select
                                v-model="tempCate"
                                placeholder="请选择"
                                @change="handleCateChange"
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
                            prop="locationVal"
                        >
                            <el-select
                                v-model="tempLocation"
                                multiple
                                placeholder="请选择"
                                @change="handleLocationChange"
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
                            prop="tagVal"
                        >
                            <el-select
                                v-model="tempTag"
                                multiple
                                placeholder="请选择"
                                @change="handleTagChange"
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
                            prop="activeTime"
                        >
                            <el-date-picker
                                v-model="form.activeTime"
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
                    <el-col :span="5">
                        <el-form-item
                            label="选择展示"
                            prop="showType"
                        >
                            <el-checkbox-group
                                v-model="form.showType"
                                @change="handleCheckChange"
                            >
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
                    <el-col :span="3">
                        <el-switch
                            v-model="form.showIndex"
                            active-text="在首页展示"
                        >
                        </el-switch>
                    </el-col>
                </el-form>
            </el-row>
        </div>
        <div class="imgs">
            <upload-pic
                @uploadSuccess="handleGetPic"
                @removeImg="handleRemoveImg"
            ></upload-pic>
        </div>
        <div class="btn-container">
            <el-button @click="resetForm('navForm')">重置</el-button>
            <el-button
                type="primary"
                @click="handelAddSave"
            >添加</el-button>
        </div>
    </div>
</template>

<script>
import { getCategroy } from '@/api/categroy'
import { getTag } from '@/api/tag'
import { getLocation } from '@/api/location'
import { getField } from '@/api/field'
import { addContent } from '@/api/content'
import { delWx } from '@/api/img'
import uploadPic from '@/components/content/uploadImgs'
import Compressor from 'compressorjs'
import url from '../../utils/uploadUrl'
const imageUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
export default {
    data () {
        const startTime = new Date()
        const time = new Date().getTime() + 365 * 24 * 60 * 60 * 1000
        const endTime = new Date(time)
        return {
            fileList: [],
            uploadUrl: url,
            tempLocation: [],
            tempTag: [],
            tempSkill: [],
            tempCate: '',
            form: {
                avatarUrl: imageUrl,
                companyName: '',
                slogan: '',
                url: '',
                describe: '',
                Landline: '',
                phone: '',
                email: '',
                qq: '',
                wxchat: [],
                weibo: '',
                pinterest: '',
                twitter: '',
                behance: '',
                facebook: '',
                skiile: [],
                categroyVal: {
                    name: '',
                    url: ''
                },
                locationVal: [],
                tagVal: [], // 选中的值
                activeTime: [startTime, endTime],
                showType: [],
                showIndex: false,
                pics: [],
                views: 0,
                love: 0,
                commitTime: 0, // 控制浏览次数提交时间
                loveTime: 0, // 点击爱心提交时间
                surplusTime: 0 // 剩余时间，控制模块的显示
            },
            tempPic: [],
            skilleds: [],
            categroy: [],
            location: [],
            tag: [],
            ref: {},
            rules: {
                phone: [
                    { min: 11, max: 11, message: '手机号码为11位数', trigger: 'blur' }
                ],
                email: [
                    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                ]
            }
        }
    },
    components: { uploadPic },
    mounted () {
        this.getCategroy(0)
        this.getLocation(0)
        this.getField(0)
        this.getTag(0)
    },
    methods: {
        // 获取有效时间
        handleChangeTime (time) {
            this.form.activeTime = time
        },

        // 获取头像path
        handleAvatarSuccess (res, file) {
            console.log(file);
            this.form.avatarUrl = res.data.filename
        },
        // 获取微信图片
        handleCodeSuccess (res, file) {
            const obj = { name: file.name, url: res.data.filename }
            this.form.wxchat.push(obj)
        },
        handleRemoveWx (file, fileList) {
            delWx({ url: file.url }).then(res => {
                if (!res.data.isDelete) {
                    this.$message.error('删除失败')
                } else {
                    this.form.wxchat = []
                    this.$message.success(res.data.message)
                }
            })
        },
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
        // 选择类别
        handleCateChange (cate) {
            this.tempCate = cate
            let obj = this.categroy.find(v => {
                if (v.name === cate) {
                    return v
                }
            })
            this.form.categroyVal = obj
        },
        handleLocationChange (location) {
            this.tempLocation = location
            let locationArr = []
            this.tempLocation.forEach(l => {
                this.location.forEach(v => {
                    if (v.name === l) {
                        locationArr.push(v)
                    }
                })
            })
            this.form.locationVal = locationArr
        },

        handleTagChange (tag) {
            this.tempTag = tag
            let tagArr = []
            this.tempTag.forEach(l => {
                this.tag.forEach(v => {
                    if (v.name === l) {
                        tagArr.push(v)
                    }
                })
            })
            this.form.tagVal = tagArr
        },

        handleSkillChange (skill) {
            this.tempSkill = skill
            let SkillArr = []
            this.tempSkill.forEach(l => {
                this.skilleds.forEach(v => {
                    if (v.name === l) {
                        SkillArr.push(v)
                    }
                })
            })
            this.form.skiile = SkillArr
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
        getField (page) {
            getField({ page: page }).then(res => {
                this.skilleds = res.data.field
            })
        },
        getTag (page) {
            getTag({ page: page }).then(res => {
                this.tag = res.data.tag
            })
        },
        handleCheckChange (checkVal) {
            this.form.showType = checkVal
        },

        // 获取上传的图片
        handleGetPic (pic) {
            this.tempPic.push(pic.pic)
            this.ref = pic.ref
        },
        // 删除图片
        handleRemoveImg (list) {
            this.tempPic = []
            this.form.pics = []
            if (list.length > 0) {
                list.forEach(v => {
                    if (v.response) {
                        this.form.pics.push(v.response.data.filename)
                    } else {
                        this.form.pics.push(v.url)
                    }
                })
            }
        },
        // 排序
        compare (property) {
            return function (a, b) {
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2
            }
        },
        // 对图片进行排序
        addNewPic () {
            if (this.tempPic.length > 0) {
                this.tempPic = this.tempPic.sort(this.compare('name'))
                this.tempPic.forEach(v => {
                    this.form.pics.push(v.filePath)
                })
            }
        },
        // 重置表单
        resetForm (formName) {
            this.$refs[formName].resetFields()
        },
        handelAddSave () {
            this.addNewPic()
            console.log('00000000', this.form.pics);
            addContent(this.form).then(res => {
                if (!res.data.isAdd) {
                    this.$message.error('添加失败')
                    return false
                }
                this.$message.success('添加成功')
                this.resetForm('navForm') // 重置表单
                this.tempLocation = []
                this.tempTag = []
                this.tempPic = []
                this.tempCate = ''
                this.tempSkill = []
                this.form.categroyVal = {}
                this.form.avatarUrl = imageUrl
                this.form.wxchat = []
                this.form.pics = []
                this.form.showIndex = false
                this.$refs.uploadAvatar.clearFiles()
                this.ref.clearFiles()
                this.form.showIndex = false
            })
        },
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
>>> .el-switch {
    margin-top: 8px;
}
</style>