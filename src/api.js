const playersAPI = {
  users: [
    {
      id: 1,
      name: "Alfonso Herrero",
      playerUrl: "/images/alfonso-herrero.jpg",
      minutes: 360,
      dorsal: "1",
      goals: "-8"
    },
    {
      id: 2,
      name: "Johannesson",
      playerUrl: "/images/johannesson.jpg",
      minutes: 270,
      dorsal: "2",
      goals: "0"
    },
    {
      id: 3,
      name: "Alanís",
      playerUrl: "/images/alanis.jpg",
      dorsal: "3",
      goals: "0"
    },
    {
      id: 5,
      name: "Forlín",
      playerUrl: "/images/forlin.jpg",
      dorsal: "5",
      goals: "0"
    },
    {
      id: 6,
      name: "Carlos Hernandéz",
      playerUrl: "/images/carlos-hernandez.jpg",
      dorsal: "6",
      goals: "0"
    },
    {
      id: 7,
      name: "Aarón",
      playerUrl: "/images/aaron.jpg",
      dorsal: "7",
      goals: "0"
    },
    {
      id: 8,
      name: "Folch",
      playerUrl: "/images/folch.jpg",
      dorsal: "8",
      goals: "0"
    },
    {
      id: 9,
      name: "Toché",
      playerUrl: "/images/toche.jpg",
      dorsal: "9",
      goals: "1"
    },
    {
      id: 10,
      name: "Saúl Berjón",
      playerUrl: "/images/saul-berjon.jpg",
      dorsal: "10",
      goals: "2"
    },
    {
      id: 11,
      name: "Bárcenas",
      playerUrl: "/images/barcenas.jpg",
      dorsal: "11",
      goals: "2"
    },
    {
      id: 13,
      name: "Champange",
      playerUrl: "/images/champagne.jpg",
      dorsal: "13",
      goals: "0"
    },
    {
      id: 14,
      name: "Boateng",
      playerUrl: "/images/boateng.jpg",
      dorsal: "14",
      goals: "0"
    },
    {
      id: 17,
      name: "Ibra",
      playerUrl: "/images/ibra.jpg",
      dorsal: "17",
      goals: "0"
    },
    {
      id: 18,
      name: "Bolaño",
      playerUrl: "/images/bolano.jpg",
      dorsal: "18",
      goals: "0"
    },
    {
      id: 19,
      name: "Carlos Martínez",
      playerUrl: "/images/carlos-martinez.jpg",
      dorsal: "19",
      goals: "0"
    },
    {
      id: 20,
      name: "Tejera",
      playerUrl: "/images/tejera.jpg",
      playerVideoUrl: "/videos/gol-tejera-1.mp4",
      dorsal: "20",
      goals: "1"
    },
    {
      id: 22,
      name: "Joselu",
      playerUrl: "/images/joselu.jpg",
      dorsal: "22",
      goals: "0"
    },
    {
      id: 23,
      name: "Mossa",
      playerUrl: "/images/mossa.jpg",
      dorsal: "23",
      goals: "0"
    },
    {
      id: 24,
      name: "Javi Muñoz",
      playerUrl: "/images/javi-munoz.jpg",
      dorsal: "24",
      goals: "0"
    }
  ],
  all: function() {
    return this.users;
  },
  get: function(id) {
    return this.users.find(u => u.id === id);
  }
};

export default playersAPI;
