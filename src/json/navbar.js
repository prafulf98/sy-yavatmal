const navList = [
    {
        id: "1",
        name: "Home",
        navRoute: "/",
        isEverware: true,
        feature: "all"
    },
    {
        id: "2",
        name: "About",
        isEverware: false,
        feature: "all",
        toggleBtn: true,
        aboutItems: [
            {
                name: "Shree Mataji",
                navRoute: "/about-shree-mataji",
                feature: "all"
            },
            {
                id: "4",
                name: "About Sahajyoga",
                navRoute: "/about-sahajyoga",
                feature: "all"
            },
        ]
    },
    {
        id: "3",
        name: "Yavatmal Sahajyoga",
        navRoute: "/about-yavatmal-sahajyoga",
        isEverware: false,
        feature: "all"
    },
    {
        id: "5",
        name: "Centers",
        navRoute: "/centers/Yavatmal",
        isEverware: true,
        feature: "all"
    },
    {
        id: "7",
        name: "Events",
        navRoute: "/events",
        isEverware: true,
        feature: "all"
    },
    {
        id: "8",
        name: "Prachar-Prasar",
        navRoute: "/prachar-prasar",
        isEverware: true,
        feature: "all"
    },
    // events , prachar prasar
    // english , marathi, ashram development
    {
        id: "9",
        name: "Donation",
        navRoute: "/donation",
        isEverware: false,
        feature: "all"
    },
    {
        id: "6",
        name: "Contact Us",
        navRoute: "/contact-us",
        isEverware: true,
        feature: "all"
    },
]

export default navList;