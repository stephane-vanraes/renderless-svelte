/**
 * Accordion
 */
type AccordionContext = (fn: () => void) => void;

/**
 * TabControl
 */
type TabControlItem = {
	active: boolean;
	disabled: boolean;
	id: string;
	payload: unknown;
	select: () => bool;
	deselect: () => void;
};

type TabControlContext = {
	add: (item: TabControlItem) => void;
	remove: (id: string) => void;
	select: (id: string) => bool;
	update: (id: string, item: TabControlItem) => void;
};
