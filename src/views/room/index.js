import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'

export default {
  name: 'Room',

  mixins: [TablePageMixin],

  components: { ModalDrawer },

  data() {
    return {
      pageKey: 'room',
      columns: [
        {
          prop: 'houseNumber',
          label: '房间号',
          align: 'center'
        },
        {
          scopedSlots: { customRender: 'gradleText' },
          label: '年级',
          align: 'center'
        },
        {
          prop: 'building',
          label: '楼栋',
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
  methods: {
    initGradeText(id) {
      switch (id) {
        case 1: {
          return '大一'
          break
        }
        case 2: {
          return '大二'
          break
        }
        case 3: {
          return '大三'
          break
        }
        case 4: {
          return '大四'
          break
        }
      }


    }
  }
}

