<template>
  <div class="hello">
    <!--<img src="../assets/logo.png">-->
    <!--<h1>{{ msg }}</h1>-->
    <h2>测试首页</h2>
    <ul>
      <li>
        <a href="http://localhost:10010/api/user/findUser/1">userTTT</a>
      </li>
    </ul>
    <el-row>
      <el-button @click="test(1)">默认按钮</el-button>
      <el-button type="primary" @click="test(2)">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    test (a) {
      // this.$http({
      //   url: '/api/user/findUser/1',
      //   method: 'post',
      //   params: {}
      // }).then(res => {
      //   console.log(res)
      // })
      if (a === 1) {
        this.$http.get('/api/user/findUser/zhangsan')
      } else {
        this.$http.get('http://localhost:10010/api/user/findUser/1')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
