<template>
  <div>
    <ul>
      <li :class="{ inline: inline}">
        <a><h1>{{item1}}</h1></a>
      </li>
      <li :class="{inline: inline}">
        <a><h1>{{item2}}</h1></a>
      </li>
      <li :class="{inline: inline}">
        <a><h1>{{item3}}</h1></a>
      </li>
      <li :class="{inline: inline}">
        <a><h1>{{item4}}</h1></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    item1: String,
    item2: String,
    item3: String,
    item4: String,
    inline: Boolean
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inline {
  display: inline-block;
}
li {
  background-color: #2b96e0;
  border-radius: 10px;
  border: 3px solid #063d8f;
  width: 10%;
  line-height: 5px;
  text-align: center;
  margin: 1em;
  list-style: none
}

a {
  color: #000000;
  text-decoration: none;
  font-size: 13px;
  font-weight: inherit;
}
</style>