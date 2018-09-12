const playersAPI = {
  users: [
    {
      id: 1,
      name: "Alfonso Herrero",
      dorsal: "1",
      goals: "-1"
    },
    {
      id: 2,
      name: "Johannesson",
      dorsal: "2",
      goals: "0"
    },
    {
      id: 5,
      name: "Forlín",
      dorsal: "5",
      goals: "0"
    },
    {
      id: 6,
      name: "Carlos Hernandéz",
      dorsal: "6",
      goals: "0"
    },
    {
      id: 7,
      name: "Aarón",
      dorsal: "7",
      goals: "0"
    },
    {
      id: 8,
      name: "Folch",
      dorsal: "8",
      goals: "0"
    },
    {
      id: 9,
      name: "Toché",
      dorsal: "9",
      goals: "1"
    },
    {
      id: 10,
      name: "Saúl Berjón",
      dorsal: "10",
      goals: "11"
    },
    {
      id: 11,
      name: "Bárcenas",
      dorsal: "11",
      goals: "2"
    },
    {
      id: 13,
      name: "Champange",
      dorsal: "13",
      goals: "0"
    },
    {
      id: 14,
      name: "Boateng",
      dorsal: "14",
      goals: "0"
    },
    {
      id: 17,
      name: "Ibra",
      dorsal: "17",
      goals: "0"
    },
    {
      id: 18,
      name: "Bolaño",
      dorsal: "18",
      goals: "0"
    },
    {
      id: 19,
      name: "Carlos Martínez",
      dorsal: "19",
      goals: "0"
    },
    {
      id: 20,
      name: "Tejera",
      dorsal: "20",
      goals: "0"
    },
    {
      id: 22,
      name: "Joselu",
      dorsal: "22",
      goals: "0"
    },
    {
      id: 23,
      name: "Mossa",
      dorsal: "23",
      goals: "0"
    },
    {
      id: 24,
      name: "Javi Muñoz",
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
