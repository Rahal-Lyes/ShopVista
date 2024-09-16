<template>
  <div class="p-6 bg-gray-100 min-h-screen ml-14">
    <!-- Dashboard Cards -->
    <section class="grid grid-cols-3 gap-6">
      <div class="bg-white shadow-lg p-6 rounded-lg">
        <h2 class="text-xl font-bold">Total Users</h2>
        <p class="mt-2 text-gray-600">1,200</p>
      </div>
      <div class="bg-white shadow-lg p-6 rounded-lg">
        <h2 class="text-xl font-bold">Revenue</h2>
        <p class="mt-2 text-gray-600">$35,000</p>
      </div>
      <div class="bg-white shadow-lg p-6 rounded-lg">
        <h2 class="text-xl font-bold">New Orders</h2>
        <p class="mt-2 text-gray-600">45</p>
      </div>
    </section>

    <!-- Other Dashboard Content -->
    <section class="mt-6">
      <h2 class="text-2xl font-semibold">Recent Activity</h2>
      <div class="bg-white shadow-lg p-4 rounded-lg mt-4">
        <ul>
          <li class="py-2 border-b">User Lyes logged in</li>
          <li class="py-2 border-b">User Mohamed placed an order</li>
          <li class="py-2 border-b">User Ali updated profile</li>
          <li class="py-2">User Salim left a review</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // You can replace these static values with real data
    };
  },
};
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
