<script>
    import { stores } from '@sapper/app'
    import { fly } from 'svelte/transition'
    import NavItem from './NavItem.svelte'

    const { page } = stores()
    let open = false

    page.subscribe(_ => open = false)
</script>

<style>
    nav {
        background-color: var(--primary-dark);
        bottom: 20px;
        display: none;
        left: 0;
        position: fixed;
        top: 40px;
        width: 100%;
    }

    nav.open {
        display: block;
    }

    button {
        background-color: transparent;
        border-radius: 4px;
        border: none;
        display: block;
        fill: var(--white);
        height: 40px;
        position: fixed;
        right: .5rem;
        top: 0;
        width: 40px;
        z-index: 100;
    }

    nav.open + button,
    button:active,
    button:hover,
    button:focus {
        outline: none;
    }
</style>


<nav class:open>
    <NavItem href="/" title="Introduction" />
    <NavItem href="/getting-started" title="Getting Started" />
    <NavItem title="Components" />
    <div>
        <NavItem href="/components/carousel" title="Carousel">
            <NavItem href="/components/carousel/example-plain" title="Plain" />
            <NavItem href="/components/carousel/example-index" title="With index" />
            <NavItem href="/components/carousel/example-noloop" title="Without looping" />
        </NavItem>
        <NavItem href="/components/modal" title="Modal">
            <NavItem href="/components/modal/example-plain" title="Plain" />
            <NavItem href="/components/modal/example-component" title="Component Based" />
            <NavItem href="/components/modal/example-dynamic" title="Dynamic Content" />
        </NavItem>
        <NavItem href="/components/notifications" title="Notifications">
            <NavItem href="/components/notifications/example-popup" title="Simple popup" />
            <NavItem href="/components/notifications/example-banner" title="Banner" />
            <NavItem href="/components/notifications/example-log" title="As a log" />
        </NavItem>
        <NavItem href="/components/tabcontrol" title="TabControl">
            <NavItem href="/components/tabcontrol/example-basic" title="Basic" />
            <NavItem href="/components/tabcontrol/example-responsive" title="Responsive" />
            <NavItem href="/components/tabcontrol/example-component" title="With component" />
        </NavItem>
        <NavItem href="/components/tooltip" title="Tooltip">
            <NavItem href="/components/tooltip/example-basic" title="Basic" />
            <NavItem href="/components/tooltip/example-options" title="With options" />
            <NavItem href="/components/tooltip/example-component" title="With components" />
        </NavItem>
    </div>
</nav>
<button on:click="{() => open = !open}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z"/>
    </svg>
</button>