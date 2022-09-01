let state = {
    navBar: {
        navButtons: [
            {id: 1, label: 'Projects'},
            {id: 2, label: 'Resume'},
            {id: 3, label: 'Contact'}
        ]
    },
    sideBar: {
        sideButtons: [
            {id: 1, label: 'GitHub', link: 'https://github.com/tehrazeh', redirect: 1},
            {id: 2, label: 'Diploma', link: '/diploma', redirect: 0},
            {id: 3, label: 'LinkedIn', link: 'https://www.linkedin.com/in/danilatolstoukhov/', redirect: 1}
        ]
    },
}

export default state
