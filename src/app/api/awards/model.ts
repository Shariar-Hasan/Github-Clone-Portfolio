import { AwardType } from "@/types/propsTypes";
import mongoose from "mongoose";

const awardSchema = new mongoose.Schema<AwardType>(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    links: [
      {
        title: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    createdAt: {
      type: Number,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Number,
      default: () => Date.now(),
    },
  },
  { versionKey: false }
);
awardSchema.pre("save", async function (next) {
  this.slug = this.title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
  try {
    const constructorThis: any = this.constructor;
    const documentCount = await constructorThis.countDocuments({
      slug: this.slug,
    });
    // check document exits or not
    if (documentCount > 0) {
      this.slug = `${this.slug}-${Date.now()}`;
      this.updatedAt = Date.now();
    }
    console.log(
      "New slug created for " +
        this.title +
        " is " +
        this.slug +
        " and document count is " +
        documentCount
    );
    next();
  } catch (err: any) {
    next(err);
  }
});

export const Award =
  mongoose.models.Award || mongoose.model("Award", awardSchema);
