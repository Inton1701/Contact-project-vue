// import nyo yung models ng contact
const Contact = require("../models/Contact");
// npm install asyncHandlerthe import nyo dito para hindi na kayo gagamit ng try-catch
const asyncHandler = require("express-async-handler")
//Note: sa postman nyo itetest ito then proceed kayo sa frontend kapag working lahat
//Note: required gumamit ng asyc await kapag mag CRUD kayo

const contacts = {
    
    //get all contacts
    getAllContacts: asyncHandler( async(req, res)=> {
        // dapat naka await ito, yung find naman if compare natin sa mysql, yun ay SELECT * or select all
        const getAllContacts = await Contact.find();
        // seset natin yung status sa 201 then kapag na fetch na yan sa vue e pwede natin malaman kung successfull ba yung pagkuha json file
        // 201 meaning successfull
        res.status(201).json({getAllContacts});
    }),
    //Add or Create a new contact
    createContacts: asyncHandler(async (req, res)=> {
            // yung req.body ay ginagamit kapag post and method kapag get naman or nasa link yung data na ipapasa nyo ay params
            // ipapasa nyo sa mga variable yung data galing sa post request ninyo na req.body
            const {name, email, phone, designation} = req.body;
            //check if may laman lahat ng variable
            if(!name || !email || !phone || !designation) {
                // kapag walang laman check nyo sa set nyo yung status code sa 400
                res.status(400);
              // kapag walang laman ito mag stop na yung code dito
                throw new Error("All fields must be provided");
            }
            // if may laman lahat ng fields, mag create na yung contact sa database
            
            const contact  = await Contact.create({name:name, email:email, phone:phone, designation:designation});
            // if success yung creation na data seset nyo yung status code sa 201 meaning success
            res.status(201).json({contact});
    }),
    // get specific contact
    getContact: asyncHandler( async (req, res)=> {
        // nasa link yung id kaya req.params ang gagamitin ninyo
        // then gamitin nyo yung findbyId() na method para mahanap ninyo yung specific na id 
        // and rereturn nito sa contact variable if may nag match na id ay yung data nung nagmatch
        const contact = await Contact.findById(req.params.id);
        // then check if meron id sa contact na kamatch
        if(!contact) {
        // if walang nahanap na contact base sa id ilalagay nyo sa  status ay 404 meaning not found
            res.status(404);
            throw new Error("Contact not found");
        }
        // if meron nagmatch seset nyo yung status sa 201 meaning success yung request then convert sa json file yung data sa variable na contact
        res.status(201).json(contact);       
    }),
    // update or edit a contact
    editContact: asyncHandler( async(req, res)=> {
        // same logic lang ito dun sa getContact na function
        const contact = await Contact.findById(req.params.id);
        if(!contact) {
            res.status(404);
            throw new Error("Contact not found");
        }
        // findByIdAndUpdate(id na aaupdate ninyo, updated data galing sa req.body, {new: true} meaning kung applied ba ginawa ninyo na update)
        
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(201).json(updatedContact);
    }),
    // delete contact
    deleteContact: asyncHandler(async (req, res)=> {
        const contact = await Contact.findById(req.params.id);
        if(!contact) {
            res.status(404);
            throw new Error("Contact not found");
        }
        // delete one id base dun sa parameter na pinasa ninyo
        const deleteContact = await Contact.deleteOne({_id: req.params.id});
        res.status(201).json(`${req.params.id}  is Deleted!`);
    })


}
module.exports = contacts;