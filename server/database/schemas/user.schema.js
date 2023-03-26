import { Schema } from "mongoose";
import sha256 from "sha256";
const userSchema = new Schema(
  {
    hashedPassword: { type: String, required: true },
    username: { type: String, required: true },
    preferences: {
      general: { type: Boolean, default: true },
      business: { type: Boolean, default: true },
      entertainment: { type: Boolean, default: true },
      health: { type: Boolean, default: true },
      science: { type: Boolean, default: true },
      sports: { type: Boolean, default: true },
      technology: { type: Boolean, default: true },
    },
  },
  {
    methods: {
      comparePassword(password) {
        return this.hashedPassword === sha256(password);
      },
    },
  }
);

export default userSchema;
