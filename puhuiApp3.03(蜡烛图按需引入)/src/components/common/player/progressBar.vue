<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn"
      @touchstart.prevent="progressTouchStart"
      @touchmove.prevent="progressTouchMove"
      @touchend.prevent="progressTouchEnd">
        <div class="progress-btn">
          <div class="inner-play-btn"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {prefixStyle} from './dom'
const progressBtnWidth = 15
const transform = prefixStyle('transform')

export default {
  name: 'progressBar',
  data () {
    return {
      newPercent: 0
    }
  },
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  created () {
    this.touch = {}
  },
  methods: {
    progressClick (e) {
      // 这个有 bug
      // this._offset(e.offsetX)
      const rect = this.$refs.progressBar.getBoundingClientRect()
      // rect.left 元素距离左边的距离
      // e.pageX 点击距离左边的距离
      const offsetWidth = e.pageX - rect.left
      // console.log(rect, e.pageX)
      this._offset(offsetWidth)
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
      const percent = this.$refs.progress.clientWidth / barWidth
      this.$emit('percentChangeEnd', percent)
    },
    progressTouchStart (e) {
      this.touch.initiated = true
      this.touch.startX = e.touches[0].pageX
      this.touch.left = this.$refs.progress.clientWidth
    },
    progressTouchMove (e) {
      if (!this.touch.initiated) {
        return
      }
      this._triggerPercent()
      const deltaX = e.touches[0].pageX - this.touch.startX
      const offsetWidth = Math.min(Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX)))
      this._offset(offsetWidth)
    },
    progressTouchEnd (e) {
      this.touch.initiated = false
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
      const percent = this.$refs.progress.clientWidth / barWidth
      this.$emit('percentChangeEnd', percent)
    },
    _triggerPercent () {
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
      const percent = this.$refs.progress.clientWidth / barWidth
      this.$emit('percentChange', percent)
    },
    _offset (offsetWidth) {
      this.$refs.progress.style.width = `${offsetWidth}px`
      this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px, 0, 0)`
    }
  },
  watch: {
    percent (newPercent) {
      if (newPercent >= 0 && !this.touch.initiated) {
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        
        if(newPercent<=1){
          const offsetWidth = newPercent * barWidth;
          var u = navigator.userAgent;
          if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
            this._offset(offsetWidth+5);
          }else{
            this._offset(offsetWidth);
          }
          
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "./variable";
.progress-bar {
  height: 20px;
  width: 100%;
  .bar-inner {
    position: relative;
    top: 10px;
    height: 3px;
    background: rgba(0, 0, 0, 0.3);
    width: 245px;
    .progress {
      position: absolute;
      height: 100%;
      background: @color-theme;
    }
    .progress-btn-wrapper {
      position: absolute;
      left: -8px;
      top: -13px;
      width: 30px;
      height: 30px;
      .progress-btn {
        position: relative;
        top: 7px;
        left: 5px;
        box-sizing: border-box;
        width: 15px;
        height: 15px;
        border: 4px solid @color-theme-l;
        border-radius: 50%;
        .inner-play-btn{
          position: absolute;
          top: -1px;
          left: -1px;
          height: 9px;
          width: 9px;
          border-radius: 50%;
          background: @color-theme;
        }
      }
    }
  }
}
</style>
