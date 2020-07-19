<script>
    import NavItem from './NavItem.svelte'
</script>

<style>
    nav {
        background-color: var(--secondary);
        color: white;
        display: inline-block;
        min-height: calc(100vh - 50px);
        overflow-y: scroll;
        position: fixed;
        top: 50px;
        width: 25ch;
    }
</style>

<nav>
    <NavItem href="/" title="Introduction" />
    <NavItem href="/getting-started" title="Getting Started" />
    <NavItem title="Components" />
    <div>
        <NavItem href="/components/notifications" title="Notifications">
            <NavItem href="/components/notifications/example-popup" title="Simple popup" />
            <NavItem href="/components/notifications/example-banner" title="Banner" />
            <NavItem href="/components/notifications/example-log" title="As a log" />
        </NavItem>
    </div>

</nav>