const playersAPI = {
  users: [
    {
      id: 1,
      name: "Alfonso Herrero",
      playerUrl: "/images/alfonso-herrero.jpg",
      minutes: 360,
      yellowCards: 0,
      redCards: 0,
      dorsal: "1",
      goals: "-8"
    },
    {
      id: 2,
      name: "Johannesson",
      playerUrl: "/images/johannesson.jpg",
      minutes: 330,
      yellowCards: 0,
      redCards: 0,
      dorsal: "2",
      goals: "0"
    },
    {
      id: 3,
      name: "Alanís",
      playerUrl: "/images/alanis.jpg",
      minutes: 0,
      yellowCards: 0,
      redCards: 0,
      dorsal: "3",
      goals: "0"
    },
    {
      id: 5,
      name: "Forlín",
      playerUrl: "/images/forlin.jpg",
      minutes: 27,
      yellowCards: 0,
      redCards: 0,
      dorsal: "5",
      goals: "0"
    },
    {
      id: 6,
      name: "Carlos Hernandéz",
      playerUrl: "/images/carlos-hernandez.jpg",
      minutes: 360,
      yellowCards: 1,
      redCards: 0,
      dorsal: "6",
      goals: "0"
    },
    {
      id: 7,
      name: "Aarón",
      playerUrl: "/images/aaron.jpg",
      minutes: 65,
      yellowCards: 0,
      redCards: 0,
      dorsal: "7",
      goals: "0"
    },
    {
      id: 8,
      name: "Folch",
      playerUrl: "/images/folch.jpg",
      minutes: 45,
      yellowCards: 0,
      redCards: 0,
      dorsal: "8",
      goals: "0"
    },
    {
      id: 9,
      name: "Toché",
      playerUrl: "/images/toche.jpg",
      minutes: 196,
      yellowCards: 0,
      redCards: 0,
      dorsal: "9",
      goals: "1"
    },
    {
      id: 10,
      name: "Saúl Berjón",
      playerUrl: "/images/saul-berjon.jpg",
      minutes: 345,
      yellowCards: 1,
      redCards: 0,
      dorsal: "10",
      goals: "2"
    },
    {
      id: 11,
      name: "Bárcenas",
      playerUrl: "/images/barcenas.jpg",
      minutes: 326,
      yellowCards: 1,
      redCards: 0,
      dorsal: "11",
      goals: "2"
    },
    {
      id: 13,
      name: "Champagne",
      playerUrl: "/images/champagne.jpg",
      yellowCards: 0,
      redCards: 0,
      minutes: 0,
      dorsal: "13",
      goals: "0"
    },
    {
      id: 14,
      name: "Boateng",
      playerUrl: "/images/boateng.jpg",
      minutes: 277,
      yellowCards: 0,
      redCards: 0,
      dorsal: "14",
      goals: "0"
    },
    {
      id: 17,
      name: "Ibra",
      playerUrl: "/images/ibra.jpg",
      minutes: 36,
      yellowCards: 0,
      redCards: 0,
      dorsal: "17",
      goals: "0"
    },
    {
      id: 18,
      name: "Bolaño",
      playerUrl: "/images/bolano.jpg",
      minutes: 360,
      yellowCards: 0,
      redCards: 0,
      dorsal: "18",
      goals: "0"
    },
    {
      id: 19,
      name: "Carlos Martínez",
      playerUrl: "/images/carlos-martinez.jpg",
      minutes: 0,
      yellowCards: 0,
      redCards: 0,
      dorsal: "19",
      goals: "0"
    },
    {
      id: 20,
      name: "Tejera",
      playerUrl: "/images/tejera.jpg",
      playerVideoUrl: "/videos/gol-tejera-1.mp4",
      minutes: 360,
      yellowCards: 2,
      redCards: 0,
      dorsal: "20",
      goals: "1"
    },
    {
      id: 22,
      name: "Joselu",
      playerUrl: "/images/joselu.jpg",
      minutes: 144,
      yellowCards: 1,
      redCards: 0,
      dorsal: "22",
      goals: "0"
    },
    {
      id: 23,
      name: "Mossa",
      playerUrl: "/images/mossa.jpg",
      minutes: 360,
      yellowCards: 1,
      redCards: 0,
      dorsal: "23",
      goals: "0"
    },
    {
      id: 24,
      name: "Javi Muñoz",
      playerUrl: "/images/javi-munoz.jpg",
      minutes: 329,
      yellowCards: 1,
      redCards: 0,
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
