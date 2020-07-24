<script>
    import Footer from '../components/Footer.svelte'
    import Header from '../components/Header.svelte'
    import Nav from '../components/Nav.svelte'
</script>

<style>
    .bottom, .top {
        fill: var(--primary-dark);
        height: 40px;
        width: 100%;
        z-index: 100;
    }
    .bottom {
        transform: translateY(6px);
    }
    .top {
        filter: url(#top-shadow);
        position: fixed;
        top: 35px;
    }
    main {
        color: var(--black);
        margin: 60px 1rem 0 1rem;
        min-height: calc(100vh - 145px);
    }
</style>

<svg class="top"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <defs>
        <filter id="top-shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="4"/>
        </filter>
    </defs>
    <path d="M0 256l34.3-10.7C68.6 235 137 213 206 186.7c68.3-26.7 137-58.7 205-80C480 85 549 75 617 101.3c68.7 26.7 137 90.7 206 128 68.4 37.7 137 47.7 206 21.4 68.1-26.7 137-90.7 205-96 68.9-5.7 137 48.3 172 74.6l34 26.7V0H0z"/>
</svg>


<Header />

<main>
    <slot></slot>
</main>

<svg class="bottom"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path fill="#2c6e49" d="M0 128h34.3c34.3 0 102.7 0 171.7 5.3C274.3 139 343 149 411 176c69 27 138 69 206 48 68.7-21 137-107 206-122.7C891.4 85 960 139 1029 160c68.1 21 137 11 205 0 68.9-11 137-21 172-26.7l34-5.3v192H0z"/>
</svg>

<Footer />
