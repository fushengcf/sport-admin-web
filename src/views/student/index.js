import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'

export default {
  name: 'Student',

  mixins: [TablePageMixin],

  components: { ModalDrawer },

  data() {
    return {
      pageKey: 'student',
      columns: [
        {
          label: '学生姓名',
          prop: 'name',
          align: 'center'
        },
        {
          scopedSlots: { customRender: 'sex' },
          label: '性别',
          align: 'center'
        },
        {
          scopedSlots: { customRender: 'gradleText' },
          label: '年级',
          align: 'center'
        },
        {
          prop: 'houseNumber',
          label: '寝室号',
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
