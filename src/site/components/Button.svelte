<button {...$$restProps} on:click><slot /></button>

<style>
  button {
    align-items: center;
    border: 2px solid hsl(var(--primary-hue), var(--primary-sat), 20%);
    border-radius: 0.25em;
    display: flex;
    gap: 1ch;
    padding: 0.25em 1em;
  }

  button:is(:active, :focus, :hover) {
    background-color: hsl(var(--primary-hue), var(--primary-sat), 80%);
  }
</style>
