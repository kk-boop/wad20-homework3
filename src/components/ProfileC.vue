<template>
  <div class="profile-container">
    <div class="profile-image">
      <img v-bind:src="profile.avatar" >
    </div>

    <div class="profile-name">
      <h2>{{ profile.firstname }} {{ profile.lastname }}</h2>
    </div>

    <div class="profile-actions">
      <button @click="followed = false" v-if="followed" class="follow-button followed">Followed</button>
      <button @click="followed = true" v-if="!followed" class="follow-button">Follow</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    profile: Object
  }
})
export default class ProfileC extends Vue {
  profile!: any
  followed=false
}
</script>

<style scoped>

button {
  ;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}
.profile {
  width: 45%;
  display: inline-block;
  border: 1px solid #dedede;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}
.profile img{
  width: 75px;
  height: 75px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.profile h2{
  font-size: 16px;
}

.follow-button{
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  border: 1px solid #82008f;
  border-radius: 4px;
  background-color: #82008f;
}

.follow-button.followed{
  background-color: #ffffff;
  color: #82008f;
}
</style>
