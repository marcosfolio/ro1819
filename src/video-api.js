const videosAPI = {
  videos: [
    {
      id: 1,
      scorer: "Toché",
      match: "Real Oviedo 1 - U.D. Extremadura 1",
      videoUrl: "/videos/gol-toche-1.mp4"
    },
    {
      id: 2,
      scorer: "Tejera",
      match: "Cádiz 1 - Real Oviedo 1",
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
