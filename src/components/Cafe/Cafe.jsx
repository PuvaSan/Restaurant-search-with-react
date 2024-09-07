import { Button } from "@material-tailwind/react";

// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;

// /// Card example data ///
// picture: "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
// title: "DDSK SAIGON KITCHEN",
// address: "ss, 135-0061, Tokyo",
// criteria: ["Power sockets", "Quiet"]

import "./Cafe.css";

export function ButtonDirections() {
  return (
    <div className="flex w-max gap-4">
      <Button
      variant="gradient"
      size="sm"
      >gradient</Button>
    </div>
  );
}

function Cafe() {
  return (
    <div>
      <div className="cafe-card">
        <img src="https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg" alt="cafe" />
        <h2>DDSK SAIGON KITCHEN</h2>
        <p>ss, 135-0061, Tokyo</p>
        <p>
          <span>Power sockets</span>
          <span>Quiet</span>
        </p>
        <a href="https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo">View on map</a>
        <Button />
      </div>
    </div>
  );
}

export default Cafe;
