import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'

export default {
  name: 'Major',

  mixins: [TablePageMixin],

  components: { ModalDrawer },

  data() {
    return {
      pageKey: 'venue',
      columns: [
        {
          label: '场馆名称',
          prop: 'name',
          align: 'center'
        },

        {
          prop: 'lat',
          label: '经度',
          align: 'center'
        },
        {
          prop: 'lng',
          label: '纬度',
          align: 'center'
        },
        {
          prop: 'phone',
          label: '联系电话',
          align: 'center'
        },
        {
          prop: 'address',
          label: '场馆地址',
          align: 'center'
        },

        {
          prop: 'createTime',
          label: '创建时间',
          align: 'center'
        },
        {
          label: '操作',
          align: 'center',
          scopedSlots: { customRender: 'action' },
          width: 250
        }
      ]
    }
  },

  mounted() {
    this.$getData()
  },
  methods:{
    resetPw(id){
      this.$api.venue.resetPassword(id).then(res => {
        this.$message({
          message: '密码重置成功',
          type: 'success'
        })
      })
    }
  }
}
