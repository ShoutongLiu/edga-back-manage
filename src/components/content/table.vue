<template>
    <el-table
        v-loading="loading"
        :data="tableData"
        border
        style="width: 100%"
    >
        <el-table-column
            label="序号"
            type="index"
            width="50"
        />
        <el-table-column
            prop="companyName"
            label="公司名称"
            width="150"
        />
        <el-table-column
            prop="slogan"
            label="广告语"
            width="200"
        />
        <el-table-column
            prop="url"
            label="网址"
            width="200"
        />
        <el-table-column
            prop="Landline"
            label="座机"
            width="120"
        />
        <el-table-column
            prop="phone"
            label="手机"
            width="120"
        />
        <el-table-column
            prop="email"
            label="邮箱"
            width="120"
        />
        <el-table-column
            prop="qq"
            label="QQ"
            width="120"
        />
        <el-table-column
            label="微信"
            width="120"
        >
            <template slot-scope="scope">
                <el-popover
                    v-for="v in scope.row.wxchat"
                    :key="v.name"
                    placement="bottom-start"
                    width="220"
                    trigger="hover"
                >
                    <div>
                        <img
                            :src="v.url"
                            :alt="v.name"
                            class="wxcode"
                        >
                    </div>
                    <el-button
                        slot="reference"
                        class="wxname"
                        size="mini"
                    >
                        {{ v.name.split('.')[0] }}
                    </el-button>
                </el-popover>
            </template>
        </el-table-column>
        <el-table-column
            prop="weibo"
            label="微博"
            width="120"
        />
        <el-table-column
            prop="pinterest"
            label="Pinterest"
            width="120"
        />
        <el-table-column
            prop="twitter"
            label="Twitter"
            width="120"
        />
        <el-table-column
            prop="behance"
            label="Behance"
            width="120"
        />
        <el-table-column
            prop="facebook"
            label="Facebook"
            width="120"
        />
        <el-table-column
            label="擅长"
            width="200"
        >
            <template slot-scope="scope">
                <span>{{ scope.row.skiile.join('、') }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="分类"
            width="200"
        >
            <template slot-scope="scope">
                <span>{{ scope.row.categroyVal}}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="位置"
            width="200"
        >
            <template slot-scope="scope">
                <span>{{ scope.row.locationVal.join('、') }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="标签"
            width="200"
        >
            <template slot-scope="scope">
                <span>{{ scope.row.tagVal.join('、') }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="有效时间"
            width="350"
        >
            <template slot-scope="scope">
                <span>{{ new Date(scope.row.activeTime[0]) | format }}</span>
                <span> -></span>
                <span>{{ new Date(scope.row.activeTime[1]) | format }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="显示类型"
            width="120"
        >
            <template slot-scope="scope">
                <span>{{ scope.row.showType.join('、') }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="是否在首页显示"
            width="120"
        >
            <template slot-scope="scope">
                <span>{{ scope.row.showIndex ? '是' : '否' }}</span>
            </template>
        </el-table-column>
        <el-table-column
            prop="views"
            label="访问数"
            width="120"
        />
        <el-table-column
            prop="love"
            label="点赞数"
            width="120"
        />
        <el-table-column
            fixed="right"
            label="操作"
            width="160"
        >
            <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                >
                    编辑
                </el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                >
                    删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: {
        tableData: {
            type: Array,
            default: () => {
                return []
            }
        },
        page: Number,
        loading: Boolean
    },
    methods: {
        handleDelete (index, row) {
            this.$emit('delete', row)
        },
        handleEdit (index, row) {
            this.$router.push({ path: '/edit/index', query: { ...row, page: this.page } })
        }
    }
}
</script>

<style scoped>
.wxcode {
    width: 160px;
}
</style>