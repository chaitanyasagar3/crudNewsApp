import { Schema } from 'mongoose';
import sha256 from 'sha256';
const userSchema = new Schema({
    hashedPassword: { type: String, required: true },
    username: { type: String , required: true },
},
{ 
    methods: {
        comparePassword(password) {
            return this.hashedPassword === sha256(password);
        }
    }
});

export default userSchema;
