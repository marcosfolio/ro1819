const videosAPI = {
  videos: [
    {
      id: 1,
      videoUrl: "/videos/gol-tejera-1.mp4"
    },
    {
      id: 2,
      videoUrl: "/videos/gol-tejera-1.mp4"
    }
  ],
  all: function() {
    return this.videos;
  },
  get: function(id) {
    return this.videos.find(v => v.id === id);
  }
};

export default videosAPI;
