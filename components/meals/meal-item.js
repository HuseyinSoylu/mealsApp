import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./meal-item.module.css";

const MealItem = ({ title, slug, image, summary, creator }) => {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image
            src={`https://maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com/${image}`}
            alt={title}
            width={300}
            height={200}
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>
            <a>View Details</a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
