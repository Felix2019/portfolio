<template>
  <div>
    <label for="title" class="block mb-2 text-sm font-medium text-gray-900">{{
      label
    }}</label>

    <div
      class="flex flex-row items-center bg-white rounded-lg shadow focus:ring-blue-600"
    >
      <input
        :type="type"
        :name="title"
        class="appearance-none w-full p-3 rounded-lg text-gray-900 bg-transparent"
        :placeholder="placeholder"
        :value="value"
        :autocomplete="autocomplete"
        required
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
  },
  setup(props) {},
};
</script>
