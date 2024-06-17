import { Configuration, NotesApi } from "./.generated";

const configuration = new Configuration({
  get basePath() {
    return 'https://localhost:8787'
  },
  middleware: [],
});


const api = {
  notes: new NotesApi(configuration)
};

export default api;
