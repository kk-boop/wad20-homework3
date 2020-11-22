<template>
  <div class="browse">
    <div v-for='profile in profiles' v-bind:key="profile.id" class="profile">
      <ProfileC v-bind:profile="profile"></ProfileC>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ProfileC from '@/components/ProfileC.vue' // @ is an alias to /src

@Options({
  computed: {
    profiles() {
      return this.$store.state.profiles
    }
  },
  mounted() {
    this.$store.dispatch('getProfiles')
  },
  components: {
    ProfileC
  }
})
export default class Home extends Vue {
}
</script>
<style scoped lang="scss">
.browse {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
a {
  color: #42b983;
}
.profile {
  width: 45%;
  display: inline-block;
  border: 1px solid #dedede;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}
</style>
