import http from "../http-common";

class SiteDataService {
  getAll() {
    return http.get("/sites");
  }

  get(id) {
    return http.get(`/sites/${id}`);
  }

  create(data) {
    return http.post("/sites", data);
  }

  update(id, data) {
    return http.put(`/sites/${id}`, data);
  }

  delete(id) {
    return http.delete(`/sites/${id}`);
  }
}

export default new SiteDataService();
