<template>
  <div>
    <form @submit.prevent="$emit('submitted', username)">
      <el-input
        placeholder="Pesquise o usuario"
        v-model="username"
        class="search-form__input">

        <el-button
          class="search-form__button"
          native-type="submit"
          slot="append"
          icon="el-icon-search">
        </el-button>
      </el-input>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserSearchForm',
  data() {
    return {
      username: ''
    }
  }
}
</script>