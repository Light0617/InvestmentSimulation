<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <hr>
        <p>Your Funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return 0;
    }
  }
};
</script>
