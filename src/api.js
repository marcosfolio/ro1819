const playersAPI = {
  users: [
    {
      id: 1,
      name: "Alfonso Herrero",
      dorsal: "1"
    },
    {
      id: 2,
      name: "Johannesson",
      dorsal: "2"
    },
    {
      id: 5,
      name: "Forlín",
      dorsal: "5"
    },
    {
      id: 6,
      name: "Carlos Hernandéz",
      dorsal: "6"
    },
    {
      id: 7,
      name: "Aarón",
      dorsal: "7"
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
