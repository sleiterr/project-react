function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>name + " ✅"</del>;
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h2>Sally Ride's Packing List</h2>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={false} name="Helment with a golden leaf" />
        <Item isPacked={true} name="Photo of Tam" />
      </ul>
    </section>
  );
}

/*<li className="item">{isPacked ? <del>{name + "✅"}</del> : name}</li>*/
