<script>
  import Arrow from '../icons/Arrow.svg';
  export let items = [];
</script>

<ul>
  {#each items as { href, title }}
    <li>
      <a {href}>
        <Arrow />
        <span>{title}</span></a
      >
    </li>
  {/each}
</ul>

<style>
  ul {
    columns: 25ch;
    max-width: 90ch;
    padding: 1em;
  }
  li {
    break-inside: avoid;
    margin-bottom: 2.5ch;
  }
  li:before {
    content: unset;
  }

  li > a {
    border-bottom: 1px solid grey;
    display: flex;
    text-decoration: none;
  }
</style>
