<template>
  <div class="d-flex justify-content-between bg-black">
    <div>
      <h1 class="text-white">BoolFlix</h1>
    </div>
    <div class="">
      <nav class="navbar navbar-light">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
