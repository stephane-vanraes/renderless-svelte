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
        background-color: var(--primary);
        border-right: 2px solid var(--black);
        flex: 0 0 20ch;
    }

    button {
        background-color: transparent;
        border-radius: 4px;
        border: none;
        display: none;
        fill: var(--primary);
        position: fixed;
        bottom: .5rem;
        left: .5rem;
        height: 40px;
        width: 40px;
        z-index: 100;
    }

    nav.open + button,
    button:active,
    button:hover,
    button:focus {
        background-color: var(--secondary);
        fill: var(--black);
        outline: none;
    }

    @media screen and (max-width: 550px) {
        button {
            display: block;
        }
        nav {
            border-right: 0;
            display: none;
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: 99;
        }
        nav.open {
            display: block;
        }
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
    </div>
</nav>
<button on:click="{() => open = !open}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z"/>
    </svg>
</button>