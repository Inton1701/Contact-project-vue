<template>
   <div class="container mt-4">
    <div class="row">
        <div class="col-md-6">
            <form @submit.prevent="addContact">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="inputedContact.name">
                </div><br>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="inputedContact.email">
                </div><br>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="tel" class="form-control" id="phone" placeholder="Enter phone number" v-model="inputedContact.phone">
                </div><br>
                <div class="form-group">
                    <label for="phone">Designation:</label>
                    <input type="tel" class="form-control" id="phone" placeholder="Enter designation" v-model="inputedContact.designation">
                </div><br>
                <button type="submit" class="btn btn-dark btn-sm mt-4">Submit</button>
            </form>
        </div>
    </div>
   </div>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios';
import { useToast } from 'vue-toastification';
    const inputedContact = ref({
        name: '',
        email: '',
        phone: '',
        designation: ''
    });
const toast = useToast();

    const addContact = async () =>{
        console.log(inputedContact.value);

        if(!inputedContact.value.name || !inputedContact.value.email || inputedContact.value.phone || !inputedContact.value.designation) {
            toast.error('All fields are required');
        }
        try{
            const url = 'http://localhost:5000/';
            const response = await axios.post(url, inputedContact.value);
  
            if(response.status === 201){
                toast.success('Contact added successfully');
                inputedContact.value = {
                name: '',
                email: '',
                phone: '',
                designation: ''
            }
            }else{
                toast.error('Failed to add contact');
            }
    
        }catch(error) {
            console.log(error);
        }
    }
</script>