<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="site.title"
          name="title"
        />
      </div>
      <br/>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="site.description"
          name="description"
        />
      </div>
      <br/>
      <button @click="saveSite" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newSite">Add</button>
    </div>
  </div>
</template>

<script>
import SiteDataService from "../services/SiteDataService";

export default {
  name: "add-site",
  data() {
    return {
      site: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveSite() {
      var data = {
        title: this.site.title,
        description: this.site.description
      };

      SiteDataService.create(data)
        .then(response => {
          this.site.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newSite() {
      this.submitted = false;
      this.site = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
