// copied from https://github.com/sveltejs/language-tools/blob/master/packages/svelte2tsx/svelte-shims.d.ts#L5
// as per https://github.com/sveltejs/language-tools/issues/28#issuecomment-683428477

declare class Svelte2TsxComponent<
    Props extends {} = {},
    Events extends {} = {},
    Slots extends {} = {}
    > {
    // svelte2tsx-specific
    /**
     * @internal This is for type checking capabilities only
     * and does not exist at runtime. Don't use this property.
     */
    $$prop_def: Props;
    /**
     * @internal This is for type checking capabilities only
     * and does not exist at runtime. Don't use this property.
     */
    $$events_def: Events;
    /**
     * @internal This is for type checking capabilities only
     * and does not exist at runtime. Don't use this property.
     */
    $$slot_def: Slots;
    // https://svelte.dev/docs#Client-side_component_API
    constructor(options: {
        /**
         * An HTMLElement to render to. This option is required.
         */
        target: Element;
        /**
         * A child of `target` to render the component immediately before.
         */
        anchor?: Element;
        /**
         * An object of properties to supply to the component.
         */
        props?: Props;
        hydrate?: boolean;
        intro?: boolean;
        $$inline?: boolean;
    });
    /**
     * Causes the callback function to be called whenever the component dispatches an event.
     * A function is returned that will remove the event listener when called.
     */
    $on<K extends keyof Events>(event: K, handler: (e: Events[K]) => any): () => void;
    /**
     * Removes a component from the DOM and triggers any `onDestroy` handlers.
     */
    $destroy(): void;
    /**
     * Programmatically sets props on an instance.
     * `component.$set({ x: 1 })` is equivalent to `x = 1` inside the component's `<script>` block.
     * Calling this method schedules an update for the next microtask — the DOM is __not__ updated synchronously.
     */
    $set(props: Partial<Props>): void;
    // From SvelteComponent(Dev) definition
    $$: any;
    $capture_state(): void;
    $inject_state(): void;
}

// Accordion.svelte

export declare class Accordion extends Svelte2TsxComponent
    <{}, {
        isOpen: boolean,
        toggle: () => void,
    }>{}

export declare class Accordeon extends Svelte2TsxComponent
<{}, {
    isOpen: boolean,
    toggle: () => void,
}>{}

// Carousel.svelte

interface CarouselControls {
    next: () => number,
    previous: () => number,
}

export declare class Carousel extends Svelte2TsxComponent
    <{
        items: any[], currentIndex: number, loop: boolean, controls: CarouselControls
    }, {}, {
        currentIndex: number,
        payload: any,
        setIndex: (val: number) => void,
        controls: CarouselControls,
        loop: boolean,
    }>{ }


// Modal.svelte

export declare function openModal(payload: any): Promise<any>;
export declare function closeModal(): void;
export declare class Modal extends Svelte2TsxComponent
    <{}, {}, { payload: any, closeModal: typeof closeModal }> { }


// Notifications.svelte

export declare let notifications: {
    pop: () => void;
    push: (val: any) => void;
    subscribe: any;
}
export declare class Notification extends Svelte2TsxComponent
    <{ duration: number }, { notify: any }, { payload: any }> { }


// TabControl.svelte
export declare class TabControl extends Svelte2TsxComponent
    <{ tabs: any[] }, {}, { tabs: any[] }> { }


// TabControlItem.svelte
export declare class TabControlItem extends Svelte2TsxComponent
    <{ active: boolean, disabled: boolean, id: any, payload: any }, {}, {}> { }


// Tooltip.svelte

export declare function tooltip<U extends any[], El extends any>(node: El, ...args: U): {
    update?: (...args: U) => void,
    destroy?: () => void
} | void;

interface Dimensions {
    x: number;
    y: number;
    width: number;
    height: number;
    bottom: number;
    left: number;
    right: number;
    top: number;
}
export declare class Tooltip extends Svelte2TsxComponent
    <{}, {}, { dimensions: Dimensions, options: any }> { }
