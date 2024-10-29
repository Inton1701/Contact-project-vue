
const mongoose = require("mongoose");
// note: dito naman parang gumagawa lang kayo ng table tulad dun sa mysql
// note: ito na yung mismong itsura ng database ninyo dito na kayo mag edit na data
// note: every type of object ay 1 schema tulad dito, example bukod yung model para sa product , para sa category, para sa orders etc.
const contactSchema = new mongoose.Schema({
    name:{
        type: String,// in mysql varchar
        required: [true, "Please add the contact name"],
    },
    email:{
        type: String,
        unique: true, // cannot be duplicated
        required: [true, "Please add the contact email address"],
    },
    phone:{
        type: String,
        required: [true, "Please add the contact phone"],
    },
    designation:{
        type: String,
        required: [true, "Please add the contact designation"],
    }

},{
    // ito yung ginagamit para automaticaly mag add ng created_date at update_date
    timestamps: true,
}
);
// ganito naman yung pag imposrt nya mongoose.model('alias ng object',Object)
module.exports = mongoose.model("Contact", contactSchema);