import React from "react";
import classes from "./Footer.module.css";
import { Instagram } from "react-bootstrap-icons";

const DISCOVERS = [
  { id: "p1", title: "ABOUT", subtitle: ["About Us"] },
  {
    id: "p2",
    title: "CUSTOMER SERVCE",
    subtitle: ["FAQ", "Delivery Service", "Privacy Policy"],
  },
  { id: "p3", title: "FIND US", subtitle: ["Contact", "Stores"] },
  { id: "p4", title: "SOCIALS", subtitle: [<Instagram size={18}></Instagram>] },
];

function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.flexcontainer}>
          {DISCOVERS.map((prod) => (
            <div className={classes.wrapper} key={prod.id}>
              <p className={classes.title}>{prod.title}</p>
              {prod.subtitle.map((type, index) => {
                return (
                  <p key={index} className={classes.subtitle}>
                    {type}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footer;
