<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand >
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item>
            <b-btn v-b-modal.modal1>Sign Up</b-btn>
          </b-nav-item>
          <b-nav-item>
            <b-btn v-b-modal.modal2>Sign In</b-btn>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-navbar>
    <b-modal id="modal1">
      <p class="my-4">Hello from Up!</p>
    </b-modal>
    <b-modal id="modal2">
      <p class="my-4">Hello from In!</p>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    onLogout() {
      retrun;
    }
  }
};
</script>