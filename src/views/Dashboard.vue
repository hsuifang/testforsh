<template>
  <div id="nav">
    <router-link to="/admin/products">管理產品列表</router-link> |
    <router-link to="/admin/orders">管理訂單列表</router-link>
  </div>
  <h1>管理介面</h1>
  <router-view v-if="check"></router-view>
</template>

<script>
export default {
  data() {
    return {
      check: false,
    };
  },
  created() {
    console.log(this.$router);
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api).then((response) => {
      console.log('user/check', response);
      if (response.data.success) {
        this.check = true;
      } else {
        this.$router.push('/login');
      }
    });
  },
};
</script>
