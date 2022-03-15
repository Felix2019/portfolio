<template>
  <div>
    <AppBar />

    <div class="bg-gradient-to-b from-slate-100 to-slate-300">
      <section class="h-screen flex flex-col items-center justify-evenly p-5">
        <ProfileImage />
        <ProfileInfo />
        <LinkTree />
      </section>

      <section ref="projects" class="h-screen py-20 px-8">
        <Projects />
      </section>

      <section ref="about" class="h-screen py-20 px-8">
        <ContactForm />
      </section>
    </div>
  </div>
</template>

<script setup>
import ProfileImage from "../components/profile-image.vue";
import ProfileInfo from "../components/profile-info.vue";
import LinkTree from "../components/link-tree.vue";
import { ref, provide } from "vue";
import AppBar from "../components/app-bar.vue";
import Projects from "../components/projects.vue";
import ContactForm from "../components/contact-form.vue";

const projects = ref();
const about = ref();

// provide reactive values globally
provide("projects", projects);
provide("about", about);
</script>
