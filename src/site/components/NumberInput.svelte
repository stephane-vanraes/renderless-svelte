<script>
  export let label;
  export let max = 10;
  export let min = 0;
  export let value = 0;
</script>

<label>
  <span>{label}</span>
  <input type="number" bind:value {min} {max} on:change />
</label>

<style>
  label {
    display: flex;
    flex-direction: column;
  }

  input {
    border-bottom: 2px solid hsl(var(--primary-hue), var(--primary-sat), 40%);
    padding: 0.5em;
  }
  input:is(:active, :focus, :hover) {
    background-color: hsl(var(--primary-hue), var(--primary-sat), 80%);
  }
</style>
