import LINKS from './links';

const navItems = [
    {
        label: 'STRUCTURES DE SANTE',
        to: LINKS.STRUCTURE_LIST,
        exact: true,
        icon: 'healing'
    }, {
        label: 'MEDICAMENTS AMO',
        to: LINKS.MEDICAMENTS_LIST,
        icon: 'local_hospital'
    }, {
        label: 'AGENTS DE SANTE',
        to: LINKS.AGENTS_SANTE_LIST,
        icon: 'person'
    }, {
        label: 'NUMEROS UTILES',
        to: LINKS.NUMEROS_LIST,
        icon: 'format_list_numbered'
    }, {
        label: 'QUELQUES CONSEILS',
        to: LINKS.CONSEILS_LIST,
        icon: 'help'
    }
];

export default navItems;