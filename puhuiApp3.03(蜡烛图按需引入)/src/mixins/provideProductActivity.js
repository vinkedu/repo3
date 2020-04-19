//Vuex公共状态动作
import { mapState } from 'vuex'
//执行成功
const ERROR_CODE = "ERRORCODE0000";
import sourceOS from '../mixins/sourceOS'
export default {
    mixins: [sourceOS],
    computed: {
        //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['productDataState','activityDataState','financeProductId','financeActivityId','productType']),
    },
    methods: {
        //模块控制
        ProductActivityState() {
            if (!this.productDataState && !this.activityDataState) {
              return 'error'
            } else {
              if (this.financeProductId != '0' && this.financeActivityId != '0') {
                var AllModuleId = this.financeProductId + '-' + this.financeActivityId;
                var moduleProductActivity = 'B' + '-' + 'L';
              }
              else if (this.financeProductId != '0' && this.financeActivityId == '0') {
                var AllModuleId = this.financeProductId;
                var moduleProductActivity = 'B';
              }
              else if (this.financeProductId == '0' && this.financeActivityId != '0') {
                var AllModuleId = this.financeActivityId;
                var moduleProductActivity = 'L';
              }
              else if (this.financeProductId == '0' && this.financeActivityId == '0') {
                var AllModuleId = '';
                var moduleProductActivity = '';
              }
              var ObjectModule = {
                filesId: AllModuleId,
                modules: moduleProductActivity,
                productType:this.productType
              }
              console.log(ObjectModule);
              return JSON.stringify(ObjectModule);
            }
          },
    },
    created() {
        
    },
    mounted() {
        window.ProductActivityState = this.ProductActivityState;
    }
}