import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'

export default {
  name: 'Instructor',

  mixins: [TablePageMixin],

  components: { ModalDrawer },

  data() {
    return {
      pageKey: 'instructor',
      columns: [
        {
          label: '辅导员姓名',
          prop: 'name',
          align: 'center'
        },
        {
          prop: 'phone',
          label: '联系方式',
          align: 'center'
        },
        {
          prop: 'major',
          label: '专业',
          align: 'center'
        },
        {
          scopedSlots: { customRender: 'gradleText' },
          label: '年级',
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
