<template>
  <h1>單一產品</h1>
  {{ product }}
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    console.log(this.$route.params.id); // 路由屬性 1
    console.log(this.$router); // 路由方法 2
    const { id } = this.$route.params;
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
    console.log(url);
    this.$http.get(url).then((res) => {
      this.product = res.data.product;
    });
  },
};
</script>
