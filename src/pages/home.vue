<template>
  <div>
    <AppBar />

    <div class="bg-gradient-to-b from-slate-100 to-slate-300 px-8">
      <section class="h-screen flex flex-col items-center justify-evenly">
        <ProfileImage />
        <ProfileInfo />
        <LinkTree />
      </section>

      <section ref="projects">
        <Projects />
      </section>

      <section ref="about" class="h-screen">
        <ContactForm />
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import ProfileImage from "../components/profile_image.vue";
import ProfileInfo from "../components/profile_info.vue";
import LinkTree from "../components/link_tree.vue";
import AppBar from "../components/app_bar.vue";
import Projects from "../components/projects.vue";
import ContactForm from "../components/contact_form.vue";
import Footer from "../components/footer.vue";

const projects = ref();
const about = ref();

// provide reactive values globally
provide("projects", projects);
provide("about", about);
</script>
