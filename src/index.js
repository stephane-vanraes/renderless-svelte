import Accordion from './Accordion.svelte'
import AccordionGroup from './AccordionGroup.svelte'
import Carousel from './Carousel.svelte'
import Notification, { notifications } from './Notifications.svelte'
import Modal, { closeModal, openModal } from './Modal.svelte'
import ModalV2, { closeModalV2, openModalV2 } from './ModalV2.svelte'
import TabControl from './TabControl.svelte'
import TabControlItem from './TabControlItem.svelte'
import Tooltip, { tooltip } from './Tooltip.svelte'

const Accordeon = Accordion
const AccordeonGroup = AccordionGroup

export {
    Accordion,
    AccordionGroup,
    Carousel,
    closeModal,
    closeModalV2,
    Modal,
    ModalV2,
    Notification,
    notifications,
    openModal,
    openModalV2,
    TabControl,
    TabControlItem,
    Tooltip,
    tooltip,
    
    /* Deprecated */
    Accordeon,
    AccordeonGroup
}

export const Renderless = {
    Accordion,
    AccordionGroup,
    Carousel,
    closeModal,
    closeModalV2,
    Modal,
    ModalV2,
    Notification,
    notifications,
    openModal,
    openModalV2,
    TabControl,
    TabControlItem,
    Tooltip,
    tooltip,
    
    /* Deprecated */
    Accordeon,
    AccordeonGroup
}
