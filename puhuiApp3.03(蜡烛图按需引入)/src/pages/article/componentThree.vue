
<template>
    <div>
        <v-financialArticle  :todaytimeone="this.$route.params.todaytime"
                    :userid="this.$route.params.userid"
                    :fieldid="this.$route.params.fieldid"
                    :openid="this.$route.params.openid"
                    :isShare="this.$route.params.isShare"
                    :fromopenid="this.$route.params.fromopenid"
                    :historyid="this.$route.params.historyid"
                    :twosharetime="this.$route.params.twosharetime"
                    :isWXApplet="this.$route.params.isWXApplet"
                    articletype="3">
        </v-financialArticle>
    </div>
</template>
<script>
import closeLoading from '../../mixins/closeLoading'
import financialArticle from '../../components/common/financialArticle'
//执行成功
const ERROR_CODE = "ERRORCODE0000";
export default {
    name: "componentThree",
    mixins:[closeLoading],
    components: {
        'v-financialArticle':financialArticle
    },
    data() {
        return {
            
        }
    },
    created(){
        
    },
    
}
</script>


