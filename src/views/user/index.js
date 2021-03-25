import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'

export default {
  name: 'User',

  mixins: [TablePageMixin],

  components: { ModalDrawer },

  data() {
    return {
      pageKey: 'user',
      columns: [
        {
          label: '姓名',
          prop: 'name',
          align: 'center'
        },
        {
          prop: 'phone',
          label: '电话',
          align: 'center'
        },
        {
          prop: 'building',
          label: '负责楼栋',
          align: 'center'
        },
        {
          label: '操作',
          align: 'center',
          scopedSlots: { customRender: 'action' },
          width: 250
        }
      ],

    }
  },

  mounted() {
    this.$getData()
  }
}
