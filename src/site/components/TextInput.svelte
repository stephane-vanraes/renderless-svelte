<script>
  export let label;
  export let value;
</script>

<label>
  <span>{label}</span>
  <input type="text" bind:value />
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
