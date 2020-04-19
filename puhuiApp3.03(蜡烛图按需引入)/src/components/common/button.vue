<style scoped lang="less">
.yh-button {
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 4px;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 8px 20px;
    font-size: 14px;
}
.yh-button:active {
    opacity: 0.6;
}
.yh-button.yh-small{
	padding: 0 5px;
    font-size: 12px;
}
.yh-button.yh-big{
    font-size: 16px;
}
</style>
<template>
    <button
        class="yh-button"
        :disabled="disabled"
        @click.prevent.stop="onClick()"
        :style="styleObject"
    >
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "yhButton",
    data() {
        return {};
    },
    props: {
        //禁止
        disabled: {
            type: Boolean
        },
        //背景颜色
        bgColor: {
            type: String
        },
        //宽度
        width: {
            type: String
        },
        //高度
        height: {
            type: String
        }
    },
    computed: {
        styleObject: function() {
            return {
                width: this.width + "%",
                border: "1px solid " + this.bgColor,
                background: this.bgColor,
                height: this.height + "px"
            };
        }
    },
    methods: {
        onClick(event) {
            this.$emit("click", event);
        }
    },
    created() {},
    mounted() {}
};
</script>


