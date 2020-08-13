<script>
    import Button from '../components/Button.svelte'
    import Card from '../components/Card.svelte'
    import Link from '../components/Link.svelte'
    import Section from '../components/Section.svelte'
    import Modal, { openModal } from '../components/MyModal.svelte'
    import Tooltip, { tooltip } from '../components/MyTooltip.svelte'
    import FrontPageCarousel from '../examples/FrontPageCarousel.svelte'
    import FrontPageTabControl from '../examples/FrontPageTabControl.svelte'
    import { notifications } from '../components/Notifications.svelte'

</script>

<style>
    .hero {
        background: var(--darkblue);
        background-image: url(/cube.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
        height: 100vh;
        margin-top: -5rem;
        padding-top: 5rem;
        width: 100%;
    }
    .hero > div {
        text-align: center;
    }
    .smallblock {
        border: 1px solid var(--orange);
        display: block;
        padding: 1rem;
        width: 20ch;
    }
</style>


<Modal let:close>
    <Section title="Modal Example">
        <span>This is an example of a modal, read more about them in the <Link href="/components/modal">Components</Link>.</span>
        <span>This modal has been set up to be closed either by the button below, by clicking on the semi opaque background, or by pressing the <strong>ESC</strong> key.</span>

        <Button on:click={close}>Close</Button>
    </Section>
</Modal>

<div class="hero">
    <div>
        <h1>Renderless Svelte</h1>
        <span>Components that look like nothing at all.</span>
    </div>
</div>


<Section title="About">
    <span><strong>Renderless Svelte</strong> is a component library like no others, while other libraries offer you nicely styled buttons, inputfields and what not, Renderless Svelte offers you absolute nothing aesthetically pleasing.  In fact, if you just use the components as they are, you will only render blank space to your screen.</span>
    <span>What it <strong>does</strong> offer though is an abstraction of common patterns in a reusable, 100% configurable way. Think of use cases like <Link href="/components/notifications">notifications</Link>, <Link href="/components/modal">modals</Link> and more.</span>
    <span>You can read more about the philosophy of renderless component in the <Link href="/about">About</Link> page.</span>
</Section>

<Section title="Animations">
    <span>Animations are left as an exercies to the reader 🎓</span>
    <span>Renderless Svelte only takes cares of common functionality without any rendering, animations can be considered to be part of the render, and therefore fall outside of the scope of this project.  That said, work has been (and will continue to be done) to create hooks and exposure to facilitate animations.</span>
</Section>

<Section title="Components">
    <Card>
        <Link href="/components/modal"><h3>Modals</h3></Link>
        <span>Modals are a staple in web application and are often used to provide some kind of interaction related to the current page without leaving said page.</span>
        <Button on:click="{openModal}">Open an example</Button>
    </Card>

    <Card>
        <Link href="/components/tooltip"><h3>Tooltips</h3></Link>
        <span>Tooltips are visual elements that appear when the user hover's over elements, they can be used to provide more information about the element itself or clarify functionality of interactive elements.</span>
        <div class="smallblock" use:tooltip={"This is a toolip"}>
            If you hover over this text you will see it in action.
        </div>
    </Card>

    <Card>
        <Link href="/components/carousel"><h3>Carousels</h3></Link>
        <span>Carousels are often used to showcase elements in a more digestable way.</span>
        <FrontPageCarousel />
    </Card>

    <Card>
        <Link href="/components/notifications"><h3>Notifications</h3></Link>
        <span>Notification are used to give the user feedback about something, they come in many different shapes and form, so a renderless component is extremely handy to be able to style them as you wish.</span>
        <Button on:click="{() => notifications.push("Squirrel 🐿️🐿️")}">Show me</Button>
    </Card>

    <Card>
        <Link href="/components/tabcontrol"><h3>TabControl</h3></Link>
        <span>This component helps you keep your UI a bit more organized by hiding certain parts behind tabs.</span>
        <FrontPageTabControl />
    </Card>

</Section>