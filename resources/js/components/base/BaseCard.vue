<template>
  <v-card outlined rounded flat v-bind="$attrs" v-on="$listeners">
      <slot />
  </v-card>
</template>

<script>
export default {
    name: "BaseCard"

}
</script>
