<template>
  <div v-if="currentSite" class="edit-form">
    <h4>Site</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentSite.title"
        />
      </div>
      <br/>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentSite.description"
        />
      </div>      
      <br/>
      <div class="form-group">
        <label for="status">Status</label>
        <input type="text" class="form-control" id="status"
          v-model="currentSite.status"
        />
      </div>

    </form>
    <br/>


    <button class="badge badge-danger mr-2"
      @click="deleteSite"
    >
      Delete
    </button>

    &nbsp;

    <button type="submit" class="badge badge-success"
      @click="updateSite"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Site...</p>
  </div>
</template>

<script>
import SiteDataService from "../services/SiteDataService";

export default {
  name: "siteItem",
  data() {
    return {
      currentSite: null,
      message: ''
    };
  },
  methods: {
    getSite(id) {
      SiteDataService.get(id)
        .then(response => {
          this.currentSite = response.data.data.site;
          console.log(response.data.data.site);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentSite.id,
        title: this.currentSite.title,
        description: this.currentSite.description,
        published: status
      };

      SiteDataService.update(this.currentSite.id, data)
        .then(response => {
          this.currentSite.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateSite() {
      SiteDataService.update(this.currentSite.id, this.currentSite)
        .then(response => {
          console.log(response.data);
          this.message = 'Site was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteSite() {
      SiteDataService.delete(this.currentSite.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "sites" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getSite(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
