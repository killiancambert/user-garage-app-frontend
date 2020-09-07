<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Nest User Garage App</h1>
      <p>Built with Nest.js, Vue.js and MongoDB</p>
      <div v-if="cars.length === 0">
        <h2>No car found at the moment</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Model</th>
            <th scope="col">Model Number</th>
            <th scope="col">Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="car in cars" :key="car._id">
            <td>{{ car.model }}</td>
            <td>{{ car.modelNumber }}</td>
            <td>{{ car.owner }}</td>
            <td>
              <div class="mx-auto">
                <div class="btn-group" style="margin-bottom: 20px;">
                  <router-link
                    :to="{ name: 'EditCar', params: { id: car._id } }"
                    class="btn btn-md btn-outline-success mx-2"
                    >Edit Car
                  </router-link>
                  <button
                    class="btn btn-md btn-outline-danger mx-2"
                    v-on:click="deleteCar(car._id)"
                  >
                    Delete Car
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      cars: [],
    };
  },
  created() {
    this.fetchCars();
  },
  methods: {
    fetchCars() {
      axios
        .get(`${server.baseURL}/car/cars`)
        .then((data) => (this.cars = data.data));
    },
    deleteCar(id) {
      axios.delete(`${server.baseURL}/car/delete?carID=${id}`).then((data) => {
        console.log(data);
        window.location.reload();
      });
    },
  },
};
</script>
