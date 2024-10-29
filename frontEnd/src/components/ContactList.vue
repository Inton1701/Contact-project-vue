<template>
    <div class="container">
        <ClipLoader v-if="loading" />
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact #</th>
                    <th>Designation</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts" v-bind:key="contact._id" class="table-secondary">
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.phone }}</td>
      
                    <td>
                        <a href="#" class="btn btn-primary btn-sm mx-1">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm mx-1">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

const apiUrl = 'http://localhost:5000';
const contacts = ref([]);
const loading = ref(true);

const getContacts = async () => {
    try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        contacts.value = response.data; 
        console.log(contacts.value);
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
};
onMounted(() => {
    getContacts();
});
</script>
