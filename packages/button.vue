<template>
  <button class="xs-button" :class="[`xs-button--${type}`]">
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: "XButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
  created() {
    console.log("this.type", this.type);
  },
};
</script>

<style lang="scss">
.xs-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  --webkit--appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.xs-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.xs-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.xs-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.xs-button--waring {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.xs-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}
</style>