import { ComponentCustomProperties } from '@vue/runtime-core'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    posts: Post[]
  }

  interface Post {
    id: number,
    createTime: string,
    text?: string,
    author: {
      firstname: string,
      lastname: string,
      avatar: string
    },
    media?: {
      type: "video" | "image",
      url: string
    }
    likes: string
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
