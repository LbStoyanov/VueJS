const app = Vue.createApp({
  data() {
    return {
      friends: [
        
        {
          id: "Goshko",
          name: "Goshko Loshiq",
          phone: "5645645645456",
          email: "Peshko@Dobriq.com",
        },
        {
          id: "Mishko",
          name: "Mishko Sredniq",
          phone: "5645645645456",
          email: "Peshko@Dobriq.com",
        },
      ],
    };
  },
  methods: {},
});

app.component("friend-contact", {
  template: `
    <li>
    <h2>{{ friend.name}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Peshko",
        name: "Peshko Dobriq",
        phone: "5645645645456",
        email: "Peshko@Dobriq.com",
      },
    };
  },
  toggleDetails() {
    this.detailsAreVisible = !this.detailsAreVisible;
  },
});

app.mount("#app");
