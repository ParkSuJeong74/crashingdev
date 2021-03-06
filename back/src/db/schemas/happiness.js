import pkg from "mongoose";
const { Schema, model } = pkg;

// 데이터셋 칼럼
const HappinessSchema = new Schema(
  {
    rank: {
      type: Number,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
      unique: true,
    },
    happinessScore: {
      type: Number,
      required: true,
    },
    dystopia: {
      type: Number,
      required: true,
    },
    gdp: {
      type: Number,
      required: true,
    },
    socialSupport: {
      type: Number,
      required: true,
    },
    health: {
      type: Number,
      required: true,
    },
    freedom: {
      type: Number,
      required: true,
    },
    generosity: {
      type: Number,
      required: true,
    },
    corruptionPerceptions: {
      type: String,
      required: true,
    },
    continent: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Happiness = model("Happiness", HappinessSchema);
