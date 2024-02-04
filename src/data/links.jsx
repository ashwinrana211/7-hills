export const links = [
  {
    linkName: "Home",
    linkTo: "/"
  },
  {
    linkName: "About",
    linkTo: "about",
    submenu: true,
    sublinks: [
      {
        sublinkName: "About Us",
        sublinkTo: "about"
      },
      {
        sublinkName: "FAQ",
        sublinkTo: "faq"
      },
      {
        sublinkName: "Galery",
        sublinkTo: "galery"
      },
      {
        sublinkName: "Services",
        sublinkTo: "services"
      },
      {
        sublinkName: "Page 404",
        sublinkTo: "page404"
      }
    ]
  },
  {
    linkName: "Hotels",
    linkTo: "rooms",
    submenu: true,
    sublinks: [
      {
        sublinkName: "Himkund Cottages by 7 Hills",
        sublinkTo: "himkund"
      },
      {
        sublinkName: "Sunset Villa by 7 Hills",
        sublinkTo: "sunset"
      }
    ]
  },
  {
    linkName: "Restaurant",
    linkTo: "restaurant",
    submenu: true,
    sublinks: [
      {
        sublinkName: "7 Hills Restaurant",
        sublinkTo: "restaurant"
      }
    ]
  },
  {
    linkName: "Contact",
    linkTo: "contact"
  }
];
