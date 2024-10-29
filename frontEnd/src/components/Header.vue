<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand text-light" to="/">{{title}}</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <router-link class="nav-link text-light  active" aria-current="page" to="/">Contact List</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light"  to="/addContact">Create Contact</router-link>
        </li>
 
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>