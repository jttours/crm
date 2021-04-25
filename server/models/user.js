
function User() {
    /**
     * The user id that own the contact
     *
     * @type {int}
     */
    this.User_Owner = null;
    /**
     * Specify the user id.
     *
     * @type {int}
     */
    this.User_Id = null;
    /**
     * Email of the user.
     *
     * @type {string}
     */
    this.email = null;
    /**
     * User's role.
     *
     * @type {('Admin' | 'Member')}
     */
    this.role = null;
    /**
     * User's profile.
     *
     * @type {string}
     */
    this.profile = null;
    /**
     * Status of user.
     *
     * @type {('Active' | 'Deleted' | 'Freezed')}
     */
    this.status = null;
    /**
     * User hashed password
     * @type {string}
     */
    this.Password = null;
}

module.exports = User;