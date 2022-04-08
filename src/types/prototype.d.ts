import moment from 'moment'

declare module 'vue/types/vue' {
  interface Vue {
    $m: typeof moment
  }
}
