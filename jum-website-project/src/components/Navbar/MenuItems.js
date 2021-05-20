export const MenuItems = [
  { title: "Baumeister", path: "/baumeister", className: "dropdown-link" },
  {
    title: "Malerei & Anstrich",
    path: "/malereianstrich",
    className: "dropdown-link",
  },
  {
    title: "Installationen",
    path: "/intallationen",
    className: "dropdown-link",
  },
  {
    title: "Bodenlegerarbeiten",
    path: "/bodenlegerarbeiten",
    className: "dropdown-link",
  },
  {
    title: "Verfliesung",
    path: "/verfliesung",
    className: "dropdown-link",
  },
  {
    title: "Gebäudereinigung",
    path: "/gebäudereinigung",
    className: "dropdown-link",
    undercategory: [
      { id: 1, title: "Endreinigung" },
      { id: 2, title: "Unterhaltsreinigung" },
    ],
  },
  {
    title: "Transporte & Lager",
    path: "/transportelager",
    className: "dropdown-link",
  },
  {
    title: "Gerichtliche Delogierungen",
    path: "/gerichtlichedelogierungen",
    className: "dropdown-link",
  },
  {
    title: "Hauswartservice & Winterdienst",
    path: "/hauswartservicewinterdienst",
    className: "dropdown-link",
    undercategory: [
      { id: 1, title: "Hauswartservice" },
      { id: 2, title: "Winterdienst" },
    ],
  },
];
