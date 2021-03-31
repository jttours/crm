function Contact(args) {

    if (args.First_Name && typeof args.First_Name !== 'string') {
        throw new Error("Firstname must be a string");
    }

    /**
     * The user id that own the contact
     *
     * @type {int}
     */
    this.Contact_Owner = args.Contact_Owner;
    /**
    * Contact id
    *
    * @type {int}
    */
    this.Contact_Id = args.Contact_Id;
    /**
     * First name of the contact.
     *
     * @type {string}
     */
    this.First_Name = args.First_Name;
    /**
     * The job position of the contact.
     *
     * @type {string}
     */
    this.Title = args.Title;
    /**
     * Last name of the contact, this field is mandatory.
     *
     * @type {string}
     */
    this.Last_Name = args.Last_Name;
    /**
     * Specify the birthday of the contact to send greetings for a better relationship.
     *
     * @type {Date}
     */
    this.Date_Of_Birth = args.Date_Of_Birth;
    /**
     * Last user login datetime
     *
     * @type {Date}
     */
    this.Last_Login = args.Last_Login;
    /**
     * Phone number of the contact.
     *
     * @type {string}
     */
    this.Phone = args.Phone;
    /**
     * Modile number of the contact.
     *
     * @type {string}
     */
    this.Mobile = args.Mobile;
    /**
     * Fax number of the contact.
     *
     * @type {string}
     */
    this.Fax = args.Fax;
    /**
     * Email address of the contact.
     *
     * @type {string}
     */
    this.Email = args.Email;
    /**
     * Secondary email address of the contact.
     *
     * @type {string}
     */
    this.Secondary_Email = args.Secondary_Email;
    /**
     * Skype ID of the contact. Currently skype ID
     * can be in the range of 6 to 32 characters.
     *
     * @type {string}
     */
    this.Skype_ID = args.Skype_ID;
    /**
     * Other details about the contact.
     *
     * @type {string}
     */
    this.Description = args.Description;
    /**
     * Specify the primary address of the contact.
     *
     * Divided into 4 parts:
     *
     *     @type {string}
     *     @type {string}
     *     @type {string}
     *     @type {string}
     */
    this.Street = args.Street;
    this.City = args.City;
    this.Zip_Code = args.Zip_Code;
    this.Country = args.Country;
}

module.exports = Contact;