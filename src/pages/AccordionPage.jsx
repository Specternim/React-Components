import Accordion from "../components/Accordion";

export default function AccordionPage() {
  const items = [
    {
      id: "sds4d",
      label: "Can I use React on a project?",
      content:
        "Morbi cursus lacinia convallis. Etiam sodales eros id nunc sodales, convallis pulvinar nibh vestibulum. Aenean sodales, libero sit amet molestie posuere, libero lacus iaculis lorem, nec mollis velit quam eu eros. Donec ac dictum ligula, non elementum ex. Donec nibh tortor, semper sit amet ex et, euismod auctor purus. Vestibulum fringilla auctor arcu, at vulputate justo porta ac. Sed sit amet finibus nulla, vel euismod leo. Nullam dictum arcu eget nulla consequat efficitur Vivamus ultrices arcu quis consectetur tristique. In facilisis tortor nulla, eu scelerisque ligula elementum ut. Donec a sodales nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla odio erat, auctor et quam in, rhoncus volutpat elit. Nunc rutrum rhoncus vestibulum. Phasellus eu vehicula nunc, nec bibendum arcu. Maecenas at venenatis risus. Proin in pharetra elit. In sagittis semper est, quis pellentesque lectus. Sed rhoncus eleifend eros, a cursus massa. Vivamus ut dolor.",
    },
    {
      id: "5sd4s",
      label: "Can I use Vue on a project?",
      content:
        "Quisque lacinia imperdiet interdum. Fusce tristique sed ex in maximus. Quisque ac massa vitae turpis porttitor blandit. Aenean lacinia in elit vitae laoreet. Sed tincidunt hendrerit magna, ut rutrum sapien. Vestibulum fringilla auctor arcu, at vulputate justo porta ac. Sed sit amet finibus nulla, vel euismod leo. Nullam dictum arcu eget nulla consequat efficitur Vivamus ultrices arcu quis consectetur tristique. In facilisis tortor nulla, eu scelerisque ligula elementum ut. Donec a sodales nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla odio erat, auctor et quam in, rhoncus volutpat elit. Nunc rutrum rhoncus vestibulum. Phasellus eu vehicula nunc, nec bibendum arcu. Maecenas at venenatis risus. Proin in pharetra elit. In sagittis semper est, quis pellentesque lectus. Sed rhoncus eleifend eros, a cursus massa. Vivamus ut dolor.",
    },
    {
      id: "5a4d",
      label: "Can I use Svelte on a project?",
      content:
        "Sed tristique efficitur mi, sed varius nulla. Nam at eros justo. Maecenas non maximus lectus. Sed euismod porta odio a suscipit. Proin posuere lorem augue. Duis nunc justo, fermentum eu. Quisque lacinia imperdiet interdum. Fusce tristique sed ex in maximus. Quisque ac massa vitae turpis porttitor blandit. Aenean lacinia in elit vitae laoreet. Sed tincidunt hendrerit magna, ut rutrum sapien. Vestibulum fringilla auctor arcu, at vulputate justo porta ac.",
    },
  ];

  return <Accordion items={items} />;
}
