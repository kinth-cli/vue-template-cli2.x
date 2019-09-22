<template>
  <div>list</div>
</template>
<script>
import {userListApi} from '../../api/index'
export default {
  name: 'list',
  mounted () {
    console.log(userListApi)
  }
}
</script>
