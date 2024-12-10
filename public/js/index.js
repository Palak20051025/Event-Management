const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.getElementById('explore-btn');
  
    exploreButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor behavior
  
      const targetSection = document.querySelector(exploreButton.getAttribute('href'));
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
  }

/* google map intrigation*/
  function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('bar');
    const mapIframe = document.getElementById('map-iframe');

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchQuery = searchInput.value.trim();
      if (searchQuery) {
        geocodeSearchQuery(searchQuery, mapIframe);
      }
    });
  }

  initSearch();
  

// ---------  THIS Section is to be implemented in backend ----------
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://rishabhtomar9999:Appii@2004@cluster0.p7uhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
//
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// -------------------------------------------------


window.onload = ()=>{

  // hero section background - KUTEjs SVG morphing animation
  KUTE.fromTo( '#herogroupsvg-000', { path: '#herogroupsvg-000' }, { path: '#herogroupsvg-100' }, { repeat: 999, duration: 5000, yoyo: true }).start();
  KUTE.fromTo( '#herogroupsvg-001', { path: '#herogroupsvg-001' }, { path: '#herogroupsvg-101' }, { repeat: 999, duration: 5000, yoyo: true }).start();
  KUTE.fromTo( '#herogroupsvg-002', { path: '#herogroupsvg-002' }, { path: '#herogroupsvg-102' }, { repeat: 999, duration: 5000, yoyo: true }).start();
  KUTE.fromTo( '#herogroupsvg-010', { path: '#herogroupsvg-010' }, { path: '#herogroupsvg-110' }, { repeat: 999, duration: 5000, yoyo: true }).start();
  KUTE.fromTo( '#herogroupsvg-011', { path: '#herogroupsvg-011' }, { path: '#herogroupsvg-111' }, { repeat: 999, duration: 5000, yoyo: true }).start();
  KUTE.fromTo( '#herogroupsvg-012', { path: '#herogroupsvg-012' }, { path: '#herogroupsvg-112' }, { repeat: 999, duration: 5000, yoyo: true }).start();

}
