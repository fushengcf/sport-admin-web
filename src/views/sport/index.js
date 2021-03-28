import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'

export default {
  name: 'Major',

  mixins: [TablePageMixin],

  components: { ModalDrawer },

  data() {
    return {
      pageKey: 'sport',
      columns: [
        {
          label: '场地名称',
          prop: 'name',
          align: 'center'
        },

        {
          prop: 'price',
          label: '价格',
          align: 'center'
        },
        {
          prop: 'type',
          label: '运动类型',
          align: 'center'
        },
        {
          prop: 'venue',
          label: '场馆名称',
          align: 'center'
        },
        {
          label: '状态',
          align: 'center',
          scopedSlots: { customRender: 'status' },
        },
        {
          prop: 'createTime',
          label: '创建时间',
          align: 'center'
        }
      ],
      types:[],
      venues:[]
    }
  },

  mounted() {
    this.$getData()
    this.$api.type.getTypes().then(res => {
      this.types = res.data
    })

    this.$api.venue.getVenues().then(res => {
      this.venues = res.data
    })
  }
}
