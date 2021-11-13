<template>
  <div class="list row">
    <div class="col-md-8">
    </div>
    <div class="col-md-6">
      <h4>Sites List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(site, index) in sites"
          :key="index"
          @click="setActiveSite(site, index)"
        >
          {{ site.title }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentSite">
        <h4>Site</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentSite.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentSite.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentSite.status }}
        </div>
        <br/>
        <router-link :to="'/sites/' + currentSite.id" class="badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Site...</p>
      </div>
    </div>
  </div>
</template>

<script>
import SiteDataService from "../services/SiteDataService";

export default {
  name: "sites-list",
  data() {
    return {
      sites: [],
      currentSite: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveSites() {
      SiteDataService.getAll()
        .then(response => {
          this.sites = response.data.data.sites;
          console.log(response.data.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveSites();
      this.currentSite = null;
      this.currentIndex = -1;
    },

    setActiveSite(site, index) {
      this.currentSite = site;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveSites();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
