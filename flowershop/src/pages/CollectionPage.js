import React from "react";
import classes from "./CollectionPage.module.css";

function CollectionPage() {
  return (
    <>
      <div className={classes.cards}>
        <div>
          <img className={classes.imge} />
          <h1 className={classes.text}>LOVE</h1>
        </div>
        <div>
          <img className={classes.imge} />
          <h1 className={classes.text}>CARE</h1>
        </div>
        <div>
          <img className={classes.imge} />
          <h1 className={classes.text}>BIRTHDAY</h1>
        </div>
        <div>
          <img className={classes.imge} />
          <h1 className={classes.text}>WEDDING</h1>
        </div>
      </div>
    </>
  );
}

export default CollectionPage;
