<template>
  <div id="app">
    <!-- Image and text -->
    <nav
      id="nav"
      class="navbar navbar-expand-md navbar-light bg-light"
      style="padding-left: 30px; padding-right: 30px"
    >
      <a class="navbar-brand" href="#"> MyGarden </a>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Početna</router-link>
        </li>
      </ul>

      <div class="input-group w-25 ms-auto pt-4 pb-4">
        <input
          type="search"
          class="form-control rounded-left"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button
          type="button"
          class="btn btn-outline-secondary rounded-left"
          data-mdb-ripple-init
        >
          search
        </button>
      </div>

      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/prijava" class="nav-link">Prijava</router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-view />
    </div>
    <body>
      <div class="container d-flex flex-row-reverse align-items-center">
        <div class="image">
          <img
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/6901cd93-2e5a-4150-a0e4-d97e1638c9a5.__CR0,0,970,600_PT0_SX970_V1___.jpg"
          />
        </div>
        <div class="text">
          <h1>
            <font color="#00b007">Koristi</font> MyGarden
            <font color="#00b007">
              aplikaciju i uredi svoj vrt s različitim vrstama biljaka
            </font>
          </h1>
          <button type="button" class="btn btn-success">Registriraj se</button>
          <h1>
            Pretraži različite ponude drugih ljubitelja i uzgajivača biljaka
          </h1>
        </div>
      </div>
    </body>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #00b007;
    }
  }
}
</style>
