<!--
 * @Author: your name
 * @Date: 2020-05-11 17:24:27
 * @LastEditTime: 2020-05-11 17:44:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \edu-kid-face-weapp-deve:\外接项目\edga-back-manage\src\layout\components\Sidebar\Link.vue
 -->

<template>
    <!-- eslint-disable vue/require-component-is -->
    <component v-bind="linkProps(to)">
        <slot />
    </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
    props: {
        to: {
            type: String,
            required: true
        }
    },
    methods: {
        linkProps (url) {
            if (isExternal(url)) {
                return {
                    is: 'a',
                    href: url,
                    target: '_blank',
                    rel: 'noopener'
                }
            }
            return {
                is: 'router-link',
                to: url
            }
        }
    }
}
</script>
