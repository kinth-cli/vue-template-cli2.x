<template>
  <div>list > detail</div>
</template>
<script>
import {userDetailApi} from '../../api/index'
export default {
  name: 'list',
  mounted () {
    console.log(userDetailApi)
  }
}
</script>
