import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'

export default {
  name: 'Major',

  mixins: [TablePageMixin],

  components: { ModalDrawer },

  data() {
    return {
      pageKey: 'major',
      columns: [
        {
          label: '专业名称',
          prop: 'name',
          align: 'center'
        },

        {
          prop: 'instructor',
          label: '辅导员',
          align: 'center'
        },
        {
          prop: 'phone',
          label: '联系电话',
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
  }
}
