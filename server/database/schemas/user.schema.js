import { Schema } from "mongoose";
import sha256 from "sha256";
const userSchema = new Schema(
  {
    hashedPassword: { type: String, required: true },
    username: { type: String, required: true },
    preferences: {
      general: { type: Boolean, default: true },
      business: { type: Boolean, default: false },
      entertainment: { type: Boolean, default: false },
      health: { type: Boolean, default: false },
      science: { type: Boolean, default: false },
      sports: { type: Boolean, default: false },
      technology: { type: Boolean, default: false },
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
